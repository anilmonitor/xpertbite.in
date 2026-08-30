export interface DurgaBengaliCardExportOptions {
  name: string;
  photoUrl?: string | null;
  message?: string;
  portraitUrl?: string;
}

/**
 * Draws a rich Bengali festive greeting card on an HTML5 canvas and returns a Data URL.
 */
export async function generateDurgaPujaBengaliCard(
  options: DurgaBengaliCardExportOptions
): Promise<string> {
  const width = 1080;
  const height = 1350;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Could not get canvas context");
  }

  // 1. Rich Crimson & Deep Royal Red Background (আলতা ও শাঁখা-সিঁদুর লাল)
  const bgGradient = ctx.createRadialGradient(
    width / 2,
    height * 0.35,
    50,
    width / 2,
    height / 2,
    900
  );
  bgGradient.addColorStop(0, "#990012");
  bgGradient.addColorStop(0.5, "#52000A");
  bgGradient.addColorStop(1, "#210004");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // 2. Ornate Golden Border & Traditional Bengali Alpana Style Accents
  ctx.save();
  ctx.strokeStyle = "#F59E0B";
  ctx.lineWidth = 14;
  ctx.strokeRect(28, 28, width - 56, height - 56);

  ctx.strokeStyle = "#FDE68A";
  ctx.lineWidth = 3;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  // Corner Alpana Ornaments
  const drawCorner = (x: number, y: number, angle: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.strokeStyle = "#F59E0B";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, Math.PI / 2);
    ctx.stroke();

    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(25, 25, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  drawCorner(44, 44, 0);
  drawCorner(width - 44, 44, Math.PI / 2);
  drawCorner(width - 44, height - 44, Math.PI);
  drawCorner(44, height - 44, (Math.PI * 3) / 2);
  ctx.restore();

  // 3. Golden Festive Lights / Sparkles
  ctx.save();
  for (let i = 0; i < 45; i++) {
    const sx = 60 + Math.random() * (width - 120);
    const sy = 60 + Math.random() * (height - 120);
    const radius = 1.5 + Math.random() * 3.5;
    ctx.fillStyle =
      i % 2 === 0 ? "rgba(255, 215, 0, 0.55)" : "rgba(254, 240, 138, 0.4)";
    ctx.beginPath();
    ctx.arc(sx, sy, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // 4. Header Sanskrit / Bengali Mantra
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = "#FDE68A";
  ctx.font = "bold 26px 'Noto Serif Bengali', 'Segoe UI', Arial, sans-serif";
  ctx.fillText("🚩 ॐ শ্রী শ্রী দুর্গায়ৈ নমঃ 🚩", width / 2, 92);

  ctx.fillStyle = "#FEF08A";
  ctx.font = "italic 21px 'Noto Serif Bengali', 'Segoe UI', Arial, sans-serif";
  ctx.fillText(
    "॥ যা দেবী সর্বভূতেষু মাতৃরূপেণ সংস্থিতা । নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ ॥",
    width / 2,
    130
  );
  ctx.restore();

  // 5. Maa Durga Divine Portrait
  const durgaImgUrl =
    options.portraitUrl || "/durgapuja/durga_mata_portrait.jpg";
  try {
    const durgaImg = await loadImage(durgaImgUrl);
    ctx.save();
    const imgSize = 340;
    const imgX = (width - imgSize) / 2;
    const imgY = 160;

    // Glowing circle backdrop
    const glowGrad = ctx.createRadialGradient(
      width / 2,
      imgY + imgSize / 2,
      imgSize / 4,
      width / 2,
      imgY + imgSize / 2,
      imgSize / 2 + 25
    );
    glowGrad.addColorStop(0, "rgba(255, 215, 0, 0.8)");
    glowGrad.addColorStop(0.7, "rgba(245, 158, 11, 0.4)");
    glowGrad.addColorStop(1, "rgba(245, 158, 11, 0)");
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(width / 2, imgY + imgSize / 2, imgSize / 2 + 25, 0, Math.PI * 2);
    ctx.fill();

    // Clip circular image
    ctx.beginPath();
    ctx.arc(width / 2, imgY + imgSize / 2, imgSize / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(durgaImg, imgX, imgY, imgSize, imgSize);
    ctx.restore();

    // Golden frame around Maa Durga image
    ctx.save();
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(width / 2, imgY + imgSize / 2, imgSize / 2, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "#FFFBEB";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width / 2, imgY + imgSize / 2, imgSize / 2 - 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  } catch {
    ctx.save();
    ctx.fillStyle = "#F59E0B";
    ctx.font = "bold 90px 'Segoe UI', Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("🪔 🔱 🪔", width / 2, 340);
    ctx.restore();
  }

  // 6. Grand Title: "শুভ শারদীয়া ও শুভ দুর্গাপূজা"
  ctx.save();
  ctx.textAlign = "center";

  // Subtitle
  ctx.fillStyle = "#FCD34D";
  ctx.font = "bold 28px 'Noto Serif Bengali', 'Segoe UI', Arial, sans-serif";
  ctx.fillText("মা দুর্গার আগমনী বার্তায়", width / 2, 545);

  // Main Bengali Title with Gold Glow Effect
  ctx.shadowColor = "#FFB703";
  ctx.shadowBlur = 24;
  ctx.fillStyle = "#FFFBEB";
  ctx.font = "900 48px 'Noto Serif Bengali', 'Segoe UI', Arial, sans-serif";
  ctx.fillText("শুভ শারদীয়া ও দুর্গাপূজা ২০২৬", width / 2, 605);

  ctx.shadowBlur = 0;
  ctx.fillStyle = "#F59E0B";
  ctx.font = "bold 24px 'Segoe UI', Arial, sans-serif";
  ctx.fillText("✨ Subho Durga Puja 2026 ✨", width / 2, 645);
  ctx.restore();

  // 7. User Custom Photo & Sender Details
  const userPhoto = options.photoUrl;
  const userName = options.name ? options.name.trim() : "আপনার প্রিয়জন";
  const userMessage =
    options.message ||
    "মা দুর্গার আশীর্বাদে আপনার জীবন সুখ, শান্তি, সুস্বাস্থ্য এবং সমৃদ্ধিতে ভরে উঠুক!";

  if (userPhoto) {
    try {
      const uImg = await loadImage(userPhoto);
      ctx.save();
      const uSize = 220;
      const uX = (width - uSize) / 2;
      const uY = 680;

      ctx.fillStyle = "rgba(255, 215, 0, 0.35)";
      ctx.beginPath();
      ctx.arc(width / 2, uY + uSize / 2, uSize / 2 + 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(width / 2, uY + uSize / 2, uSize / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(uImg, uX, uY, uSize, uSize);
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "#FFD700";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(width / 2, uY + uSize / 2, uSize / 2, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(width / 2, uY + uSize / 2, uSize / 2 - 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    } catch {}
  }

  // 8. Sender Name Ribbon Banner
  const nameBoxY = userPhoto ? 935 : 720;
  ctx.save();
  const bannerWidth = 740;
  const bannerHeight = 74;
  const bannerX = (width - bannerWidth) / 2;

  const bannerGrad = ctx.createLinearGradient(
    bannerX,
    0,
    bannerX + bannerWidth,
    0
  );
  bannerGrad.addColorStop(0, "rgba(217, 119, 6, 0)");
  bannerGrad.addColorStop(0.15, "#D97706");
  bannerGrad.addColorStop(0.5, "#B45309");
  bannerGrad.addColorStop(0.85, "#D97706");
  bannerGrad.addColorStop(1, "rgba(217, 119, 6, 0)");
  ctx.fillStyle = bannerGrad;
  ctx.fillRect(bannerX, nameBoxY, bannerWidth, bannerHeight);

  ctx.strokeStyle = "#FDE68A";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(bannerX + 40, nameBoxY);
  ctx.lineTo(bannerX + bannerWidth - 40, nameBoxY);
  ctx.moveTo(bannerX + 40, nameBoxY + bannerHeight);
  ctx.lineTo(bannerX + bannerWidth - 40, nameBoxY + bannerHeight);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 34px 'Noto Serif Bengali', 'Segoe UI', Arial, sans-serif";
  ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
  ctx.shadowBlur = 8;
  ctx.fillText(`✨ ${userName} এর পক্ষ থেকে ✨`, width / 2, nameBoxY + 48);
  ctx.restore();

  // 9. Personalized Festive Message
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = "#FEF08A";
  ctx.font = "24px 'Noto Serif Bengali', 'Segoe UI', Arial, sans-serif";
  wrapText(ctx, `"${userMessage}"`, width / 2, nameBoxY + 120, 820, 36);
  ctx.restore();

  // 10. Diya & Shankha Icons & Bottom Footer
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "40px 'Segoe UI', Arial, sans-serif";
  ctx.fillText("🪔   🔱   🌺   🔱   🪔", width / 2, height - 120);

  ctx.fillStyle = "#F59E0B";
  ctx.font = "18px 'Segoe UI', Arial, sans-serif";
  ctx.fillText(
    "XpertBite • Create your Bengali greeting at xpertbite.in/durgapujabengali2026",
    width / 2,
    height - 70
  );
  ctx.restore();

  return canvas.toDataURL("image/jpeg", 0.95);
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = words[n] + " ";
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
}
