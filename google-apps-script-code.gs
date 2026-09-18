/**
 * ==============================================================================
 * KU CSC Hub — Google Drive Image Upload Web App (Google Apps Script)
 * ==============================================================================
 * 
 * สคริปต์นี้ทำหน้าที่เป็นตัวกลางรับไฟล์รูปภาพจากหน้าเว็บ KU CSC Editor
 * และบันทึกลงใน Google Drive ของท่าน พร้อมคืนค่า URL รูปภาพสาธารณะถาวร
 * 
 * ขั้นตอนการติดตั้ง (ทำครั้งเดียว 2 นาที):
 * 1. ไปที่ https://script.google.com/ แล้วกด "โครงการใหม่ (New Project)"
 * 2. ลบโค้ดเดิมทั้งหมด แล้วคัดลอกโค้ดในไฟล์นี้ไปวาง
 * 3. กดปุ่ม "การทำให้ใช้งานได้ (Deploy)" > "การทำให้ใช้งานได้ใหม่ (New deployment)"
 * 4. เลือกประเภท: "เว็บแอป (Web app)"
 * 5. ตั้งค่าการเข้าถึง:
 *    - ดำเนินการในฐานะ (Execute as): "ฉัน (Me)"
 *    - ผู้ที่มีสิทธิ์เข้าถึง (Who has access): "ทุกคน (Anyone)"  <-- สำคัญมาก!
 * 6. กด "การทำให้ใช้งานได้ (Deploy)" แล้วคัดลอก "URL เว็บแอป (Web App URL)"
 * 7. นำ URL ที่ได้ไปวางในหน้าเว็บ editor.html ที่ปุ่ม "ตั้งค่า Google Drive"
 * ==============================================================================
 */

// ชื่อโฟลเดอร์ใน Google Drive ที่ต้องการให้เก็บรูปภาพ
var FOLDER_NAME = "KU CSC Hub Images";

/**
 * ฟังก์ชันรับคำสั่ง GET (สำหรับทดสอบการเชื่อมต่อ Health Check)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    message: "KU CSC Hub Google Drive API is ready!",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * ฟังก์ชันรับคำสั่ง POST (สำหรับอัปโหลดไฟล์รูปภาพ)
 */
function doPost(e) {
  try {
    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      throw new Error("No data received");
    }

    var base64Data = data.base64;
    var filename = data.filename || ("image_" + Date.now() + ".jpg");
    var mimeType = data.mimeType || "image/jpeg";
    var customFolder = data.folder || FOLDER_NAME;

    // ตัดส่วน data:image/...;base64, ออกหากมี
    if (base64Data.indexOf("base64,") > -1) {
      base64Data = base64Data.split("base64,")[1];
    }

    // แปลง base64 เป็น Blob
    var decoded = Utilities.base64Decode(base64Data);
    var blob = Utilities.newBlob(decoded, mimeType, filename);

    // ค้นหาหรือสร้างโฟลเดอร์ใน Google Drive
    var folderIterator = DriveApp.getFoldersByName(customFolder);
    var targetFolder;
    if (folderIterator.hasNext()) {
      targetFolder = folderIterator.next();
    } else {
      targetFolder = DriveApp.createFolder(customFolder);
    }

    // สร้างไฟล์ในโฟลเดอร์
    var file = targetFolder.createFile(blob);

    // ตั้งค่าสิทธิ์ให้ทุกคนที่มีลิงก์สามารถดูรูปภาพได้ (Public Read)
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    var fileId = file.getId();
    
    // Direct CDN URL สำหรับแสดงผลบนเว็บไซต์โดยตรง
    var directUrl = "https://lh3.googleusercontent.com/d/" + fileId;
    var fallbackUrl = "https://drive.google.com/uc?export=view&id=" + fileId;

    var response = {
      status: "success",
      fileId: fileId,
      filename: filename,
      directUrl: directUrl,
      fallbackUrl: fallbackUrl,
      viewUrl: file.getUrl()
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    var errorResponse = {
      status: "error",
      message: error.toString()
    };
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
