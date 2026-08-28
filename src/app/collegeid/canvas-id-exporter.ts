export interface StudentIdData {
  name: string;
  studentId: string;
  rollNo?: string;
  academicYear?: string;
  semester?: string;
  course: string;
  department: string;
  dob: string;
  bloodGroup: string;
  phone: string;
  issueDate: string;
  expiryDate: string;
  photoUrl: string;
  logoUrl: string;
  signatureUrl?: string;
  address?: string;
  theme: "navy" | "maroon" | "emerald" | "sapphire";
  orientation: "vertical" | "horizontal";
  showHologram: boolean;
  showLanyardSlot: boolean;
  showOfficialStamp?: boolean;
}

const THEME_CONFIGS = {
  navy: {
    primary: "#0f2042",
    secondary: "#1e3a8a",
    accent: "#d97706",
    accentLight: "#fef3c7",
    goldGradient: ["#fbbf24", "#d97706", "#92400e"],
    headerBg: "#0f2042",
    textColor: "#0f172a",
    cardBg: "#ffffff",
    rowBg: "rgba(241, 245, 249, 0.8)",
  },
  maroon: {
    primary: "#581c87",
    secondary: "#831843",
    accent: "#e11d48",
    accentLight: "#ffe4e6",
    goldGradient: ["#f59e0b", "#d97706", "#78350f"],
    headerBg: "#581c87",
    textColor: "#0f172a",
    cardBg: "#ffffff",
    rowBg: "rgba(253, 242, 248, 0.8)",
  },
  emerald: {
    primary: "#064e3b",
    secondary: "#065f46",
    accent: "#059669",
    accentLight: "#d1fae5",
    goldGradient: ["#10b981", "#059669", "#047857"],
    headerBg: "#064e3b",
    textColor: "#0f172a",
    cardBg: "#ffffff",
    rowBg: "rgba(236, 253, 245, 0.8)",
  },
  sapphire: {
    primary: "#0369a1",
    secondary: "#0284c7",
    accent: "#0284c7",
    accentLight: "#e0f2fe",
    goldGradient: ["#38bdf8", "#0284c7", "#0369a1"],
    headerBg: "#0369a1",
    textColor: "#0f172a",
    cardBg: "#ffffff",
    rowBg: "rgba(240, 249, 255, 0.8)",
  },
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

function drawBarcode(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  code: string
) {
  ctx.save();
  ctx.fillStyle = "#000000";
  const numBars = 48;
  const barWidth = width / (numBars * 1.4);
  let currentX = x;

  for (let i = 0; i < numBars; i++) {
    const charCode = code.charCodeAt(i % code.length) || 65;
    const isThick = (charCode * (i + 7)) % 3 === 0;
    const w = isThick ? barWidth * 1.9 : barWidth * 0.85;

    ctx.fillRect(currentX, y, w, height);
    currentX += w + barWidth * 0.55;
    if (currentX > x + width) break;
  }
  ctx.restore();
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Draw Official Red/Crimson University Circular Stamp
function drawOfficialStamp(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number = 65,
  color: string = "rgba(185, 28, 28, 0.88)"
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.5;

  // Outer circle
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  // Inner dashed circle
  ctx.beginPath();
  ctx.setLineDash([4, 3]);
  ctx.arc(cx, cy, radius - 6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Inner core circle
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 16, 0, Math.PI * 2);
  ctx.stroke();

  // Text inside stamp
  ctx.font = "bold 9px 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("CHHATRAPATI SHIVAJI MAHARAJ", cx, cy - 24);
  ctx.fillText("UNIVERSITY", cx, cy - 14);

  // Center Badge
  ctx.font = "bold 11px 'Inter', sans-serif";
  ctx.fillText("★ BONAFIDE ★", cx, cy + 2);
  ctx.font = "bold 10px 'Inter', sans-serif";
  ctx.fillText("VERIFIED ENROLLED", cx, cy + 16);

  ctx.font = "bold 8px 'Inter', sans-serif";
  ctx.fillText("NAVI MUMBAI, MH", cx, cy + 30);
  ctx.restore();
}

export async function generateIdCardCanvas(
  data: StudentIdData,
  side: "front" | "back"
): Promise<HTMLCanvasElement> {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get canvas context");

  const isVertical = data.orientation === "vertical";
  const width = isVertical ? 750 : 1200;
  const height = isVertical ? 1200 : 750;
  const cornerRadius = 32;

  canvas.width = width;
  canvas.height = height;

  const theme = THEME_CONFIGS[data.theme] || THEME_CONFIGS.navy;

  // Clip to rounded card corners
  ctx.save();
  drawRoundedRect(ctx, 0, 0, width, height, cornerRadius);
  ctx.clip();

  // White base background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  // Security micro-guilloche geometric background
  ctx.save();
  ctx.strokeStyle = "rgba(15, 32, 66, 0.04)";
  ctx.lineWidth = 1;
  for (let i = -width; i < width * 2; i += 22) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + height, height);
    ctx.stroke();
  }
  for (let i = -height; i < width + height; i += 22) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i + width);
    ctx.stroke();
  }
  ctx.restore();

  // University Watermark in center of card body
  ctx.save();
  ctx.fillStyle = "rgba(15, 32, 66, 0.035)";
  ctx.font = "bold 90px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.rotate((-20 * Math.PI) / 180);
  ctx.fillText("CSMU VERIFIED", isVertical ? 50 : 250, isVertical ? 650 : 500);
  ctx.restore();

  if (side === "front") {
    if (isVertical) {
      await renderVerticalFront(ctx, data, width, height, theme);
    } else {
      await renderHorizontalFront(ctx, data, width, height, theme);
    }
  } else {
    if (isVertical) {
      await renderVerticalBack(ctx, data, width, height, theme);
    } else {
      await renderHorizontalBack(ctx, data, width, height, theme);
    }
  }

  // Draw Card Outer Border
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "rgba(15, 23, 42, 0.18)";
  ctx.lineWidth = 4;
  drawRoundedRect(ctx, 2, 2, width - 4, height - 4, cornerRadius);
  ctx.stroke();
  ctx.restore();

  return canvas;
}

