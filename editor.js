/**
 * KU CSC Hub - Real-time Editor Script (เว็บที่ 2: สำหรับแก้ไขข้อมูลและเปลี่ยนรูปภาพ)
 * Kasetsart University Chalermphrakiat Sakon Nakhon Campus
 */

// Initial 15 Departments (Defaults)
const INITIAL_DEPARTMENTS = [
  {
    id: "ku-csc-main",
    name: "ม.เกษตรศาสตร์ วข.เฉลิมพระเกียรติ จ.สกลนคร",
    subtitle: "Kasetsart University Chalermphrakiat Sakon Nakhon Campus",
    category: "faculty",
    url: "https://www.facebook.com/Kasetsart.Sakonnakhon",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-university",
    colorTheme: "from-emerald to-green",
    desc: "ช่องทางหลักวิทยาเขตเฉลิมพระเกียรติ จ.สกลนคร ข้อมูลข่าวสารประชาสัมพันธ์ ทุนการศึกษา และกิจกรรมมหาวิทยาลัย",
    tags: ["มก", "ฉกส", "วิทยาเขต", "สกลนคร", "ประชาสัมพันธ์", "kucsc"]
  },
  {
    id: "faculty-nrai",
    name: "คณะทรัพยากรธรรมชาติและอุตสาหกรรมเกษตร",
    subtitle: "Faculty of Natural Resources and Agro-Industry (NRAI)",
    category: "faculty",
    url: "https://www.facebook.com/NRAI.CSC.KU",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-seedling",
    colorTheme: "from-green to-amber",
    desc: "มุ่งเน้นการผลิตบัณฑิต วิจัยและบริการวิชาการด้านเกษตร อาหาร และทรัพยากรธรรมชาติอย่างยั่งยืน",
    tags: ["nrai", "เกษตร", "ทรัพยากรธรรมชาติ", "อุตสาหกรรมเกษตร", "สัตวศาสตร์", "พืชศาสตร์"]
  },
  {
    id: "faculty-kuse",
    name: "คณะวิทยาศาสตร์และวิศวกรรมศาสตร์",
    subtitle: "Faculty of Science and Engineering (KUSE)",
    category: "faculty",
    url: "https://www.facebook.com/KUSECSC",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-gears",
    colorTheme: "from-cyan to-green",
    desc: "สร้างสรรค์นวัตกรรม เทคโนโลยี วิศวกรรมศาสตร์ และวิทยาศาสตร์ประยุกต์เพื่อการพัฒนาประเทศ",
    tags: ["kuse", "วิศวะ", "วิทยาศาสตร์", "คอมพิวเตอร์", "โยธา", "ไฟฟ้า", "เครื่องกล", "วิศวกรรม"]
  },
  {
    id: "faculty-lams",
    name: "คณะศิลปศาสตร์และวิทยาการจัดการ",
    subtitle: "Faculty of Liberal Arts and Management Science (LAMS)",
    category: "faculty",
    url: "https://www.facebook.com/LAMS.KU.CSC",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-briefcase",
    colorTheme: "from-blue to-purple",
    desc: "บ่มเพาะผู้นำด้านการจัดการ บริหารธุรกิจ การบัญชี การท่องเที่ยว และภาษาเพื่อการสื่อสารระดับสากล",
    tags: ["lams", "บริหารธุรกิจ", "ศิลปศาสตร์", "บัญชี", "การตลาด", "การจัดการ", "การท่องเที่ยว", "ภาษาอังกฤษ"]
  },
  {
    id: "faculty-ph",
    name: "คณะสาธารณสุขศาสตร์",
    subtitle: "Faculty of Public Health",
    category: "faculty",
    url: "https://www.facebook.com/PublicHealth.ku.csc",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-notes-medical",
    colorTheme: "from-teal to-blue",
    desc: "ผลิตบัณฑิตสาธารณสุขศาสตร์ที่มีคุณภาพ ส่งเสริมสุขภาพและอนามัยสิ่งแวดล้อมเพื่อสุขภาวะชุมชน",
    tags: ["สาธารณสุข", "อนามัย", "สุขภาพ", "การส่งเสริมสุขภาพ", "ph", "สธ"]
  },
  {
    id: "service-reg",
    name: "งานทะเบียนและประมวลผล",
    subtitle: "Office of the Registrar, KU CSC",
    category: "service",
    url: "https://www.facebook.com/Register.csc",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-id-card",
    colorTheme: "from-indigo to-blue",
    desc: "งานลงทะเบียนเรียน ตารางสอน-ตารางสอบ ตรวจสอบผลการเรียน บัตรนิสิต และเอกสารสำคัญทางการศึกษา",
    tags: ["ทะเบียน", "ลงทะเบียน", "เกรด", "ตารางสอบ", "ประมวลผล", "จบการศึกษา", "reg"]
  },
  {
    id: "service-sa",
    name: "งานกิจการนิสิต",
    subtitle: "Student Affairs Division, KU CSC",
    category: "service",
    url: "https://www.facebook.com/sa.ku.csc",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-users",
    colorTheme: "from-orange to-green",
    desc: "งานกิจกรรมนิสิต วินัยและสวัสดิการนิสิต หอพัก ทหารกองเกิน และให้คำปรึกษาการใช้ชีวิตในรั้วมหาวิทยาลัย",
    tags: ["กิจการนิสิต", "กิจกรรม", "ชั่วโมงกิจกรรม", "หอพัก", "ผ่อนผันทหาร", "สวัสดิการ"]
  },
  {
    id: "service-fund",
    name: "กองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ. มก.ฉกส.)",
    subtitle: "Student Loan Fund (SLF), KU CSC",
    category: "service",
    url: "https://www.facebook.com/search/top?q=%E0%B8%81%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%81%E0%B8%B9%E0%B9%89%E0%B8%A2%E0%B8%B7%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%20%E0%B8%A1%E0%B8%81.%E0%B8%89%E0%B8%81%E0%B8%AA.",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-hand-holding-dollar",
    colorTheme: "from-amber to-emerald",
    desc: "ประสานงานการกู้ยืมเงิน กยศ. / กรอ. ประกาศขั้นตอนการทำสัญญา กิจกรรมจิตอาสา และการเบิกจ่ายเงินกู้ยืม",
    tags: ["กยศ", "กรอ", "เงินกู้", "ทุนการศึกษา", "กู้ยืมเพื่อการศึกษา", "จิตอาสา"]
  },
  {
    id: "service-clinic",
    name: "สถานพยาบาล มก.ฉกส.",
    subtitle: "University Infirmary & Healthcare Center",
    category: "service",
    url: "https://www.facebook.com/infirmary.ku.csc40766",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-hospital",
    colorTheme: "from-teal to-rose",
    desc: "บริการตรวจรักษาพยาบาลเบื้องต้น ปฐมพยาบาล การส่งต่อแพทย์ สิทธิบัตรทอง และการประกันอุบัติเหตุนิสิต",
    tags: ["พยาบาล", "ห้องพยาบาล", "หาหมอ", "ประกันอุบัติเหตุ", "สุขภาพ", "บัตรทอง", "ยา"]
  },
  {
    id: "gov-kusab",
    name: "องค์การบริหาร องค์การนิสิต (อบ.ก. มก.ฉกส.)",
    subtitle: "Student Administrative Organization, KU CSC",
    category: "student-gov",
    url: "https://www.facebook.com/kusabcsc",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-landmark",
    colorTheme: "from-purple to-green",
    desc: "องค์กรตัวแทนนิสิตในการจัดกิจกรรมกลาง คอนเสิร์ต กีฬานนทรีเกมส์ ค่ายอาสา และประสานสิทธิประโยชน์ของนิสิต",
    tags: ["อบก", "องค์การนิสิต", "kusab", "กิจกรรมกลาง", "นนทรี", "ตัวแทนนิสิต"]
  },
  {
    id: "gov-council",
    name: "สภาผู้แทนนิสิต องค์การนิสิต",
    subtitle: "Student Council, KU CSC",
    category: "student-gov",
    url: "https://www.facebook.com/profile.php?id=61558176067489",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-scale-balanced",
    colorTheme: "from-indigo to-purple",
    desc: "องค์กรฝ่ายนิติบัญญัติ ทำหน้าที่พิจารณางบประมาณ ตรวจสอบการดำเนินกิจกรรม และพิทักษ์สิทธิประโยชน์ของนิสิต",
    tags: ["สภานิสิต", "สภาผู้แทนนิสิต", "ตรวจสอบ", "งบประมาณ", "สิทธิเสรีภาพนิสิต", "ตัวแทน"]
  },
  {
    id: "club-nrai",
    name: "สโมสรนิสิตคณะทรัพยากรธรรมชาติและอุตสาหกรรมเกษตร",
    subtitle: "Student Union of Natural Resources and Agro-Industry",
    category: "student-club",
    url: "https://www.facebook.com/profile.php?id=100057155842349",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-wheat-awn",
    colorTheme: "from-green to-amber",
    desc: "สโมสรนิสิตผู้ดูแลและจัดกิจกรรมต้อนรับน้องใหม่ กิจกรรมสโมสร และเชื่อมสัมพันธ์ชาวคณะ วข.ฉกส.",
    tags: ["สโมสร", "สโม", "nrai", "สโมสรเกษตร", "กิจกรรมนิสิตเกษตร"]
  },
  {
    id: "club-smofse",
    name: "สโมสรนิสิตคณะวิทยาศาสตร์และวิศวกรรมศาสตร์ (SMOFSE)",
    subtitle: "Student Union of Science and Engineering (SMOFSE)",
    category: "student-club",
    url: "https://www.facebook.com/smofse",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-microchip",
    colorTheme: "from-cyan to-blue",
    desc: "ศูนย์รวมกิจกรรมนิสิตวิทย์-วิศวะ สกลนคร เสื้อคณะ กิจกรรมรับน้อง ค่ายวิศวกรรม และสายสัมพันธ์พี่น้อง",
    tags: ["smofse", "สโมสรวิศวะ", "สโมวิทย์", "วิทย์วิศวะ", "สโมสรนิสิต"]
  },
  {
    id: "club-lams",
    name: "สโมสรนิสิตคณะศิลปศาสตร์และวิทยาการจัดการ",
    subtitle: "Student Union of Liberal Arts & Management Science (NisitBA)",
    category: "student-club",
    url: "https://www.facebook.com/NisitBA.cscku",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-palette",
    colorTheme: "from-amber to-rose",
    desc: "สโมสรนิสิต NisitBA รวมพลังสร้างสรรค์กิจกรรม กีฬาสีภายใน การประกวด และสนับสนุนศักยภาพนิสิต",
    tags: ["nisitba", "สโมสรศิลปศาสตร์", "สโมวิทยาการจัดการ", "บริหาร", "สโมสร"]
  },
  {
    id: "club-ph",
    name: "สโมสรนิสิตคณะสาธารณสุขศาสตร์",
    subtitle: "Student Union of Public Health",
    category: "student-club",
    url: "https://www.facebook.com/profile.php?id=100079981372447",
    bannerUrl: "",
    logoUrl: "",
    icon: "fa-solid fa-heart-pulse",
    colorTheme: "from-teal to-green",
    desc: "ขับเคลื่อนกิจกรรมเพื่อสังคม เสริมสร้างความรักความสามัคคี และจิตวิญญาณแห่งวิชาชีพสาธารณสุข",
    tags: ["สโมสรสาธารณสุข", "สโมสธ", "กิจกรรมนิสิต", "สาธารณสุข"]
  }
];

