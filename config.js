/**
 * KU CSC Hub — Global Configuration
 * ===================================
 * แก้ไขไฟล์นี้เพียงครั้งเดียวหลังจาก Deploy Google Apps Script แล้ว
 * จากนั้น push ขึ้น GitHub — ทุกอุปกรณ์จะโหลดข้อมูลจาก Google Drive อัตโนมัติ
 *
 * วิธีตั้งค่า:
 * 1. Deploy Google Apps Script ตามคู่มือใน GOOGLE_DRIVE_SETUP_GUIDE.md
 * 2. คัดลอก Web App URL ที่ได้
 * 3. วางลงในช่อง gasEndpoint ด้านล่าง (แทนที่ข้อความว่าง)
 * 4. git add config.js && git commit -m "Set GAS endpoint" && git push
 */
window.KUCSC_CONFIG = {
  // ← วาง Google Apps Script Web App URL ของคุณที่นี่
  // ตัวอย่าง: "https://script.google.com/macros/s/AKfycb.../exec"
  gasEndpoint: "https://script.google.com/macros/s/AKfycbxc6UO6Cr13MjWUFLAvZ6ghfKShGG7ADAkPLLTgdgdo1Fw70tWmQmbQZysEVBzHbXQH/exec"
};
