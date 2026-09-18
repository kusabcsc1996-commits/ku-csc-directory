/**
 * KU CSC Directory Hub - Main Application Script (เว็บที่ 1: ผู้ใช้ทั่วไป)
 * มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร
 * 
 * คุณสมบัติ:
 * - สำหรับผู้ใช้ทั่วไป (Read-Only Portal): แสดงข้อมูล ค้นหา กรองหมวดหมู่ สแกน QR Code
 * - เว้นพื้นที่ว่างสำหรับใส่แบนเนอร์และโลโก้อย่างสวยงามเป็นระเบียบ
 * - อัปเดตข้อมูลและรูปภาพแบบ Real-time ทันทีเมื่อมีการแก้ไขจากเว็บที่ 2 (editor.html)
 * - สลับโหมดมืด/สว่าง (Dark/Light Mode)
 * - สลับมุมมองการ์ด/รายการ (Grid/List View)
 */

// Initial 15 Departments according to KU CSC official documents
// เว้นที่ว่างสำหรับใส่รูปภาพ (bannerUrl และ logoUrl เป็น "")
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
    url: "https://www.facebook.com/search/top?q=%E0%B8%81%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%81%E0%B8%B9%E0%B9%89%E0%B8%A2%E0%B8%B7%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%20%E0%B8%A1%E0%B8%81.%E0%B8%89%E0%B8%81%E0%B8%AA.",
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

class PortalApp {
  constructor() {
    this.departments = [];
    this.activeFilter = "all";
    this.searchQuery = "";
    this.viewMode = "grid";
    this.syncChannel = null;

    this.cacheDom();
    this.initTheme();
    this.initBranding();
    this.initHeroBackground();
    this.bindEvents();
    this.initRealtimeSync();
    this.loadData();
    this.fetchRemoteSettings();
  }

  cacheDom() {
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.heroSection = document.getElementById("heroSection");
    this.searchInput = document.getElementById("searchInput");
    this.clearSearchBtn = document.getElementById("clearSearchBtn");
    this.categoryFilters = document.getElementById("categoryFilters");
    this.directoryGrid = document.getElementById("directoryGrid");
    this.emptyState = document.getElementById("emptyState");
    this.resetSearchBtn = document.getElementById("resetSearchBtn");
    this.filteredCountEl = document.getElementById("filteredCount");
    
    this.gridViewBtn = document.getElementById("gridViewBtn");
    this.listViewBtn = document.getElementById("listViewBtn");

    // Stats
    this.totalCountEl = document.getElementById("totalCount");
    this.facultyCountEl = document.getElementById("facultyCount");
    this.unitCountEl = document.getElementById("unitCount");
    this.clubCountEl = document.getElementById("clubCount");

    // QR Modal
    this.qrModal = document.getElementById("qrModalBackdrop");
    this.closeQrModalBtn = document.getElementById("closeQrModalBtn");
    this.qrcodeContainer = document.getElementById("qrcodeContainer");
    this.qrTargetName = document.getElementById("qrTargetName");
    this.qrTargetUrl = document.getElementById("qrTargetUrl");
    this.copyUrlFromModalBtn = document.getElementById("copyUrlFromModalBtn");
    this.openUrlFromModalBtn = document.getElementById("openUrlFromModalBtn");

    // Toast
    this.toast = document.getElementById("toast");
    this.toastMsg = document.getElementById("toastMsg");
  }