// ─────────────────────────────────────────────────────────────
// 1. VERTICAL FRONT (Full Proportional Layout, No Empty Space)
// ─────────────────────────────────────────────────────────────
async function renderVerticalFront(
  ctx: CanvasRenderingContext2D,
  data: StudentIdData,
  w: number,
  h: number,
  theme: typeof THEME_CONFIGS.navy
) {
  // Lanyard Slot
  if (data.showLanyardSlot) {
    ctx.save();
    ctx.fillStyle = "#e2e8f0";
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, w / 2 - 55, 14, 110, 16, 8);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  // Header Banner
  const headerHeight = 170;
  const headerY = data.showLanyardSlot ? 38 : 0;

  const grad = ctx.createLinearGradient(0, headerY, 0, headerY + headerHeight);
  grad.addColorStop(0, theme.primary);
  grad.addColorStop(1, theme.secondary);
  ctx.fillStyle = grad;
  ctx.fillRect(0, headerY, w, headerHeight);

  // Gold accent bottom stripe
  const goldGrad = ctx.createLinearGradient(0, 0, w, 0);
  goldGrad.addColorStop(0, theme.goldGradient[0]);
  goldGrad.addColorStop(0.5, theme.goldGradient[1]);
  goldGrad.addColorStop(1, theme.goldGradient[2]);
  ctx.fillStyle = goldGrad;
  ctx.fillRect(0, headerY + headerHeight, w, 6);

  // University Logo
  try {
    const logoImg = await loadImage(data.logoUrl || "/logos/CSMU-Logo.jpg");
    const logoSize = 104;
    const logoX = 26;
    const logoY = headerY + (headerHeight - logoSize) / 2;

    ctx.save();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2 + 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.clip();
    ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
    ctx.restore();
  } catch (e) {
    console.warn("Could not load logo", e);
  }

  // University Text
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "left";

  ctx.font = "bold 25px 'Outfit', 'Inter', sans-serif";
  ctx.fillText("CHHATRAPATI SHIVAJI MAHARAJ", 148, headerY + 48);
  ctx.fillText("UNIVERSITY", 148, headerY + 76);

  ctx.font = "600 15px 'Inter', sans-serif";
  ctx.fillStyle = "#fef08a"; // Gold
  ctx.fillText("Navi Mumbai, Maharashtra", 148, headerY + 104);

  ctx.font = "12px 'Inter', sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.fillText("Approved by UGC | Govt. of Maharashtra Act XXIII", 148, headerY + 128);
  ctx.restore();

  // STUDENT IDENTITY CARD (Clean, Bold, No side lines)
  const ribbonY = headerY + headerHeight + 14;
  ctx.save();
  ctx.fillStyle = theme.primary;
  ctx.font = "bold 24px 'Outfit', 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.letterSpacing = "4px";
  ctx.fillText("STUDENT IDENTITY CARD", w / 2, ribbonY + 22);
  ctx.restore();

  // Top Student Showcase Row (Photo + Student Primary Badges)
  const topBlockY = ribbonY + 44;
  const photoSize = 215;
  const photoX = 40;

  // Photo Frame
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 3;
  ctx.fillStyle = "#ffffff";
  drawRoundedRect(ctx, photoX - 5, topBlockY - 5, photoSize + 10, photoSize + 10, 14);
  ctx.fill();
  ctx.restore();

  try {
    if (data.photoUrl) {
      const photoImg = await loadImage(data.photoUrl);
      ctx.save();
      drawRoundedRect(ctx, photoX, topBlockY, photoSize, photoSize, 10);
      ctx.clip();
      ctx.drawImage(photoImg, photoX, topBlockY, photoSize, photoSize);
      ctx.restore();
    } else {
      ctx.save();
      ctx.fillStyle = "#f1f5f9";
      drawRoundedRect(ctx, photoX, topBlockY, photoSize, photoSize, 10);
      ctx.fill();
      ctx.fillStyle = "#94a3b8";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Passport Photo", photoX + photoSize / 2, topBlockY + photoSize / 2);
      ctx.restore();
    }
  } catch (e) {
    console.warn("Photo error", e);
  }

  // Photo Outline
  ctx.save();
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 2.5;
  drawRoundedRect(ctx, photoX, topBlockY, photoSize, photoSize, 10);
  ctx.stroke();
  ctx.restore();

  // Hologram seal on photo corner
  if (data.showHologram) {
    const holoX = photoX + photoSize - 32;
    const holoY = topBlockY + photoSize - 32;
    ctx.save();
    const holoGrad = ctx.createRadialGradient(
      holoX + 15,
      holoY + 15,
      2,
      holoX + 15,
      holoY + 15,
      19
    );
    holoGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
    holoGrad.addColorStop(0.3, "rgba(56, 189, 248, 0.75)");
    holoGrad.addColorStop(0.6, "rgba(234, 179, 8, 0.75)");
    holoGrad.addColorStop(1, "rgba(236, 72, 153, 0.85)");
    ctx.fillStyle = holoGrad;
    ctx.beginPath();
    ctx.arc(holoX + 15, holoY + 15, 19, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 9px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("CSMU", holoX + 15, holoY + 19);
    ctx.restore();
  }

  // Student Primary Badges Next to Photo (Right Side of photo)
  const headerInfoX = 275;
  ctx.save();
  ctx.textAlign = "left";

  // Name
  ctx.font = "bold 28px 'Outfit', 'Inter', sans-serif";
  ctx.fillStyle = theme.primary;
  ctx.fillText((data.name || "STUDENT FULL NAME").toUpperCase(), headerInfoX, topBlockY + 34);

  // Student PRN / Enrollment ID
  ctx.font = "bold 16px 'JetBrains Mono', monospace";
  ctx.fillStyle = theme.accent;
  ctx.fillText(`ENROLLMENT NO: ${data.studentId || "CSMU2024CS1089"}`, headerInfoX, topBlockY + 64);

  // Roll Number badge
  ctx.fillStyle = "#f1f5f9";
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, headerInfoX, topBlockY + 80, 220, 32, 6);
  ctx.fill();
  ctx.stroke();
  ctx.font = "bold 13px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#334155";
  ctx.fillText(`ROLL NO : ${data.rollNo || "24CS1089"}`, headerInfoX + 14, topBlockY + 101);

  // Status Badge
  ctx.fillStyle = "#ecfdf5";
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, headerInfoX, topBlockY + 120, 220, 32, 6);
  ctx.fill();
  ctx.stroke();
  ctx.font = "bold 12px 'Inter', sans-serif";
  ctx.fillStyle = "#047857";
  ctx.fillText("STATUS : REGULAR ENROLLED", headerInfoX + 14, topBlockY + 141);

  // Current Academic Year
  ctx.font = "600 13px 'Inter', sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.fillText(`ACADEMIC TERM : ${data.academicYear || "2024-2025"} (SEM ${data.semester || "IV"})`, headerInfoX, topBlockY + 176);
  ctx.fillText(`CAMPUS : MAIN CAMPUS (PANVEL)`, headerInfoX, topBlockY + 200);
  ctx.restore();

  // Student Signature Box Below Photo
  const sigBoxY = topBlockY + photoSize + 10;
  ctx.save();
  ctx.fillStyle = "#f8fafc";
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, photoX, sigBoxY, photoSize, 44, 6);
  ctx.fill();
  ctx.stroke();

  // Signature script
  ctx.font = "italic bold 16px 'Brush Script MT', cursive, sans-serif";
  ctx.fillStyle = "#1e3a8a";
  ctx.textAlign = "center";
  ctx.fillText(data.name || "Student Signature", photoX + photoSize / 2, sigBoxY + 25);

  ctx.font = "bold 8px 'Inter', sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.fillText("STUDENT SIGNATURE", photoX + photoSize / 2, sigBoxY + 38);
  ctx.restore();

  // Comprehensive Student Info Table (Fills middle portion with 46px row height)
  const gridStartY = sigBoxY + 62;
  const tableX = 35;
  const tableW = w - 70;
  const rowH = 45;

  const tableFields = [
    { label: "PROGRAM / DEGREE", val: data.course || "B.Tech Computer Science & Engineering" },
    { label: "FACULTY / DEPT", val: data.department || "Faculty of Engineering & Technology" },
    { label: "ACADEMIC YEAR", val: `${data.academicYear || "2024 - 2025"} (Current Active Term)` },
    { label: "DATE OF BIRTH", val: data.dob || "15/08/2004" },
    { label: "BLOOD GROUP", val: data.bloodGroup || "B+ (Positive)" },
    { label: "ISSUE DATE (VALID FROM)", val: data.issueDate || "01/08/2024" },
    { label: "EXPIRY DATE (VALID TILL)", val: data.expiryDate || "31/07/2028" },
    { label: "STUDENT CONTACT", val: data.phone || "+91 98765 43210" },
  ];

  ctx.save();
  tableFields.forEach((f, idx) => {
    const rowY = gridStartY + idx * rowH;

    // Row alternating background
    ctx.fillStyle = idx % 2 === 0 ? "rgba(241, 245, 249, 0.95)" : "rgba(255, 255, 255, 0.95)";
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, tableX, rowY - 30, tableW, rowH - 4, 8);
    ctx.fill();
    ctx.stroke();

    // Label
    ctx.font = "bold 13px 'Inter', sans-serif";
    ctx.fillStyle = "#475569";
    ctx.textAlign = "left";
    ctx.fillText(f.label, tableX + 18, rowY - 5);

    // Value
    ctx.font = "600 14px 'Inter', sans-serif";
    ctx.fillStyle = idx === 6 ? "#b91c1c" : idx === 2 ? "#047857" : "#0f172a";
    ctx.fillText(`:  ${f.val}`, tableX + 240, rowY - 5);
  });
  ctx.restore();

  // Bottom Verification & Signatures Section (Positioned down to fill card bottom)
  const bottomSectionY = 960;

  // 1. Barcode (Left side)
  drawBarcode(ctx, 45, bottomSectionY + 10, 320, 52, data.studentId || "CSMU2024CS1089");
  ctx.save();
  ctx.font = "bold 12px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#334155";
  ctx.textAlign = "center";
  ctx.fillText(data.studentId || "CSMU2024CS1089", 205, bottomSectionY + 80);
  ctx.font = "10px 'Inter', sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.fillText("OFFICIAL STUDENT IDENTIFIER", 205, bottomSectionY + 95);
  ctx.restore();

  // 2. Authorized Signatory (Real signature.png from public folder)
  const sigX = w - 280;
  const sigY = bottomSectionY + 5;
  try {
    const sigImg = await loadImage("/signature.png");
    ctx.drawImage(sigImg, sigX + 15, sigY - 15, 190, 70);
  } catch (e) {
    ctx.save();
    ctx.textAlign = "center";
    ctx.font = "italic bold 22px 'Brush Script MT', cursive, sans-serif";
    ctx.fillStyle = "#1e3a8a";
    ctx.fillText("Authorized Signatory", sigX + 110, sigY + 35);
    ctx.restore();
  }

  // Signature line & labels
  ctx.save();
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(sigX + 10, sigY + 60);
  ctx.lineTo(sigX + 210, sigY + 60);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.font = "bold 12px 'Inter', sans-serif";
  ctx.fillStyle = "#334155";
  ctx.fillText("AUTHORIZED SIGNATORY", sigX + 110, sigY + 78);
  ctx.font = "10px 'Inter', sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.fillText("REGISTRAR OFFICE, CSMU", sigX + 110, sigY + 94);
  ctx.restore();

  // Bottom Footer Strip (Positioned at very bottom 1160px to 1200px)
  const footerBarH = 38;
  const footerBarY = h - footerBarH;

  ctx.fillStyle = theme.primary;
  ctx.fillRect(0, footerBarY, w, footerBarH);

  ctx.fillStyle = goldGrad;
  ctx.fillRect(0, footerBarY - 4, w, 4);

  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 12px 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    "WWW.CSMU.AC.IN  •  OFFICIAL BONAFIDE STUDENT CREDENTIAL  •  PANVEL, NAVI MUMBAI",
    w / 2,
    footerBarY + 24
  );
  ctx.restore();
}