class EditorApp {
  constructor() {
    this.departments = [];
    this.activeFilter = "all";
    this.searchQuery = "";
    this.syncChannel = null;
    this.currentDirectTargetId = null;
    this.gdriveEndpoint = localStorage.getItem("kucsc_gdrive_endpoint") || "";

    this.cacheDom();
    this.initTheme();
    this.initHeroBg();
    this.initRealtimeSync();
    this.loadData();
    this.bindEvents();
    this.initGdriveModal();
  }

  cacheDom() {
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.addNewDeptBtn = document.getElementById("addNewDeptBtn");
    this.resetDefaultsBtn = document.getElementById("resetDefaultsBtn");
    this.editorSearchInput = document.getElementById("editorSearchInput");
    this.editorClearSearchBtn = document.getElementById("editorClearSearchBtn");
    this.editorCategoryFilters = document.getElementById("editorCategoryFilters");
    this.editorFilteredCount = document.getElementById("editorFilteredCount");
    this.editorDeptList = document.getElementById("editorDeptList");
    this.editorEmptyState = document.getElementById("editorEmptyState");
    this.editorResetSearchBtn = document.getElementById("editorResetSearchBtn");

    // Hero Background controls
    this.editorHeroBgPreview = document.getElementById("editorHeroBgPreview");
    this.uploadHeroBgInput = document.getElementById("uploadHeroBgInput");
    this.urlHeroBgBtn = document.getElementById("urlHeroBgBtn");
    this.resetHeroBgBtn = document.getElementById("resetHeroBgBtn");
    this.clearHeroBgBtn = document.getElementById("clearHeroBgBtn");

    // Modal elements
    this.editorModalBackdrop = document.getElementById("editorModalBackdrop");
    this.editorModalTitle = document.getElementById("editorModalTitle");
    this.closeEditorModalBtn = document.getElementById("closeEditorModalBtn");
    this.cancelEditorModalBtn = document.getElementById("cancelEditorModalBtn");
    this.editorModalForm = document.getElementById("editorModalForm");

    this.formDeptId = document.getElementById("formDeptId");
    this.formDeptName = document.getElementById("formDeptName");
    this.formDeptSubtitle = document.getElementById("formDeptSubtitle");
    this.formDeptCategory = document.getElementById("formDeptCategory");
    this.formDeptUrl = document.getElementById("formDeptUrl");
    this.formDeptDesc = document.getElementById("formDeptDesc");

    this.formBannerFileInput = document.getElementById("formBannerFileInput");
    this.formBannerUrl = document.getElementById("formBannerUrl");
    this.formBannerPreview = document.getElementById("formBannerPreview");
    this.formClearBannerBtn = document.getElementById("formClearBannerBtn");

    this.formLogoFileInput = document.getElementById("formLogoFileInput");
    this.formLogoUrl = document.getElementById("formLogoUrl");
    this.formLogoPreview = document.getElementById("formLogoPreview");
    this.formClearLogoBtn = document.getElementById("formClearLogoBtn");

    // Direct file pickers
    this.directBannerFilePicker = document.getElementById("directBannerFilePicker");
    this.directLogoFilePicker = document.getElementById("directLogoFilePicker");

    // Google Drive modal elements
    this.gdriveConfigBtn = document.getElementById("gdriveConfigBtn");
    this.gdriveModalBackdrop = document.getElementById("gdriveModalBackdrop");
    this.closeGdriveModalBtn = document.getElementById("closeGdriveModalBtn");
    this.cancelGdriveModalBtn = document.getElementById("cancelGdriveModalBtn");
    this.gdriveEndpointInput = document.getElementById("gdriveEndpointInput");
    this.gdriveConfigStatus = document.getElementById("gdriveConfigStatus");
    this.gdriveStatusBox = document.getElementById("gdriveStatusBox");
    this.testGdriveBtn = document.getElementById("testGdriveBtn");
    this.saveGdriveBtn = document.getElementById("saveGdriveBtn");

    // Google Drive file inputs
    this.uploadHeroBgGDriveInput = document.getElementById("uploadHeroBgGDriveInput");
    this.formBannerGDriveInput = document.getElementById("formBannerGDriveInput");
    this.formLogoGDriveInput = document.getElementById("formLogoGDriveInput");

    // Toast
    this.editorToast = document.getElementById("editorToast");
    this.editorToastMsg = document.getElementById("editorToastMsg");
  }