  initBranding() {
    const saved = localStorage.getItem("kucsc_site_branding");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.applyBranding(parsed);
      } catch (e) {}
    }
  }

  applyBranding(branding) {
    if (!branding) return;

    // Header Title
    const headerTitleEl = document.getElementById("headerBrandTitle");
    if (headerTitleEl && branding.headerTitle) {
      const words = branding.headerTitle.trim().split(" ");
      if (words.length > 1) {
        const last = words.pop();
        headerTitleEl.innerHTML = `${words.join(" ")} <span>${last}</span>`;
      } else {
        headerTitleEl.textContent = branding.headerTitle;
      }
    }

    // Header Subtitle
    const headerSubEl = document.getElementById("headerBrandSubtitle");
    if (headerSubEl && branding.headerSubtitle !== undefined) {
      headerSubEl.textContent = branding.headerSubtitle;
    }

    // Header Logo
    const headerLogoWrap = document.getElementById("headerBrandLogoWrap");
    if (headerLogoWrap) {
      if (branding.headerLogoUrl && branding.headerLogoUrl.trim() !== "") {
        const resolvedUrl = this.convertGoogleDriveUrl(branding.headerLogoUrl.trim());
        headerLogoWrap.innerHTML = `<img src="${resolvedUrl}" alt="Logo" style="width:100%; height:100%; object-fit:contain; border-radius:inherit;">`;
        headerLogoWrap.style.background = "transparent";
      } else {
        headerLogoWrap.innerHTML = `<i class="fa-solid fa-leaf brand-icon"></i>`;
        headerLogoWrap.style.background = "";
      }
    }

    // Footer Title
    const footerTitleEl = document.getElementById("footerBrandTitle");
    if (footerTitleEl && branding.footerTitle) {
      footerTitleEl.textContent = branding.footerTitle;
    }

    // Footer Subtitle
    const footerSubEl = document.getElementById("footerBrandSubtitle");
    if (footerSubEl && branding.footerSubtitle !== undefined) {
      footerSubEl.textContent = branding.footerSubtitle;
    }

    // Footer Logo
    const footerLogoWrap = document.getElementById("footerBrandLogoWrap");
    if (footerLogoWrap) {
      if (branding.footerLogoUrl && branding.footerLogoUrl.trim() !== "") {
        const resolvedUrl = this.convertGoogleDriveUrl(branding.footerLogoUrl.trim());
        footerLogoWrap.innerHTML = `<img src="${resolvedUrl}" alt="Logo" style="width:100%; height:100%; object-fit:contain; border-radius:inherit;">`;
        footerLogoWrap.style.background = "transparent";
      } else {
        footerLogoWrap.innerHTML = `<i class="fa-solid fa-leaf"></i>`;
        footerLogoWrap.style.background = "";
      }
    }
  }

  initHeroBackground() {
    const savedHeroBg = localStorage.getItem("kucsc_hero_bg");
    const bgUrl = (savedHeroBg !== null) ? savedHeroBg : "./assets/hero_landmark_bg.jpg";
    this.applyHeroBg(bgUrl);
  }

  applyHeroBg(url) {
    if (!this.heroSection) this.heroSection = document.getElementById("heroSection");
    if (this.heroSection) {
      const resolvedUrl = this.convertGoogleDriveUrl(url);
      if (resolvedUrl && resolvedUrl.trim() !== "") {
        this.heroSection.style.backgroundImage = `url('${resolvedUrl}')`;
      } else {
        this.heroSection.style.backgroundImage = "none";
      }
    }
  }

  /**
   * Converts any Google Drive sharing URL into a direct CDN-embeddable URL.
   * Supports /file/d/ID, ?id=ID, &id=ID formats. Pass-through for other URLs.
   */
  convertGoogleDriveUrl(url) {
    if (!url || url.trim() === "") return url;
    if (url.includes("lh3.googleusercontent.com")) return url;
    let match = url.match(/\/file\/d\/([a-zA-Z0-9_-]{10,})/);
    if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;
    match = url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
    if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;
    return url;
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

  /**
   * Load data from LocalStorage, or fallback to INITIAL_DEPARTMENTS
   */
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
      }
    } catch (e) {
      console.warn("Could not load from localStorage, using initial defaults", e);
      this.departments = [...INITIAL_DEPARTMENTS];
    }
    this.updateStats();
    this.render();
  }

  /**
   * Fetch remote settings from Google Apps Script (Cross-Device Cloud Sync)
   */
  async fetchRemoteSettings() {
    const endpoint = (window.KUCSC_CONFIG && window.KUCSC_CONFIG.gasEndpoint) || localStorage.getItem("kucsc_gdrive_endpoint");
    if (!endpoint || endpoint.trim() === "") return;

    try {
      const resp = await fetch(`${endpoint.trim()}?action=getSettings`);
      const data = await resp.json();
      if (data && data.status === "ok") {
        let hasChanges = false;
        if (data.heroBg !== undefined && data.heroBg !== null) {
          localStorage.setItem("kucsc_hero_bg", data.heroBg);
          this.applyHeroBg(data.heroBg);
          hasChanges = true;
        }
        if (Array.isArray(data.departments) && data.departments.length > 0) {
          this.departments = data.departments;
          localStorage.setItem("kucsc_directory_data", JSON.stringify(this.departments));
          this.updateStats();
          this.render();
          hasChanges = true;
        }
        if (data.siteBranding) {
          localStorage.setItem("kucsc_site_branding", JSON.stringify(data.siteBranding));
          this.applyBranding(data.siteBranding);
          hasChanges = true;
        }
        if (hasChanges) {
          console.log("KU CSC Hub: Synced latest cloud data from Google Drive");
        }
      }
    } catch (err) {
      console.warn("Could not fetch remote settings from GAS:", err);
    }
  }

  /**
   * Real-time Synchronization: Updates view when changes are made in Web 2 (editor.html)
   */
  initRealtimeSync() {
    // 1. BroadcastChannel API: Zero-latency message bus between browser tabs
    if (typeof BroadcastChannel !== "undefined") {
      this.syncChannel = new BroadcastChannel("ku_csc_sync");
      this.syncChannel.onmessage = (event) => {
        if (!event.data) return;
        if (event.data.type === "DATA_UPDATED") {
          this.departments = event.data.departments || [];
          this.updateStats();
          this.render();
          this.showToast("⚡ ข้อมูลได้รับการอัปเดตแบบ Real-time แล้ว!");
        } else if (event.data.type === "HERO_BG_UPDATED") {
          this.applyHeroBg(event.data.heroBg);
          this.showToast("⚡ อัปเดตรูปพื้นหลังส่วนหัวแบบ Real-time แล้ว!");
        } else if (event.data.type === "BRANDING_UPDATED") {
          this.applyBranding(event.data.branding);
          this.showToast("⚡ อัปเดตโลโก้และข้อความแบรนด์แบบ Real-time แล้ว!");
        }
      };
    }

    // 2. Storage event listener: Cross-window fallback
    window.addEventListener("storage", (e) => {
      if (e.key === "kucsc_directory_data" && e.newValue) {
        try {
          this.departments = JSON.parse(e.newValue);
          this.updateStats();
          this.render();
          this.showToast("⚡ ข้อมูลได้รับการอัปเดตแบบ Real-time แล้ว!");
        } catch (err) {}
      } else if (e.key === "kucsc_hero_bg") {
        this.applyHeroBg(e.newValue);
        this.showToast("⚡ อัปเดตรูปพื้นหลังส่วนหัวแบบ Real-time แล้ว!");
      } else if (e.key === "kucsc_site_branding" && e.newValue) {
        try {
          this.applyBranding(JSON.parse(e.newValue));
          this.showToast("⚡ อัปเดตโลโก้และข้อความแบรนด์แบบ Real-time แล้ว!");
        } catch (err) {}
      }
    });
  }

  bindEvents() {
    // Theme toggle
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());
    }

    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (this.searchQuery) {
          this.clearSearchBtn.classList.add("show");
        } else {
          this.clearSearchBtn.classList.remove("show");
        }
        this.render();
      });
    }

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener("click", () => {
        this.searchInput.value = "";
        this.searchQuery = "";
        this.clearSearchBtn.classList.remove("show");
        this.searchInput.focus();
        this.render();
      });
    }

    if (this.resetSearchBtn) {
      this.resetSearchBtn.addEventListener("click", () => {
        this.searchInput.value = "";
        this.searchQuery = "";
        this.clearSearchBtn.classList.remove("show");
        this.activeFilter = "all";
        this.updateActiveFilterPill();
        this.render();
      });
    }

    // Filter pills
    if (this.categoryFilters) {
      this.categoryFilters.addEventListener("click", (e) => {
        const pill = e.target.closest(".filter-pill");
        if (!pill) return;
        this.activeFilter = pill.dataset.category;
        this.updateActiveFilterPill();
        this.render();
      });
    }

    // View mode toggle
    if (this.gridViewBtn) this.gridViewBtn.addEventListener("click", () => this.setViewMode("grid"));
    if (this.listViewBtn) this.listViewBtn.addEventListener("click", () => this.setViewMode("list"));

    // Close QR Modal
    if (this.closeQrModalBtn) this.closeQrModalBtn.addEventListener("click", () => this.closeQrModal());
    if (this.qrModal) {
      this.qrModal.addEventListener("click", (e) => {
        if (e.target === this.qrModal) this.closeQrModal();
      });
    }

    // Modal Copy URL
    if (this.copyUrlFromModalBtn) {
      this.copyUrlFromModalBtn.addEventListener("click", () => {
        const url = this.qrTargetUrl.textContent;
        this.copyToClipboard(url, "คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว!");
      });
    }

    // Global ESC to close modals
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeQrModal();
      }
    });
  }

  setViewMode(mode) {
    this.viewMode = mode;
    if (mode === "grid") {
      this.gridViewBtn.classList.add("active");
      this.listViewBtn.classList.remove("active");
      this.directoryGrid.classList.remove("list-view");
    } else {
      this.listViewBtn.classList.add("active");
      this.gridViewBtn.classList.remove("active");
      this.directoryGrid.classList.add("list-view");
    }
  }

  updateActiveFilterPill() {
    const pills = this.categoryFilters.querySelectorAll(".filter-pill");
    pills.forEach((pill) => {
      if (pill.dataset.category === this.activeFilter) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  updateStats() {
    const total = this.departments.length;
    const faculties = this.departments.filter(d => d.category === "faculty").length;
    const services = this.departments.filter(d => d.category === "service").length;
    const clubs = this.departments.filter(d => d.category === "student-gov" || d.category === "student-club").length;

    if (this.totalCountEl) this.totalCountEl.textContent = total;
    if (this.facultyCountEl) this.facultyCountEl.textContent = faculties;
    if (this.unitCountEl) this.unitCountEl.textContent = services;
    if (this.clubCountEl) this.clubCountEl.textContent = clubs;
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
    if (this.filteredCountEl) this.filteredCountEl.textContent = filtered.length;

    if (filtered.length === 0) {
      this.directoryGrid.innerHTML = "";
      this.emptyState.style.display = "block";
      return;
    }

    this.emptyState.style.display = "none";
    this.directoryGrid.innerHTML = filtered.map(item => this.createCardHtml(item)).join("");
    this.attachCardEventListeners();
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

  createCardHtml(item) {
    const { label, tagClass } = this.getCategoryLabel(item.category);
    
    // 1. Dedicated Banner Slot (เว้นที่ว่างสำหรับใส่แบนเนอร์ - Read Only ไม่มีปุ่มแก้ไขบนหน้านี้)
    const hasCustomBanner = Boolean(item.bannerUrl && item.bannerUrl.trim() !== "");
    const bannerSrc = this.convertGoogleDriveUrl(item.bannerUrl);
    const bannerHtml = hasCustomBanner 
      ? `
        <div class="card-banner" style="background-image: url('${bannerSrc}');" role="img" aria-label="Banner for ${item.name}">
          <div class="card-banner-overlay"></div>
          <span class="card-category-tag ${tagClass}">${label}</span>
        </div>
      `
      : `
        <div class="card-banner is-empty" role="img" aria-label="Empty Banner Slot">
          <div class="empty-banner-placeholder">
            <i class="fa-regular fa-image"></i>
            <span>เว้นพื้นที่สำหรับใส่แบนเนอร์</span>
          </div>
          <span class="card-category-tag ${tagClass}">${label}</span>
        </div>
      `;

    // 2. Dedicated Logo Slot (เว้นที่ว่างสำหรับใส่โลโก้ - Read Only ไม่มีปุ่มแก้ไขบนหน้านี้)
    const hasCustomLogo = Boolean(item.logoUrl && item.logoUrl.trim() !== "");
    const logoSrc = this.convertGoogleDriveUrl(item.logoUrl);
    const logoHtml = hasCustomLogo
      ? `
        <div class="card-avatar-wrapper" title="${item.name}">
          <div class="card-logo">
            <img src="${logoSrc}" alt="${item.name} Logo" onerror="this.parentElement.className='card-logo is-empty'; this.parentElement.innerHTML='<i class=\\'${item.icon || 'fa-solid fa-building'}\\'></i><span class=\\'logo-slot-hint\\'>พื้นที่โลโก้</span>'">
          </div>
        </div>
      `
      : `
        <div class="card-avatar-wrapper" title="เว้นพื้นที่สำหรับใส่โลโก้">
          <div class="card-logo is-empty">
            <i class="${item.icon || 'fa-solid fa-graduation-cap'}"></i>
            <span class="logo-slot-hint">พื้นที่โลโก้</span>
          </div>
        </div>
      `;

    return `
      <article class="dept-card" data-id="${item.id}">
        <!-- 1. Dedicated Banner Slot -->
        ${bannerHtml}

        <!-- 2. Dedicated Logo Slot -->
        ${logoHtml}

        <!-- 3. Information & Description -->
        <div class="card-body">
          <div class="card-title-group">
            <h2 class="card-title">${item.name}</h2>
            ${item.subtitle ? `<span class="card-subtitle">${item.subtitle}</span>` : ""}
          </div>

          <p class="card-desc">${item.desc || "ช่องทางติดต่อและประชาสัมพันธ์ข้อมูลข่าวสารอย่างเป็นทางการ"}</p>

          <!-- 4. Action Buttons (ลิงก์, คัดลอกลิงก์, สแกน QR Code) -->
          <div class="card-actions">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-open-link" title="เปิดหน้า Facebook">
              <i class="fa-brands fa-facebook"></i>
              <span>ไปที่เพจ</span>
            </a>
            <button class="btn-card-action" data-action="copy" data-url="${item.url}" title="คัดลอกลิงก์">
              <i class="fa-regular fa-copy"></i>
            </button>
            <button class="btn-card-action" data-action="qr" data-id="${item.id}" title="สแกน QR Code">
              <i class="fa-solid fa-qrcode"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  attachCardEventListeners() {
    // Copy buttons
    this.directoryGrid.querySelectorAll('[data-action="copy"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const url = e.currentTarget.dataset.url;
        this.copyToClipboard(url, "คัดลอกลิงก์เรียบร้อยแล้ว!");
      });
    });

    // QR Code buttons
    this.directoryGrid.querySelectorAll('[data-action="qr"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        const item = this.departments.find(d => d.id === id);
        if (item) this.openQrModal(item);
      });
    });
  }

  // QR Modal
  openQrModal(item) {
    this.qrTargetName.textContent = item.name;
    this.qrTargetUrl.textContent = item.url;
    this.openUrlFromModalBtn.href = item.url;
    this.qrcodeContainer.innerHTML = "";

    if (typeof QRCode !== "undefined") {
      new QRCode(this.qrcodeContainer, {
        text: item.url,
        width: 180,
        height: 180,
        colorDark: "#004d25",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    } else {
      this.qrcodeContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(item.url)}" alt="QR Code" width="180" height="180">`;
    }

    this.qrModal.classList.add("active");
  }

  closeQrModal() {
    this.qrModal.classList.remove("active");
  }

  copyToClipboard(text, message = "คัดลอกลิงก์สำเร็จ") {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(message);
      }).catch(() => {
        this.fallbackCopy(text, message);
      });
    } else {
      this.fallbackCopy(text, message);
    }
  }

  fallbackCopy(text, message) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    tempInput.style.position = "fixed";
    tempInput.style.opacity = "0";
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    try {
      document.execCommand("copy");
      this.showToast(message);
    } catch (err) {
      alert("ลิงก์: " + text);
    }
    document.body.removeChild(tempInput);
  }

  showToast(message) {
    if (!this.toast || !this.toastMsg) return;
    this.toastMsg.textContent = message;
    this.toast.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toast.classList.remove("show");
    }, 2800);
  }
}

// Bootstrap on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.app = new PortalApp();
});