// ─────────────────────────────────────────────────────────────
// 2. VERTICAL BACK
// ─────────────────────────────────────────────────────────────
async function renderVerticalBack(
  ctx: CanvasRenderingContext2D,
  data: StudentIdData,
  w: number,
  h: number,
  theme: typeof THEME_CONFIGS.navy
) {
  if (data.showLanyardSlot) {
    ctx.save();
    ctx.fillStyle = "#e2e8f0";
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, w / 2 - 55, 14, 110, 16, 8);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  const startY = data.showLanyardSlot ? 44 : 20;

  // Header Bar
  ctx.save();
  ctx.fillStyle = theme.primary;
  ctx.fillRect(0, startY, w, 56);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 16px 'Outfit', 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.letterSpacing = "1.5px";
  ctx.fillText("GENERAL INSTRUCTIONS & RULES / नियम व मार्गदर्शक तत्त्वे", w / 2, startY + 34);
  ctx.restore();

  // Magnetic Stripe
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, startY + 74, w, 50);

  // Instructions
  const contentY = startY + 155;
  const terms = [
    "1. This Identity Card is the property of Chhatrapati Shivaji Maharaj University.",
    "2. The card is non-transferable and valid only for the bonafide enrolled student.",
    "3. Student must carry this ID card inside campus, laboratories, library & examinations.",
    "4. Loss of card must be reported immediately to Registrar Office / Campus Security.",
    "5. Misuse, alteration, or duplicate creation will invite strict legal & academic action.",
    "6. This card must be surrendered to the University upon course completion.",
  ];

  ctx.save();
  ctx.font = "14px 'Inter', sans-serif";
  ctx.fillStyle = "#334155";
  ctx.textAlign = "left";

  terms.forEach((term, idx) => {
    ctx.fillText(term, 40, contentY + idx * 34);
  });
  ctx.restore();

  // Emergency & Permanent Details Box
  const emgY = contentY + terms.length * 34 + 25;
  ctx.save();
  ctx.fillStyle = "#f8fafc";
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, 35, emgY, w - 70, 195, 12);
  ctx.fill();
  ctx.stroke();

  ctx.font = "bold 15px 'Inter', sans-serif";
  ctx.fillStyle = theme.primary;
  ctx.fillText("STUDENT RESIDENCE & EMERGENCY RECORD", 55, emgY + 32);

  ctx.font = "13px 'Inter', sans-serif";
  ctx.fillStyle = "#475569";
  ctx.fillText(`Student Full Name : ${data.name || "Mohit Kumar"}`, 55, emgY + 62);
  ctx.fillText(`Enrollment / PRN  : ${data.studentId || "CSMU2024CS1089"}`, 55, emgY + 88);
  ctx.fillText(`Emergency Phone   : ${data.phone || "+91 98765 43210"}`, 55, emgY + 114);
  ctx.fillText(`Blood Group / DOB : ${data.bloodGroup || "B+"}  |  DOB: ${data.dob || "15/08/2004"}`, 55, emgY + 140);
  ctx.fillText(`Residential Addr  : ${data.address || "Navi Mumbai, Maharashtra, India"}`, 55, emgY + 166);
  ctx.restore();

  // Campus Address & Helplines Box
  const addressY = emgY + 230;
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "bold 17px 'Outfit', 'Inter', sans-serif";
  ctx.fillStyle = theme.primary;
  ctx.fillText("CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY", w / 2, addressY);

  ctx.font = "13px 'Inter', sans-serif";
  ctx.fillStyle = "#475569";
  ctx.fillText("Campus: Near Shedung Toll Plaza, Old Mumbai-Pune Highway,", w / 2, addressY + 25);
  ctx.fillText("Panvel, Navi Mumbai, Maharashtra - 410206", w / 2, addressY + 46);
  ctx.fillText("Website: www.csmu.ac.in  |  Email: info@csmu.ac.in", w / 2, addressY + 68);
  ctx.fillText("Student Helpline: +91 89761 11122 / +91 89761 11133", w / 2, addressY + 88);
  ctx.restore();

  // QR Code Box for digital scan verification (Positioned nicely in lower section)
  const qrY = 940;
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, w / 2 - 75, qrY, 150, 150, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c + data.studentId.length) % 2 === 0) {
        ctx.fillRect(w / 2 - 58 + c * 15, qrY + 18 + r * 15, 12, 12);
      }
    }
  }
  ctx.font = "bold 11px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#475569";
  ctx.textAlign = "center";
  ctx.fillText("SCAN TO VERIFY", w / 2, qrY + 175);
  ctx.restore();

  // Bottom Strip
  const footerBarH = 38;
  const footerBarY = h - footerBarH;
  ctx.fillStyle = theme.primary;
  ctx.fillRect(0, footerBarY, w, footerBarH);
  ctx.fillStyle = theme.accent;
  ctx.fillRect(0, footerBarY - 4, w, 4);

  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 11px 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("IF FOUND, PLEASE RETURN TO CAMPUS REGISTRAR OFFICE, PANVEL", w / 2, footerBarY + 24);
  ctx.restore();
}