  // ── Google Drive Helpers ─────────────────────────────────────────────────

  /**
   * Converts any Google Drive sharing URL into a direct embeddable CDN URL.
   * Supports:
   *   - https://drive.google.com/file/d/FILE_ID/view
   *   - https://drive.google.com/open?id=FILE_ID
   *   - https://drive.google.com/uc?id=FILE_ID
   *   - https://drive.google.com/thumbnail?id=FILE_ID
   *   - https://lh3.googleusercontent.com/d/FILE_ID  (already converted, pass-through)
   */
  convertGoogleDriveUrl(url) {
    if (!url || url.trim() === "") return url;

    // Already a direct lh3 CDN URL — no conversion needed
    if (url.includes("lh3.googleusercontent.com")) return url;

    // Match /file/d/FILE_ID
    let match = url.match(/\/file\/d\/([a-zA-Z0-9_-]{10,})/)
    if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;

    // Match ?id=FILE_ID or &id=FILE_ID
    match = url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
    if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;

    return url; // Not a Google Drive URL — return as-is
  }

  /**
   * Uploads a File object to the configured Google Apps Script Web App.
   * Returns the direct CDN URL on success, or null on failure.
   */
  async uploadToGoogleDrive(file, folderName = "KU CSC Hub Images") {
    if (!this.gdriveEndpoint) {
      alert("⚠️ ยังไม่ได้ตั้งค่า Google Apps Script Web App URL\nกรุณากดปุ่ม \"ตั้งค่า Google Drive\" ที่แถบเมนูด้านบนก่อน");
      return null;
    }

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (evt) => {
        // Strip the data:image/...;base64, prefix
        const base64Data = evt.target.result.split(",")[1];
        try {
          const resp = await fetch(this.gdriveEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "upload",
              fileName: file.name,
              mimeType: file.type,
              data: base64Data,
              folderName
            })
          });
          const json = await resp.json();
          if (json.status === "ok" && json.directUrl) {
            resolve(json.directUrl);
          } else {
            console.error("GDrive upload error:", json);
            resolve(null);
          }
        } catch (err) {
          console.error("GDrive fetch error:", err);
          resolve(null);
        }
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  initHeroBg() {
    const saved = localStorage.getItem("kucsc_hero_bg");
    const bgUrl = (saved !== null) ? saved : "./assets/hero_landmark_bg.jpg";
    this.updateHeroBgPreview(bgUrl);
  }

  updateHeroBgPreview(url) {
    if (!this.editorHeroBgPreview) return;
    if (url && url.trim() !== "") {
      this.editorHeroBgPreview.style.backgroundImage = `url('${url}')`;
      this.editorHeroBgPreview.innerHTML = "";
    } else {
      this.editorHeroBgPreview.style.backgroundImage = "none";
      this.editorHeroBgPreview.innerHTML = `<span style="font-size:0.68rem; color:var(--text-muted); display:flex; align-items:center; justify-content:center; height:100%;">ไม่มีรูป (สีพื้น)</span>`;
    }
  }

  setHeroBg(url, toastMsg) {
    localStorage.setItem("kucsc_hero_bg", url);
    this.updateHeroBgPreview(url);
    if (this.syncChannel) {
      this.syncChannel.postMessage({
        type: "HERO_BG_UPDATED",
        heroBg: url
      });
    }
    this.showToast(toastMsg || "เปลี่ยนรูปพื้นหลังส่วนหัวและซิงค์ Real-time สำเร็จ! 🎨");
  }

  initTheme() {
    const savedTheme = localStorage.getItem("kucsc_theme") || 
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("kucsc_theme", nextTheme);
    this.updateThemeIcon(nextTheme);
  }

  updateThemeIcon(theme) {
    if (!this.themeToggleBtn) return;
    const icon = this.themeToggleBtn.querySelector("i");
    if (theme === "dark") {
      icon.className = "fa-solid fa-sun";
      this.themeToggleBtn.style.color = "#fbbf24";
    } else {
      icon.className = "fa-solid fa-moon";
      this.themeToggleBtn.style.color = "";
    }
  }

  initRealtimeSync() {
    if (typeof BroadcastChannel !== "undefined") {
      this.syncChannel = new BroadcastChannel("ku_csc_sync");
      this.syncChannel.onmessage = (event) => {
        if (!event.data) return;
        if (event.data.type === "DATA_UPDATED") {
          this.departments = event.data.departments || [];
          this.render();
        } else if (event.data.type === "HERO_BG_UPDATED") {
          this.updateHeroBgPreview(event.data.heroBg);
        }
      };
    }
  }

  loadData() {
    try {
      const saved = localStorage.getItem("kucsc_directory_data");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.departments = parsed;
        } else {
          this.departments = [...INITIAL_DEPARTMENTS];
        }
      } else {
        this.departments = [...INITIAL_DEPARTMENTS];
        this.saveData(false);
      }
    } catch (e) {
      console.warn("Could not load from localStorage, using initial defaults", e);
      this.departments = [...INITIAL_DEPARTMENTS];
    }
    this.render();
  }

  saveData(notify = true, toastMessage = "บันทึกและซิงค์ Real-time สำเร็จแล้ว ⚡") {
    try {
      localStorage.setItem("kucsc_directory_data", JSON.stringify(this.departments));
      if (notify && this.syncChannel) {
        this.syncChannel.postMessage({
          type: "DATA_UPDATED",
          departments: this.departments
        });
      }
      if (toastMessage) {
        this.showToast(toastMessage);
      }
    } catch (e) {
      console.error("Failed to save data to localStorage", e);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล (อาจเกิดจากขนาดรูปภาพใหญ่เกินขีดจำกัดเบราว์เซอร์)");
    }
  }

  bindEvents() {
    // Theme toggle
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());
    }

    // Hero Background Controls (เปลี่ยนรูปภาพพื้นหลังส่วนหัว)
    if (this.editorHeroBgPreview && this.uploadHeroBgInput) {
      this.editorHeroBgPreview.addEventListener("click", () => {
        this.uploadHeroBgInput.click();
      });
    }

    if (this.uploadHeroBgInput) {
      this.uploadHeroBgInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            this.setHeroBg(evt.target.result, "เปลี่ยนรูปพื้นหลังส่วนหัวและซิงค์ Real-time เรียบร้อยแล้ว! 🎨");
            this.uploadHeroBgInput.value = "";
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (this.urlHeroBgBtn) {
      this.urlHeroBgBtn.addEventListener("click", () => {
        const current = localStorage.getItem("kucsc_hero_bg") || "./assets/hero_landmark_bg.jpg";
        const inputUrl = prompt("กรุณาระบุ URL รูปภาพสำหรับพื้นหลังส่วนหัว (Hero Background):", current);
        if (inputUrl !== null && inputUrl.trim() !== "") {
          this.setHeroBg(inputUrl.trim(), "เปลี่ยนรูปพื้นหลังส่วนหัวและซิงค์ Real-time เรียบร้อยแล้ว! 🎨");
        }
      });
    }

    if (this.resetHeroBgBtn) {
      this.resetHeroBgBtn.addEventListener("click", () => {
        this.setHeroBg("./assets/hero_landmark_bg.jpg", "คืนค่ารูปพื้นหลังซุ้มประตู มก.ฉกส. และซิงค์ Real-time แล้ว 🔄");
      });
    }

    if (this.clearHeroBgBtn) {
      this.clearHeroBgBtn.addEventListener("click", () => {
        const ok = confirm("คุณต้องการลบรูปภาพพื้นหลังส่วนหัวออก (ใช้สีพื้นหลังปกติ) ใช่หรือไม่?");
        if (ok) {
          this.setHeroBg("", "ลบรูปพื้นหลังส่วนหัวเรียบร้อยแล้ว");
        }
      });
    }

    // Add new department button
    if (this.addNewDeptBtn) {
      this.addNewDeptBtn.addEventListener("click", () => this.openAddModal());
    }

    // Reset to defaults button
    if (this.resetDefaultsBtn) {
      this.resetDefaultsBtn.addEventListener("click", () => {
        const ok = confirm("คุณต้องการคืนค่าข้อมูลเริ่มต้น 15 หน่วยงานของ มก.ฉกส. ใช่หรือไม่?\n(รูปภาพและข้อมูลที่เคยแก้ไขจะถูกรีเซ็ตกลับเป็นค่าเริ่มต้น)");
        if (ok) {
          this.departments = JSON.parse(JSON.stringify(INITIAL_DEPARTMENTS));
          this.saveData(true, "คืนค่าข้อมูลเริ่มต้นและซิงค์ Real-time เรียบร้อยแล้ว 🔄");
          this.render();
        }
      });
    }

    // Search input
    if (this.editorSearchInput) {
      this.editorSearchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (this.searchQuery) {
          this.editorClearSearchBtn.classList.add("show");
        } else {
          this.editorClearSearchBtn.classList.remove("show");
        }
        this.render();
      });
    }

    if (this.editorClearSearchBtn) {
      this.editorClearSearchBtn.addEventListener("click", () => {
        this.editorSearchInput.value = "";
        this.searchQuery = "";
        this.editorClearSearchBtn.classList.remove("show");
        this.editorSearchInput.focus();
        this.render();
      });
    }

    if (this.editorResetSearchBtn) {
      this.editorResetSearchBtn.addEventListener("click", () => {
        this.editorSearchInput.value = "";
        this.searchQuery = "";
        this.editorClearSearchBtn.classList.remove("show");
        this.activeFilter = "all";
        this.updateActiveFilterPill();
        this.render();
      });
    }

    // Filter pills
    if (this.editorCategoryFilters) {
      this.editorCategoryFilters.addEventListener("click", (e) => {
        const pill = e.target.closest(".filter-pill");
        if (!pill) return;
        this.activeFilter = pill.dataset.category;
        this.updateActiveFilterPill();
        this.render();
      });
    }

    // Modal close
    if (this.closeEditorModalBtn) this.closeEditorModalBtn.addEventListener("click", () => this.closeModal());
    if (this.cancelEditorModalBtn) this.cancelEditorModalBtn.addEventListener("click", () => this.closeModal());
    if (this.editorModalBackdrop) {
      this.editorModalBackdrop.addEventListener("click", (e) => {
        if (e.target === this.editorModalBackdrop) this.closeModal();
      });
    }

    // Modal Form: Banner File Upload & Clear
    if (this.formBannerFileInput) {
      this.formBannerFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            this.formBannerUrl.value = evt.target.result;
            this.updateBannerPreview(evt.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (this.formClearBannerBtn) {
      this.formClearBannerBtn.addEventListener("click", () => {
        this.formBannerUrl.value = "";
        this.updateBannerPreview("");
      });
    }

    // Note: Banner URL auto-convert is bound below after GDrive section

    // Modal Form: Logo File Upload & Clear
    if (this.formLogoFileInput) {
      this.formLogoFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            this.formLogoUrl.value = evt.target.result;
            this.updateLogoPreview(evt.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (this.formClearLogoBtn) {
      this.formClearLogoBtn.addEventListener("click", () => {
        this.formLogoUrl.value = "";
        this.updateLogoPreview("");
      });
    }

    // Note: Logo URL auto-convert is bound below after GDrive section

    // Form Submit
    if (this.editorModalForm) {
      this.editorModalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
    }

    // Direct Banner File Picker Handler
    if (this.directBannerFilePicker) {
      this.directBannerFilePicker.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file && this.currentDirectTargetId) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            this.updateDepartmentBanner(this.currentDirectTargetId, evt.target.result);
            this.directBannerFilePicker.value = "";
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // Direct Logo File Picker Handler
    if (this.directLogoFilePicker) {
      this.directLogoFilePicker.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file && this.currentDirectTargetId) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            this.updateDepartmentLogo(this.currentDirectTargetId, evt.target.result);
            this.directLogoFilePicker.value = "";
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // Google Drive: Hero Background upload
    if (this.uploadHeroBgGDriveInput) {
      this.uploadHeroBgGDriveInput.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        this.showToast("กำลังอัปโหลดภาพพื้นหลังเข้า Google Drive... ☁️");
        const url = await this.uploadToGoogleDrive(file, "KU CSC Hero Backgrounds");
        this.uploadHeroBgGDriveInput.value = "";
        if (url) {
          this.setHeroBg(url, "อัปโหลดภาพพื้นหลังเข้า Google Drive และซิงค์ Real-time สำเร็จ! ☁️⚡");
        } else {
          alert("❌ อัปโหลดไม่สำเร็จ\nกรุณาตรวจสอบ Google Apps Script Web App URL ในการตั้งค่า Google Drive");
        }
      });
    }

    // Google Drive: Banner upload (in modal form)
    if (this.formBannerGDriveInput) {
      this.formBannerGDriveInput.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        this.showToast("กำลังอัปโหลดแบนเนอร์เข้า Google Drive... ☁️");
        const url = await this.uploadToGoogleDrive(file, "KU CSC Banners");
        this.formBannerGDriveInput.value = "";
        if (url) {
          this.formBannerUrl.value = url;
          this.updateBannerPreview(url);
          this.showToast("อัปโหลดแบนเนอร์เข้า Google Drive สำเร็จ! ☁️");
        } else {
          alert("❌ อัปโหลดไม่สำเร็จ\nกรุณาตรวจสอบ Google Apps Script Web App URL ในการตั้งค่า Google Drive");
        }
      });
    }

    // Google Drive: Logo upload (in modal form)
    if (this.formLogoGDriveInput) {
      this.formLogoGDriveInput.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        this.showToast("กำลังอัปโหลดโลโก้เข้า Google Drive... ☁️");
        const url = await this.uploadToGoogleDrive(file, "KU CSC Logos");
        this.formLogoGDriveInput.value = "";
        if (url) {
          this.formLogoUrl.value = url;
          this.updateLogoPreview(url);
          this.showToast("อัปโหลดโลโก้เข้า Google Drive สำเร็จ! ☁️");
        } else {
          alert("❌ อัปโหลดไม่สำเร็จ\nกรุณาตรวจสอบ Google Apps Script Web App URL ในการตั้งค่า Google Drive");
        }
      });
    }

    // Auto-convert Google Drive URLs pasted into Banner URL field
    if (this.formBannerUrl) {
      this.formBannerUrl.addEventListener("input", (e) => {
        const converted = this.convertGoogleDriveUrl(e.target.value);
        if (converted !== e.target.value) this.formBannerUrl.value = converted;
        this.updateBannerPreview(converted);
      });
    }

    // Auto-convert Google Drive URLs pasted into Logo URL field
    if (this.formLogoUrl) {
      this.formLogoUrl.addEventListener("input", (e) => {
        const converted = this.convertGoogleDriveUrl(e.target.value);
        if (converted !== e.target.value) this.formLogoUrl.value = converted;
        this.updateLogoPreview(converted);
      });
    }

    // Global ESC key to close modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
        this.closeGdriveModal();
      }
    });
  }

  // ── Google Drive Modal ───────────────────────────────────────────────────

  initGdriveModal() {
    // Populate saved endpoint
    if (this.gdriveEndpointInput && this.gdriveEndpoint) {
      this.gdriveEndpointInput.value = this.gdriveEndpoint;
      this.updateGdriveStatus();
    }

    if (this.gdriveConfigBtn) {
      this.gdriveConfigBtn.addEventListener("click", () => this.openGdriveModal());
    }
    if (this.closeGdriveModalBtn) {
      this.closeGdriveModalBtn.addEventListener("click", () => this.closeGdriveModal());
    }
    if (this.cancelGdriveModalBtn) {
      this.cancelGdriveModalBtn.addEventListener("click", () => this.closeGdriveModal());
    }
    if (this.gdriveModalBackdrop) {
      this.gdriveModalBackdrop.addEventListener("click", (e) => {
        if (e.target === this.gdriveModalBackdrop) this.closeGdriveModal();
      });
    }
    if (this.saveGdriveBtn) {
      this.saveGdriveBtn.addEventListener("click", () => {
        const url = this.gdriveEndpointInput ? this.gdriveEndpointInput.value.trim() : "";
        this.gdriveEndpoint = url;
        localStorage.setItem("kucsc_gdrive_endpoint", url);
        this.updateGdriveStatus();
        this.showGdriveStatusBox(url ? "✅ บันทึก URL สำเร็จ พร้อมอัปโหลดไฟล์ไปยัง Google Drive!" : "🗑️ ลบ URL ออกแล้ว", url ? "success" : "warn");
        this.showToast("บันทึก Google Apps Script URL เรียบร้อยแล้ว ✅");
      });
    }
    if (this.testGdriveBtn) {
      this.testGdriveBtn.addEventListener("click", async () => {
        const url = this.gdriveEndpointInput ? this.gdriveEndpointInput.value.trim() : "";
        if (!url) {
          this.showGdriveStatusBox("⚠️ กรุณาใส่ URL ก่อน", "warn");
          return;
        }
        this.testGdriveBtn.disabled = true;
        this.testGdriveBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> กำลังทดสอบ...`;
        this.showGdriveStatusBox("กำลังทดสอบการเชื่อมต่อ...", "info");
        try {
          const resp = await fetch(url);
          const json = await resp.json();
          if (json.status === "ok") {
            this.showGdriveStatusBox(`✅ เชื่อมต่อสำเร็จ! เวอร์ชัน: ${json.version || "N/A"}`, "success");
          } else {
            this.showGdriveStatusBox(`⚠️ ตอบกลับได้ แต่สถานะไม่ถูกต้อง: ${JSON.stringify(json)}`, "warn");
          }
        } catch (err) {
          this.showGdriveStatusBox(`❌ เชื่อมต่อไม่สำเร็จ: ${err.message}`, "error");
        }
        this.testGdriveBtn.disabled = false;
        this.testGdriveBtn.innerHTML = `<i class="fa-solid fa-plug"></i> ทดสอบการเชื่อมต่อ`;
      });
    }
  }

  openGdriveModal() {
    if (this.gdriveEndpointInput) this.gdriveEndpointInput.value = this.gdriveEndpoint || "";
    this.hideGdriveStatusBox();
    if (this.gdriveModalBackdrop) this.gdriveModalBackdrop.classList.add("active");
  }

  closeGdriveModal() {
    if (this.gdriveModalBackdrop) this.gdriveModalBackdrop.classList.remove("active");
  }

  updateGdriveStatus() {
    if (!this.gdriveConfigStatus) return;
    if (this.gdriveEndpoint) {
      this.gdriveConfigStatus.innerHTML = `<span style="color:#047857;"><i class="fa-solid fa-circle-check"></i> เชื่อมต่อแล้ว</span>`;
    } else {
      this.gdriveConfigStatus.innerHTML = `<span style="color:var(--text-muted);">ยังไม่ได้ตั้งค่า</span>`;
    }
  }

  showGdriveStatusBox(message, type = "info") {
    if (!this.gdriveStatusBox) return;
    const colors = {
      success: { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.4)", text: "#047857" },
      warn:    { bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.4)",  text: "#92400e" },
      error:   { bg: "rgba(239,68,68,0.12)",   border: "rgba(239,68,68,0.4)",   text: "#b91c1c" },
      info:    { bg: "rgba(59,130,246,0.10)",  border: "rgba(59,130,246,0.35)", text: "#1e40af" }
    };
    const c = colors[type] || colors.info;
    this.gdriveStatusBox.style.cssText = `display:block; background:${c.bg}; border:1px solid ${c.border}; color:${c.text};`;
    this.gdriveStatusBox.textContent = message;
  }

  hideGdriveStatusBox() {
    if (this.gdriveStatusBox) this.gdriveStatusBox.style.display = "none";
  }

  updateActiveFilterPill() {
    const pills = this.editorCategoryFilters.querySelectorAll(".filter-pill");
    pills.forEach((pill) => {
      if (pill.dataset.category === this.activeFilter) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  getFilteredDepartments() {
    return this.departments.filter((item) => {
      const matchesCategory = this.activeFilter === "all" || item.category === this.activeFilter;
      if (!matchesCategory) return false;

      if (!this.searchQuery) return true;
      const q = this.searchQuery;
      const inName = item.name.toLowerCase().includes(q);
      const inSubtitle = item.subtitle ? item.subtitle.toLowerCase().includes(q) : false;
      const inDesc = item.desc ? item.desc.toLowerCase().includes(q) : false;
      const inTags = item.tags && item.tags.some(t => t.toLowerCase().includes(q));

      return inName || inSubtitle || inDesc || inTags;
    });
  }

  render() {
    const filtered = this.getFilteredDepartments();
    if (this.editorFilteredCount) this.editorFilteredCount.textContent = filtered.length;

    if (filtered.length === 0) {
      this.editorDeptList.innerHTML = "";
      this.editorEmptyState.style.display = "block";
      return;
    }

    this.editorEmptyState.style.display = "none";
    this.editorDeptList.innerHTML = filtered.map(item => this.createEditorRowHtml(item)).join("");
    this.attachRowEventListeners();
  }

  getCategoryLabel(category) {
    switch (category) {
      case "faculty":
        return { label: "คณะวิชา", tagClass: "tag-faculty" };
      case "service":
        return { label: "หน่วยงานบริการ", tagClass: "tag-service" };
      case "student-gov":
        return { label: "องค์กรนิสิต", tagClass: "tag-student-gov" };
      case "student-club":
        return { label: "สโมสรนิสิตคณะ", tagClass: "tag-student-club" };
      default:
        return { label: "หน่วยงาน", tagClass: "tag-service" };
    }
  }

  createEditorRowHtml(item) {
    const { label, tagClass } = this.getCategoryLabel(item.category);
    
    // Banner Slot State
    const hasBanner = Boolean(item.bannerUrl && item.bannerUrl.trim() !== "");
    const bannerStyle = hasBanner ? `background-image: url('${item.bannerUrl}');` : "";
    const bannerClass = hasBanner ? "editor-banner-thumb" : "editor-banner-thumb empty";

    // Logo Slot State
    const hasLogo = Boolean(item.logoUrl && item.logoUrl.trim() !== "");
    const logoStyle = hasLogo ? `background-image: url('${item.logoUrl}');` : "";
    const logoClass = hasLogo ? "editor-logo-thumb" : "editor-logo-thumb empty";

    return `
      <div class="editor-card" data-id="${item.id}">
        <!-- 1. Banner Slot -->
        <div class="editor-media-slot">
          <span class="editor-slot-label">
            <i class="fa-regular fa-image" style="color:#10b981;"></i> 
            แบนเนอร์: ${hasBanner ? '<span style="color:#047857; font-weight:700;">มีรูปแล้ว</span>' : '<span style="color:var(--text-muted);">เว้นว่าง</span>'}
          </span>
          <div class="${bannerClass}" style="${bannerStyle}" data-action="upload-banner" data-id="${item.id}" title="คลิกเพื่อเปลี่ยนรูปแบนเนอร์">
            ${!hasBanner ? '<i class="fa-regular fa-image"></i>&nbsp;เว้นที่แบนเนอร์' : ''}
            <div class="editor-thumb-overlay">
              <i class="fa-solid fa-pen"></i> เปลี่ยนรูป
            </div>
          </div>
          <div style="display:flex; gap:4px;">
            <button class="btn-edit-action" style="flex:1; padding:3px 6px; font-size:0.72rem;" data-action="upload-banner" data-id="${item.id}">
              <i class="fa-solid fa-upload"></i> อัปโหลด
            </button>
            ${hasBanner ? `
              <button class="btn-delete-action" style="padding:3px 6px; font-size:0.72rem;" data-action="clear-banner" data-id="${item.id}" title="เว้นเป็นช่องว่าง">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            ` : ''}
          </div>
        </div>

        <!-- 2. Logo Slot -->
        <div class="editor-media-slot">
          <span class="editor-slot-label">
            <i class="fa-solid fa-id-badge" style="color:#10b981;"></i> 
            โลโก้: ${hasLogo ? '<span style="color:#047857; font-weight:700;">มีรูป</span>' : '<span style="color:var(--text-muted);">เว้นว่าง</span>'}
          </span>
          <div class="${logoClass}" style="${logoStyle}" data-action="upload-logo" data-id="${item.id}" title="คลิกเพื่อเปลี่ยนรูปโลโก้">
            ${!hasLogo ? '<i class="fa-solid fa-id-badge"></i>' : ''}
            <div class="editor-thumb-overlay">
              <i class="fa-solid fa-pen"></i>
            </div>
          </div>
          <div style="display:flex; gap:4px;">
            <button class="btn-edit-action" style="flex:1; padding:3px 6px; font-size:0.72rem;" data-action="upload-logo" data-id="${item.id}">
              <i class="fa-solid fa-upload"></i> อัปโหลด
            </button>
            ${hasLogo ? `
              <button class="btn-delete-action" style="padding:3px 6px; font-size:0.72rem;" data-action="clear-logo" data-id="${item.id}" title="เว้นเป็นช่องว่าง">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            ` : ''}
          </div>
        </div>

        <!-- 3. Details -->
        <div class="editor-card-info">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="card-category-tag ${tagClass}" style="position:static; padding:2px 8px; font-size:0.7rem;">${label}</span>
            <h3 style="margin:0;">${item.name}</h3>
          </div>
          ${item.subtitle ? `<div class="sub">${item.subtitle}</div>` : ''}
          <div class="sub" style="font-size:0.78rem; opacity:0.85;">${item.desc || 'ไม่มีคำอธิบาย'}</div>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="link">
            <i class="fa-brands fa-facebook"></i> ${item.url}
          </a>
        </div>

        <!-- 4. Actions -->
        <div class="editor-card-actions">
          <button class="btn-edit-action" data-action="edit-full" data-id="${item.id}">
            <i class="fa-solid fa-pen-to-square"></i> แก้ไขข้อมูล
          </button>
          <button class="btn-delete-action" data-action="delete" data-id="${item.id}">
            <i class="fa-solid fa-trash"></i> ลบ
          </button>
        </div>
      </div>
    `;
  }

  attachRowEventListeners() {
    // Direct upload banner
    this.editorDeptList.querySelectorAll('[data-action="upload-banner"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        this.currentDirectTargetId = id;
        this.directBannerFilePicker.click();
      });
    });

    // Clear banner
    this.editorDeptList.querySelectorAll('[data-action="clear-banner"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        this.updateDepartmentBanner(id, "");
      });
    });

    // Direct upload logo
    this.editorDeptList.querySelectorAll('[data-action="upload-logo"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        this.currentDirectTargetId = id;
        this.directLogoFilePicker.click();
      });
    });

    // Clear logo
    this.editorDeptList.querySelectorAll('[data-action="clear-logo"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        this.updateDepartmentLogo(id, "");
      });
    });

    // Full Edit modal
    this.editorDeptList.querySelectorAll('[data-action="edit-full"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        const item = this.departments.find(d => d.id === id);
        if (item) this.openEditModal(item);
      });
    });

    // Delete
    this.editorDeptList.querySelectorAll('[data-action="delete"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        const item = this.departments.find(d => d.id === id);
        if (item && confirm(`คุณต้องการลบ "${item.name}" ออกจากระบบใช่หรือไม่?`)) {
          this.departments = this.departments.filter(d => d.id !== id);
          this.saveData(true, `ลบ "${item.name}" และซิงค์ Real-time แล้ว 🗑️`);
          this.render();
        }
      });
    });
  }

  updateDepartmentBanner(id, bannerUrl) {
    const item = this.departments.find(d => d.id === id);
    if (item) {
      item.bannerUrl = bannerUrl;
      const msg = bannerUrl 
        ? `เปลี่ยนรูปแบนเนอร์ของ "${item.name}" และซิงค์ Real-time สำเร็จ! ⚡`
        : `เว้นว่างรูปแบนเนอร์ของ "${item.name}" และซิงค์ Real-time แล้ว`;
      this.saveData(true, msg);
      this.render();
    }
  }

  updateDepartmentLogo(id, logoUrl) {
    const item = this.departments.find(d => d.id === id);
    if (item) {
      item.logoUrl = logoUrl;
      const msg = logoUrl 
        ? `เปลี่ยนรูปโลโก้ของ "${item.name}" และซิงค์ Real-time สำเร็จ! ⚡`
        : `เว้นว่างรูปโลโก้ของ "${item.name}" และซิงค์ Real-time แล้ว`;
      this.saveData(true, msg);
      this.render();
    }
  }

  openEditModal(item) {
    this.editorModalTitle.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> แก้ไขข้อมูลและรูปภาพ: ${item.name}`;
    this.formDeptId.value = item.id;
    this.formDeptName.value = item.name;
    this.formDeptSubtitle.value = item.subtitle || "";
    this.formDeptCategory.value = item.category;
    this.formDeptUrl.value = item.url;
    this.formDeptBannerUrl.value = item.bannerUrl || "";
    this.formDeptLogoUrl.value = item.logoUrl || "";
    this.formDeptDesc.value = item.desc || "";

    this.updateBannerPreview(item.bannerUrl || "");
    this.updateLogoPreview(item.logoUrl || "");

    this.editorModalBackdrop.classList.add("active");
  }

  openAddModal() {
    this.editorModalTitle.innerHTML = `<i class="fa-solid fa-plus-circle"></i> เพิ่มหน่วยงาน / สโมสรใหม่`;
    this.formDeptId.value = "dept-" + Date.now();
    this.formDeptName.value = "";
    this.formDeptSubtitle.value = "";
    this.formDeptCategory.value = "faculty";
    this.formDeptUrl.value = "";
    this.formDeptBannerUrl.value = "";
    this.formDeptLogoUrl.value = "";
    this.formDeptDesc.value = "";

    this.updateBannerPreview("");
    this.updateLogoPreview("");

    this.editorModalBackdrop.classList.add("active");
  }

  closeModal() {
    this.editorModalBackdrop.classList.remove("active");
  }

  updateBannerPreview(url) {
    if (url) {
      this.formBannerPreview.style.backgroundImage = `url('${url}')`;
      this.formBannerPreview.classList.add("show");
    } else {
      this.formBannerPreview.style.backgroundImage = "";
      this.formBannerPreview.classList.remove("show");
    }
  }

  updateLogoPreview(url) {
    if (url) {
      this.formLogoPreview.style.backgroundImage = `url('${url}')`;
      this.formLogoPreview.classList.add("show");
    } else {
      this.formLogoPreview.style.backgroundImage = "";
      this.formLogoPreview.classList.remove("show");
    }
  }

  handleFormSubmit() {
    const id = this.formDeptId.value;
    const name = this.formDeptName.value.trim();
    const subtitle = this.formDeptSubtitle.value.trim();
    const category = this.formDeptCategory.value;
    const url = this.formDeptUrl.value.trim();
    const bannerUrl = this.formBannerUrl.value.trim();
    const logoUrl = this.formLogoUrl.value.trim();
    const desc = this.formDeptDesc.value.trim();

    if (!name || !url) {
      alert("กรุณากรอกชื่อหน่วยงานและลิงก์ติดต่อให้ครบถ้วน");
      return;
    }

    const existingIndex = this.departments.findIndex(d => d.id === id);
    if (existingIndex >= 0) {
      this.departments[existingIndex] = {
        ...this.departments[existingIndex],
        name,
        subtitle,
        category,
        url,
        bannerUrl,
        logoUrl,
        desc
      };
      this.saveData(true, `อัปเดต "${name}" และซิงค์ Real-time สำเร็จ! ⚡`);
    } else {
      const newItem = {
        id,
        name,
        subtitle,
        category,
        url,
        bannerUrl,
        logoUrl,
        desc,
        icon: "fa-solid fa-building",
        colorTheme: "from-emerald to-green",
        tags: [name, subtitle, category]
      };
      this.departments.unshift(newItem);
      this.saveData(true, `เพิ่มหน่วยงานใหม่ "${name}" และซิงค์ Real-time สำเร็จ! ⚡`);
    }

    this.render();
    this.closeModal();
  }

  showToast(message) {
    if (!this.editorToast || !this.editorToastMsg) return;
    this.editorToastMsg.textContent = message;
    this.editorToast.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.editorToast.classList.remove("show");
    }, 2800);
  }
}

// Bootstrap on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.editorApp = new EditorApp();
});