// ─────────────────────────────────────────────────────────────
// 3. HORIZONTAL FRONT (Full Rich Layout)
// ─────────────────────────────────────────────────────────────
async function renderHorizontalFront(
  ctx: CanvasRenderingContext2D,
  data: StudentIdData,
  w: number,
  h: number,
  theme: typeof THEME_CONFIGS.navy
) {
  // Top Header Banner
  const headerHeight = 135;
  const grad = ctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, theme.primary);
  grad.addColorStop(1, theme.secondary);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, headerHeight);

  // Gold accent stripe
  const goldGrad = ctx.createLinearGradient(0, 0, w, 0);
  goldGrad.addColorStop(0, theme.goldGradient[0]);
  goldGrad.addColorStop(0.5, theme.goldGradient[1]);
  goldGrad.addColorStop(1, theme.goldGradient[2]);
  ctx.fillStyle = goldGrad;
  ctx.fillRect(0, headerHeight, w, 5);

  // Logo
  try {
    const logoImg = await loadImage(data.logoUrl || "/logos/CSMU-Logo.jpg");
    const logoSize = 102;
    ctx.save();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(80, headerHeight / 2, logoSize / 2 + 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.clip();
    ctx.drawImage(logoImg, 29, (headerHeight - logoSize) / 2, logoSize, logoSize);
    ctx.restore();
  } catch (e) {
    console.warn(e);
  }

  // University Header Text
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 26px 'Outfit', 'Inter', sans-serif";
  ctx.fillText("CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY", 150, 46);

  ctx.font = "600 16px 'Inter', sans-serif";
  ctx.fillStyle = "#fef08a";
  ctx.fillText("NAVI MUMBAI, MAHARASHTRA", 150, 75);

  ctx.font = "12px 'Inter', sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.fillText("Approved by UGC | Govt. of Maharashtra Act XXIII", 150, 100);
  ctx.restore();

  // Right Header Text (Clean, Bold, No background box)
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 18px 'Outfit', 'Inter', sans-serif";
  ctx.textAlign = "right";
  ctx.letterSpacing = "2px";
  ctx.fillText("STUDENT IDENTITY CARD", w - 45, 60);
  ctx.font = "bold 13px 'Inter', sans-serif";
  ctx.fillStyle = "#fef08a";
  ctx.fillText(`SESSION: ${data.academicYear || "2024-2025"}`, w - 45, 82);
  ctx.restore();

  // Student Photo (Left Column)
  const photoSize = 220;
  const photoX = 50;
  const photoY = 165;

  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0,0,0,0.15)";
  ctx.shadowBlur = 10;
  drawRoundedRect(ctx, photoX - 5, photoY - 5, photoSize + 10, photoSize + 10, 14);
  ctx.fill();
  ctx.restore();

  try {
    if (data.photoUrl) {
      const photoImg = await loadImage(data.photoUrl);
      ctx.save();
      drawRoundedRect(ctx, photoX, photoY, photoSize, photoSize, 10);
      ctx.clip();
      ctx.drawImage(photoImg, photoX, photoY, photoSize, photoSize);
      ctx.restore();
    }
  } catch (e) {
    console.warn(e);
  }

  ctx.save();
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 2.5;
  drawRoundedRect(ctx, photoX, photoY, photoSize, photoSize, 10);
  ctx.stroke();
  ctx.restore();

  // Student Signature Box Below Photo
  const sigBoxY = photoY + photoSize + 12;
  ctx.save();
  ctx.fillStyle = "#f8fafc";
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, photoX, sigBoxY, photoSize, 40, 6);
  ctx.fill();
  ctx.stroke();

  ctx.font = "italic bold 15px 'Brush Script MT', cursive, sans-serif";
  ctx.fillStyle = "#1e3a8a";
  ctx.textAlign = "center";
  ctx.fillText(data.name || "Student Signature", photoX + photoSize / 2, sigBoxY + 23);

  ctx.font = "bold 8px 'Inter', sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.fillText("STUDENT SIGNATURE", photoX + photoSize / 2, sigBoxY + 35);
  ctx.restore();

  // Barcode below Signature
  drawBarcode(ctx, photoX, sigBoxY + 52, photoSize, 42, data.studentId || "CSMU2024");
  ctx.save();
  ctx.font = "bold 11px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#475569";
  ctx.textAlign = "center";
  ctx.fillText(data.studentId || "CSMU2024", photoX + photoSize / 2, sigBoxY + 110);
  ctx.restore();

  // Student Details (Center Column)
  const detailsX = 310;
  ctx.save();
  ctx.font = "bold 30px 'Outfit', 'Inter', sans-serif";
  ctx.fillStyle = theme.primary;
  ctx.fillText((data.name || "STUDENT NAME").toUpperCase(), detailsX, 195);

  ctx.font = "bold 16px 'JetBrains Mono', monospace";
  ctx.fillStyle = theme.accent;
  ctx.fillText(`ENROLLMENT NO: ${data.studentId || "CSMU2024CS1089"}`, detailsX, 226);
  ctx.restore();

  // Table rows
  const horizFields = [
    { label: "Roll Number", val: data.rollNo || "24CS1089" },
    { label: "Course / Program", val: data.course || "B.Tech Computer Science & Engineering" },
    { label: "Faculty / Dept", val: data.department || "Faculty of Engineering & Technology" },
    { label: "Academic Term", val: `${data.academicYear || "2024 - 2025"} (Sem ${data.semester || "IV"})` },
    { label: "Date of Birth", val: data.dob || "15/08/2004" },
    { label: "Blood Group", val: data.bloodGroup || "B+" },
    { label: "Validity Period", val: `${data.issueDate || "01/08/2024"} to ${data.expiryDate || "31/07/2028"}` },
    { label: "Emergency Phone", val: data.phone || "+91 98765 43210" },
  ];

  ctx.save();
  horizFields.forEach((f, idx) => {
    const rowY = 265 + idx * 36;
    if (idx % 2 === 0) {
      ctx.fillStyle = "rgba(241, 245, 249, 0.85)";
      drawRoundedRect(ctx, detailsX - 10, rowY - 22, 540, 30, 6);
      ctx.fill();
    }
    ctx.font = "bold 12px 'Inter', sans-serif";
    ctx.fillStyle = "#475569";
    ctx.fillText(f.label, detailsX, rowY);

    ctx.font = "600 13px 'Inter', sans-serif";
    ctx.fillStyle = idx === 6 ? "#b91c1c" : idx === 3 ? "#047857" : "#0f172a";
    ctx.fillText(`:  ${f.val}`, detailsX + 160, rowY);
  });
  ctx.restore();

  // Right Column: Authorized Signature (signature.png from public folder)
  const sigX = w - 260;
  const sigY = 320;

  try {
    const sigImg = await loadImage("/signature.png");
    ctx.drawImage(sigImg, sigX + 20, sigY - 10, 175, 65);
  } catch (e) {
    ctx.save();
    ctx.textAlign = "center";
    ctx.font = "italic bold 22px 'Brush Script MT', cursive, sans-serif";
    ctx.fillStyle = "#1e3a8a";
    ctx.fillText("Authorized Signatory", sigX + 105, sigY + 35);
    ctx.restore();
  }

  ctx.save();
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(sigX + 10, sigY + 60);
  ctx.lineTo(sigX + 200, sigY + 60);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.font = "bold 11px 'Inter', sans-serif";
  ctx.fillStyle = "#475569";
  ctx.fillText("AUTHORIZED SIGNATORY", sigX + 105, sigY + 76);
  ctx.font = "9px 'Inter', sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.fillText("REGISTRAR OFFICE, CSMU", sigX + 105, sigY + 90);
  ctx.restore();

  // Bottom Footer Strip
  ctx.fillStyle = theme.primary;
  ctx.fillRect(0, h - 32, w, 32);
  ctx.fillStyle = goldGrad;
  ctx.fillRect(0, h - 36, w, 4);

  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 11px 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    "CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY  •  NAVI MUMBAI, MAHARASHTRA  •  WWW.CSMU.AC.IN",
    w / 2,
    h - 12
  );
  ctx.restore();
}

// ─────────────────────────────────────────────────────────────
// 4. HORIZONTAL BACK
// ─────────────────────────────────────────────────────────────
async function renderHorizontalBack(
  ctx: CanvasRenderingContext2D,
  data: StudentIdData,
  w: number,
  h: number,
  theme: typeof THEME_CONFIGS.navy
) {
  // Top Magnetic Bar
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, w, 55);

  // Left Column: Instructions
  ctx.save();
  ctx.font = "bold 16px 'Outfit', 'Inter', sans-serif";
  ctx.fillStyle = theme.primary;
  ctx.fillText("GENERAL INSTRUCTIONS & RULES / नियम", 50, 95);

  const rules = [
    "• This identity card is valid only for the bonafide enrolled student of CSMU.",
    "• Carry this card inside campus, laboratories, library & examinations at all times.",
    "• Cardholder is responsible for safe custody. Report loss promptly to Registrar office.",
    "• Unauthorized duplication, tampering or transfer is strictly punishable under law.",
    "• Card must be surrendered to the University upon course clearance or withdrawal.",
  ];

  ctx.font = "13px 'Inter', sans-serif";
  ctx.fillStyle = "#334155";
  rules.forEach((r, idx) => {
    ctx.fillText(r, 50, 130 + idx * 28);
  });
  ctx.restore();

  // Emergency Details Box
  ctx.save();
  ctx.fillStyle = "#f8fafc";
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, 50, 290, 540, 160, 12);
  ctx.fill();
  ctx.stroke();

  ctx.font = "bold 13px 'Inter', sans-serif";
  ctx.fillStyle = theme.primary;
  ctx.fillText("STUDENT RESIDENCE & EMERGENCY CONTACT RECORD", 70, 320);

  ctx.font = "12px 'Inter', sans-serif";
  ctx.fillStyle = "#475569";
  ctx.fillText(`Student Name    : ${data.name || "Mohit Kumar"}`, 70, 348);
  ctx.fillText(`Emergency Phone : ${data.phone || "+91 98765 43210"}`, 70, 372);
  ctx.fillText(`Blood Group     : ${data.bloodGroup || "B+"}  |  DOB: ${data.dob || "15/08/2004"}`, 70, 396);
  ctx.fillText(`Permanent Addr  : ${data.address || "Navi Mumbai, Maharashtra, India"}`, 70, 420);
  ctx.restore();

  // Right Column: Campus Details & QR Verification
  const rightX = 640;
  ctx.save();
  ctx.font = "bold 18px 'Outfit', 'Inter', sans-serif";
  ctx.fillStyle = theme.primary;
  ctx.fillText("CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY", rightX, 95);

  ctx.font = "12px 'Inter', sans-serif";
  ctx.fillStyle = "#475569";
  ctx.fillText("Campus: Near Shedung Toll Plaza, Old Mumbai-Pune Highway,", rightX, 122);
  ctx.fillText("Panvel, Navi Mumbai, Maharashtra - 410206", rightX, 142);
  ctx.fillText("Website: www.csmu.ac.in  |  Email: registrar@csmu.ac.in", rightX, 166);
  ctx.fillText("Student Helpline: +91 89761 11122 / 33 / 44", rightX, 188);
  ctx.restore();

  // QR Code Box
  ctx.save();
  ctx.fillStyle = "#f1f5f9";
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, rightX, 220, 140, 140, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r * c + data.studentId.length) % 2 === 0) {
        ctx.fillRect(rightX + 14 + c * 14, 234 + r * 14, 10, 10);
      }
    }
  }

  ctx.font = "bold 10px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#475569";
  ctx.fillText("SCAN TO VERIFY", rightX + 22, 385);
  ctx.restore();

  // Return Notice Box
  ctx.save();
  ctx.fillStyle = theme.accentLight;
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, rightX + 170, 220, 340, 140, 12);
  ctx.fill();
  ctx.stroke();

  ctx.font = "bold 13px 'Inter', sans-serif";
  ctx.fillStyle = theme.primary;
  ctx.fillText("PROPERTY OF CSMU", rightX + 190, 250);

  ctx.font = "12px 'Inter', sans-serif";
  ctx.fillStyle = "#475569";
  ctx.fillText("If found, please hand over to any", rightX + 190, 278);
  ctx.fillText("CSMU security or post to Registrar Office,", rightX + 190, 300);
  ctx.fillText("Panvel, Navi Mumbai, Maharashtra - 410206", rightX + 190, 322);
  ctx.restore();

  // Bottom Bar
  ctx.fillStyle = theme.primary;
  ctx.fillRect(0, h - 30, w, 30);
  ctx.fillStyle = theme.accent;
  ctx.fillRect(0, h - 35, w, 5);

  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 11px 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    "CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY  •  OFFICIAL STUDENT CREDENTIAL  •  PANVEL, NAVI MUMBAI",
    w / 2,
    h - 11
  );
  ctx.restore();
}

export function downloadCanvasImage(canvas: HTMLCanvasElement, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png", 1.0);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
