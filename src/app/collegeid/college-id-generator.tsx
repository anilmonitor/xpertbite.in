"use client";

import * as React from "react";
import Image from "next/image";
import {
  StudentIdData,
  generateIdCardCanvas,
  downloadCanvasImage,
} from "./canvas-id-exporter";
import {
  Download,
  Printer,
  Upload,
  Sparkles,
  RotateCcw,
  Eye,
  Shield,
  CreditCard,
  Building2,
  Calendar,
  User,
  CheckCircle2,
  Share2,
  Layers,
  ZoomIn,
  Copy,
  PenTool,
} from "lucide-react";
import { toast } from "sonner";

const DEMO_STUDENT: StudentIdData = {
  name: "Mohit Kumar",
  studentId: "CSMU2024CS1089",
  rollNo: "24CS1089",
  academicYear: "2024 - 2025",
  semester: "IV",
  course: "B.Tech Computer Science & Engineering",
  department: "Faculty of Engineering & Technology",
  dob: "15/08/2004",
  bloodGroup: "B+",
  phone: "+91 98765 43210",
  issueDate: "01/08/2024",
  expiryDate: "31/07/2028",
  photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
  logoUrl: "/logos/CSMU-Logo.jpg",
  signatureUrl: "/signature.png",
  address: "Sector 14, Kharghar, Navi Mumbai, Maharashtra - 410210",
  theme: "navy",
  orientation: "vertical",
  showHologram: true,
  showLanyardSlot: true,
  showOfficialStamp: false,
};

const SAMPLE_AVATARS = [
  {
    name: "Male Student",
    url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Female Student",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Student 3",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  },
];

export function CollegeIdGenerator() {
  const [data, setData] = React.useState<StudentIdData>(DEMO_STUDENT);
  const [activeSide, setActiveSide] = React.useState<"front" | "back">("front");
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [photoZoom, setPhotoZoom] = React.useState(1);
  const [mobileTab, setMobileTab] = React.useState<"form" | "preview">("form");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Handle Photo File Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be under 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setData((prev) => ({ ...prev, photoUrl: event.target!.result as string }));
          toast.success("Passport photo uploaded successfully!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Quick fill sample data
  const handleFillDemo = () => {
    setData(DEMO_STUDENT);
    toast.success("Sample CSMU student data loaded!");
  };

  // Reset form
  const handleReset = () => {
    setData({
      name: "",
      studentId: "",
      rollNo: "",
      academicYear: "2024 - 2025",
      semester: "I",
      course: "B.Tech Computer Science & Engineering",
      department: "Faculty of Engineering & Technology",
      dob: "",
      bloodGroup: "O+",
      phone: "",
      issueDate: new Date().toISOString().split("T")[0],
      expiryDate: new Date(Date.now() + 4 * 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      photoUrl: "",
      logoUrl: "/logos/CSMU-Logo.jpg",
      address: "Navi Mumbai, Maharashtra",
      theme: "navy",
      orientation: "vertical",
      showHologram: true,
      showLanyardSlot: true,
      showOfficialStamp: false,
    });
    toast.info("Form cleared. Please enter student details.");
  };

  // Download Front / Back
  const handleDownload = async (side: "front" | "back") => {
    try {
      setIsDownloading(true);
      toast.loading(`Generating 300 DPI Ultra-HD ${side.toUpperCase()} ID Card...`, {
        id: "download-card",
      });
      const canvas = await generateIdCardCanvas(data, side);
      const filename = `CSMU_ID_Card_${data.studentId || "Student"}_${side.toUpperCase()}.png`;
      downloadCanvasImage(canvas, filename);
      toast.success(`${side.toUpperCase()} card downloaded successfully!`, {
        id: "download-card",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate ID card download.", { id: "download-card" });
    } finally {
      setIsDownloading(false);
    }
  };

  // Download Both Front & Back Side-by-Side
  const handleDownloadBoth = async () => {
    try {
      setIsDownloading(true);
      toast.loading("Generating Complete Dual-Sided ID Sheet...", {
        id: "download-card",
      });
      const canvasFront = await generateIdCardCanvas(data, "front");
      const canvasBack = await generateIdCardCanvas(data, "back");

      const combined = document.createElement("canvas");
      const gap = 80;
      const margin = 80;

      if (data.orientation === "vertical") {
        combined.width = canvasFront.width * 2 + gap + margin * 2;
        combined.height = canvasFront.height + margin * 2;
      } else {
        combined.width = canvasFront.width + margin * 2;
        combined.height = canvasFront.height * 2 + gap + margin * 2;
      }

      const ctx = combined.getContext("2d");
      if (!ctx) throw new Error("Canvas error");

      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, combined.width, combined.height);

      ctx.fillStyle = "#0f2042";
      ctx.font = "bold 32px 'Outfit', sans-serif";
      ctx.fillText(
        "CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY - OFFICIAL STUDENT ID CARD",
        margin,
        50
      );

      if (data.orientation === "vertical") {
        ctx.drawImage(canvasFront, margin, margin);
        ctx.drawImage(canvasBack, margin + canvasFront.width + gap, margin);
      } else {
        ctx.drawImage(canvasFront, margin, margin);
        ctx.drawImage(canvasBack, margin, margin + canvasFront.height + gap);
      }

      const filename = `CSMU_Full_ID_Card_${data.studentId || "Student"}.png`;
      downloadCanvasImage(combined, filename);
      toast.success("Complete ID Card sheet downloaded!", { id: "download-card" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate complete ID Card.", { id: "download-card" });
    } finally {
      setIsDownloading(false);
    }
  };

  // Print Card
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full">
      {/* Clean Minimal Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 sm:pb-6 sm:mb-6 border-b border-border">
        <div>
          <h1 className="text-lg sm:text-2xl font-bold font-heading text-foreground tracking-tight flex items-center gap-2">
            College Student ID Card Maker
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold border border-emerald-500/20 shrink-0">
              300 DPI HD
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Create, preview, and download official student identity cards with instant PNG export.
          </p>
        </div>

        {/* Quick Action Buttons (Responsive Wrap) */}
        <div className="flex items-center gap-2 pt-1 sm:pt-0">
          <button
            type="button"
            onClick={handleFillDemo}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-muted hover:bg-muted/80 text-foreground border border-border transition-all shadow-sm active:scale-95"
            title="Fill sample student info"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
            Demo Data
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-muted hover:bg-muted/80 text-foreground border border-border transition-all shadow-sm active:scale-95"
            title="Clear all fields"
          >
            <RotateCcw className="h-3.5 w-3.5 shrink-0" />
            Reset
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm active:scale-95"
          >
            <Printer className="h-3.5 w-3.5 shrink-0" />
            Print
          </button>
        </div>
      </div>

      {/* Mobile-Only Tab Switcher (Form vs Live Preview) */}
      <div className="flex lg:hidden rounded-2xl bg-muted p-1 border border-border mb-5">
        <button
          type="button"
          onClick={() => setMobileTab("form")}
          className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            mobileTab === "form"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <PenTool className="h-3.5 w-3.5" />
          Edit Details
        </button>
        <button
          type="button"
          onClick={() => setMobileTab("preview")}
          className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            mobileTab === "preview"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Eye className="h-3.5 w-3.5 text-emerald-500" />
          Live Card Preview
        </button>
      </div>

      {/* Main Grid: Form Left, Live Preview Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Form Controls (6 cols) */}
        <div
          className={`lg:col-span-6 space-y-5 ${
            mobileTab === "preview" ? "hidden lg:block" : "block"
          }`}
        >
          {/* Card Layout & Style Options */}
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-sm">
            <h2 className="text-sm sm:text-base font-bold font-heading text-foreground mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" /> Card Style & Format
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Orientation */}
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  Layout Orientation
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setData((p) => ({ ...p, orientation: "vertical" }))}
                    className={`px-3 py-2.5 text-xs font-semibold rounded-xl border transition-all flex items-center justify-center gap-1.5 ${
                      data.orientation === "vertical"
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    Vertical Badge
                  </button>
                  <button
                    type="button"
                    onClick={() => setData((p) => ({ ...p, orientation: "horizontal" }))}
                    className={`px-3 py-2.5 text-xs font-semibold rounded-xl border transition-all flex items-center justify-center gap-1.5 ${
                      data.orientation === "horizontal"
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    Horizontal Card
                  </button>
                </div>
              </div>

              {/* Theme */}
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  University Theme
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: "navy", label: "Navy", color: "bg-[#0f2042]" },
                    { id: "maroon", label: "Maroon", color: "bg-[#581c87]" },
                    { id: "emerald", label: "Emerald", color: "bg-[#064e3b]" },
                    { id: "sapphire", label: "Sapphire", color: "bg-[#0369a1]" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setData((p) => ({ ...p, theme: t.id as any }))}
                      className={`h-10 rounded-xl border flex flex-col items-center justify-center gap-0.5 text-xs font-bold transition-all ${
                        data.theme === t.id
                          ? "ring-2 ring-primary ring-offset-2 border-primary"
                          : "border-border opacity-70 hover:opacity-100"
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full ${t.color}`} />
                      <span className="text-[10px]">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-2 gap-3 mt-3.5 pt-3 border-t border-border">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-foreground select-none">
                <input
                  type="checkbox"
                  checked={data.showHologram}
                  onChange={(e) =>
                    setData((p) => ({ ...p, showHologram: e.target.checked }))
                  }
                  className="rounded border-border text-primary focus:ring-primary h-4 w-4"
                />
                <span>Hologram Seal</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-foreground select-none">
                <input
                  type="checkbox"
                  checked={data.showLanyardSlot}
                  onChange={(e) =>
                    setData((p) => ({ ...p, showLanyardSlot: e.target.checked }))
                  }
                  className="rounded border-border text-primary focus:ring-primary h-4 w-4"
                />
                <span>Lanyard Slot</span>
              </label>
            </div>
          </div>

          {/* Student Photo Upload */}
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-sm">
            <h2 className="text-sm sm:text-base font-bold font-heading text-foreground mb-3 flex items-center gap-2">
              <User className="h-4 w-4 text-primary" /> Student Passport Photo
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative h-24 w-20 rounded-xl border-2 border-dashed border-primary/40 bg-muted/50 overflow-hidden shrink-0 flex items-center justify-center">
                {data.photoUrl ? (
                  <img
                    src={data.photoUrl}
                    alt="Uploaded Student"
                    className="h-full w-full object-cover transition-transform"
                    style={{ transform: `scale(${photoZoom})` }}
                  />
                ) : (
                  <div className="text-center p-2 text-muted-foreground">
                    <User className="h-7 w-7 mx-auto mb-1 opacity-50" />
                    <span className="text-[9px] block">No Photo</span>
                  </div>
                )}
              </div>

              <div className="flex-1 w-full space-y-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm active:scale-98"
                >
                  <Upload className="h-3.5 w-3.5" />
                  Upload Passport Photo (JPG/PNG)
                </button>

                <div className="flex items-center flex-wrap gap-1.5 pt-0.5">
                  <span className="text-[10px] text-muted-foreground font-medium">
                    Or sample:
                  </span>
                  <div className="flex items-center gap-1.5">
                    {SAMPLE_AVATARS.map((av, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() =>
                          setData((prev) => ({ ...prev, photoUrl: av.url }))
                        }
                        className="text-[10px] px-2 py-1 rounded-md border border-border bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors"
                      >
                        Sample {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {data.photoUrl && (
                  <div className="flex items-center gap-2 pt-0.5">
                    <ZoomIn className="h-3 w-3 text-muted-foreground shrink-0" />
                    <span className="text-[10px] text-muted-foreground">Zoom:</span>
                    <input
                      type="range"
                      min="0.8"
                      max="2"
                      step="0.05"
                      value={photoZoom}
                      onChange={(e) => setPhotoZoom(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Student Form Details */}
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
            <h2 className="text-sm sm:text-base font-bold font-heading text-foreground mb-1 flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> Enrolment & Student Data
            </h2>

            {/* Full Name & Enrollment ID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Full Student Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="e.g. Aarav S. Patil"
                  className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Enrollment No / PRN <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={data.studentId}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      studentId: e.target.value.toUpperCase(),
                    }))
                  }
                  placeholder="e.g. CSMU2024CS1089"
                  className="w-full px-3 py-2.5 text-base sm:text-sm font-mono uppercase rounded-xl border bg-background border-border focus:border-primary outline-none"
                />
              </div>
            </div>

            {/* Roll No, Academic Session, Semester */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Roll Number
                </label>
                <input
                  type="text"
                  value={data.rollNo || ""}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, rollNo: e.target.value.toUpperCase() }))
                  }
                  placeholder="e.g. 24CS1089"
                  className="w-full px-3 py-2.5 text-base sm:text-sm font-mono uppercase rounded-xl border bg-background border-border focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Academic Year <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={data.academicYear || ""}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, academicYear: e.target.value }))
                  }
                  placeholder="2024 - 2025"
                  className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Current Semester
                </label>
                <select
                  value={data.semester || "IV"}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, semester: e.target.value }))
                  }
                  className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
                >
                  {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map((sem) => (
                    <option key={sem} value={sem}>
                      Semester {sem}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Course & Department */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Degree / Program <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={data.course}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, course: e.target.value }))
                  }
                  placeholder="e.g. B.Tech Computer Science"
                  className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Department / Faculty
                </label>
                <input
                  type="text"
                  value={data.department}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, department: e.target.value }))
                  }
                  placeholder="e.g. Faculty of Engineering"
                  className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
                />
              </div>
            </div>

            {/* Validity Dates (Issue & Expiry) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-muted/40 p-3 rounded-xl border border-border">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-primary shrink-0" /> Issue Date (Valid From){" "}
                  <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={data.issueDate}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, issueDate: e.target.value }))
                  }
                  placeholder="01/08/2024"
                  className="w-full px-3 py-2 text-base sm:text-sm rounded-lg border bg-background border-border focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-destructive shrink-0" /> Expiry Date (Valid Till){" "}
                  <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={data.expiryDate}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, expiryDate: e.target.value }))
                  }
                  placeholder="31/07/2028"
                  className="w-full px-3 py-2 text-base sm:text-sm rounded-lg border bg-background border-border focus:border-primary outline-none"
                />
              </div>
            </div>

            {/* Blood Group, DOB & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Blood Group
                </label>
                <select
                  value={data.bloodGroup}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, bloodGroup: e.target.value }))
                  }
                  className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
                >
                  {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
                    <option key={bg} value={bg}>
                      {bg}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={data.dob}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  placeholder="15/08/2004"
                  className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Emergency Phone
                </label>
                <input
                  type="text"
                  value={data.phone}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                Permanent Address / City
              </label>
              <input
                type="text"
                value={data.address || ""}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, address: e.target.value }))
                }
                placeholder="e.g. Sector 14, Kharghar, Navi Mumbai, Maharashtra"
                className="w-full px-3 py-2.5 text-base sm:text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
              />
            </div>

            {/* Mobile View: Quick Jump to Preview Button */}
            <div className="pt-2 block lg:hidden">
              <button
                type="button"
                onClick={() => setMobileTab("preview")}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98"
              >
                <Eye className="h-4 w-4" />
                View Generated Card & Download
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Card Preview (6 cols) */}
        <div
          className={`lg:col-span-6 lg:sticky lg:top-24 space-y-4 ${
            mobileTab === "form" ? "hidden lg:block" : "block"
          }`}
        >
          <div className="bg-card border border-border rounded-3xl p-4 sm:p-5 shadow-xl flex flex-col items-center">
            {/* Top Preview Controls Bar */}
            <div className="w-full flex items-center justify-between pb-3.5 mb-3 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Live Card Preview
                </span>
              </div>

              {/* Front / Back Toggle Buttons */}
              <div className="inline-flex rounded-lg bg-muted p-0.5 border border-border">
                <button
                  type="button"
                  onClick={() => setActiveSide("front")}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    activeSide === "front"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Front Side
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSide("back")}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    activeSide === "back"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Back Side
                </button>
              </div>
            </div>

            {/* Visual Card Mockup (Vertical vs Horizontal - Responsive Scaling) */}
            <div className="py-2 flex justify-center w-full overflow-hidden">
              {data.orientation === "vertical" ? (
                /* Vertical Portrait Card Mockup */
                <div
                  className={`relative w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[360px] rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 ${
                    data.theme === "maroon"
                      ? "border-purple-900 bg-white"
                      : data.theme === "emerald"
                      ? "border-emerald-900 bg-white"
                      : data.theme === "sapphire"
                      ? "border-sky-800 bg-white"
                      : "border-blue-950 bg-white"
                  }`}
                >
                  {data.showLanyardSlot && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-2 rounded-full bg-slate-300 border border-slate-400 z-30 shadow-inner" />
                  )}

                  {activeSide === "front" ? (
                    <div className="flex flex-col h-full relative bg-white text-slate-900 text-left">
                      {/* University Header */}
                      <div
                        className={`pt-5 pb-3 px-3.5 text-center text-white relative ${
                          data.theme === "maroon"
                            ? "bg-gradient-to-b from-[#581c87] to-[#831843]"
                            : data.theme === "emerald"
                            ? "bg-gradient-to-b from-[#064e3b] to-[#065f46]"
                            : data.theme === "sapphire"
                            ? "bg-gradient-to-b from-[#0369a1] to-[#0284c7]"
                            : "bg-gradient-to-b from-[#0f2042] to-[#1e3a8a]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white p-0.5 shadow shrink-0 flex items-center justify-center">
                            <Image
                              src="/logos/CSMU-Logo.jpg"
                              alt="CSMU Logo"
                              width={38}
                              height={38}
                              className="object-contain"
                            />
                          </div>
                          <div className="text-left">
                            <div className="font-extrabold text-[11px] sm:text-[12px] uppercase leading-tight font-heading">
                              CHHATRAPATI SHIVAJI MAHARAJ
                            </div>
                            <div className="font-extrabold text-[10px] sm:text-[11px] uppercase leading-tight font-heading">
                              UNIVERSITY
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-amber-300 font-semibold">
                              Navi Mumbai, Maharashtra
                            </div>
                            <div className="text-[7.5px] sm:text-[8px] text-white/80">
                              Approved by UGC | Govt. of Maharashtra
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Gold Ribbon */}
                      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500" />

                      {/* Clean Bold Title without lines */}
                      <div className="py-2 px-3 text-center border-b border-slate-200">
                        <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-slate-900 uppercase font-heading">
                          STUDENT IDENTITY CARD
                        </span>
                      </div>

                      {/* Showcase: Photo + Name & ID on Right */}
                      <div className="p-3 sm:p-3.5 pb-2 flex gap-3 items-center border-b border-slate-200">
                        {/* Photo */}
                        <div className="relative shrink-0">
                          <div className="h-22 w-18 sm:h-24 sm:w-20 rounded-lg p-0.5 bg-slate-200 shadow">
                            <div className="h-full w-full rounded overflow-hidden bg-slate-100 flex items-center justify-center">
                              {data.photoUrl ? (
                                <img
                                  src={data.photoUrl}
                                  alt={data.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <User className="h-8 w-8 text-slate-400" />
                              )}
                            </div>
                          </div>
                          {data.showHologram && (
                            <div className="absolute -bottom-1.5 -right-1.5 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-amber-300 p-0.5 shadow flex items-center justify-center text-[5px] sm:text-[6px] font-black text-slate-900 border border-white">
                              CSMU
                            </div>
                          )}
                        </div>

                        {/* Top Info */}
                        <div className="flex-1 min-w-0 space-y-0.5 text-left">
                          <div className="font-extrabold text-xs sm:text-sm text-slate-900 leading-tight truncate">
                            {data.name || "STUDENT NAME"}
                          </div>
                          <div className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-700">
                            ID: {data.studentId || "CSMU2024CS1089"}
                          </div>
                          <div className="text-[8px] sm:text-[9px] font-mono text-slate-600">
                            Roll: {data.rollNo || "24CS1089"}
                          </div>
                          <div className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-[7.5px] sm:text-[8px] font-bold text-emerald-700">
                            REGULAR ENROLLED
                          </div>
                        </div>
                      </div>

                      {/* Details Table */}
                      <div className="p-3 sm:p-3.5 space-y-1 text-[9px] sm:text-[10px] text-slate-700">
                        <div className="flex justify-between py-0.5 px-1.5 bg-slate-50 rounded border border-slate-200">
                          <span className="font-semibold text-slate-500">Degree:</span>
                          <span className="font-bold text-slate-900 truncate max-w-[170px] sm:max-w-[190px]">
                            {data.course || "B.Tech CSE"}
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5 px-1.5">
                          <span className="font-semibold text-slate-500">Faculty:</span>
                          <span className="font-medium text-slate-800 truncate max-w-[170px] sm:max-w-[190px]">
                            {data.department || "Faculty of Engg"}
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5 px-1.5 bg-slate-50 rounded border border-slate-200">
                          <span className="font-semibold text-slate-500">Term / Sem:</span>
                          <span className="font-bold text-emerald-700">
                            {data.academicYear || "2024-2025"} (Sem {data.semester || "IV"})
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5 px-1.5">
                          <span className="font-semibold text-slate-500">DOB & Blood:</span>
                          <span className="font-semibold text-slate-800">
                            {data.dob || "15/08/2004"} | {data.bloodGroup || "B+"}
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5 px-1.5 bg-slate-50 rounded border border-slate-200">
                          <span className="font-semibold text-slate-500">Validity:</span>
                          <span className="font-bold text-rose-700">
                            {data.issueDate} to {data.expiryDate}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Section: Barcode & Real Signature */}
                      <div className="p-3 sm:p-3.5 pt-2 flex items-center justify-between border-t border-slate-200">
                        {/* Barcode */}
                        <div className="text-left">
                          <div className="h-5 w-20 sm:w-24 bg-[repeating-linear-gradient(90deg,#000,#000_1.5px,transparent_1.5px,transparent_3px)] mb-0.5" />
                          <span className="text-[7px] font-mono text-slate-500 block">
                            {data.studentId || "CSMU2024"}
                          </span>
                        </div>

                        {/* Authorized Signatory (Real Signature) */}
                        <div className="text-center flex flex-col items-center">
                          <img
                            src="/signature.png"
                            alt="Authorized Signature"
                            className="h-6 sm:h-7 w-auto object-contain mb-0.5"
                          />
                          <div className="border-t border-slate-400 pt-0.5 text-[6.5px] sm:text-[7px] font-bold text-slate-700 uppercase tracking-tighter">
                            Authorized Signatory
                          </div>
                        </div>
                      </div>

                      {/* Bottom Strip */}
                      <div className="bg-[#0f2042] text-white text-[7.5px] sm:text-[8px] py-1 text-center font-bold">
                        WWW.CSMU.AC.IN • OFFICIAL STUDENT CARD
                      </div>
                    </div>
                  ) : (
                    /* Vertical Back Side */
                    <div className="flex flex-col h-full relative p-3 sm:p-4 text-slate-900 bg-white text-left">
                      <div className="bg-[#0f2042] text-white py-1 px-2.5 rounded text-center font-bold text-[9px] sm:text-[10px] uppercase tracking-wider mb-2">
                        TERMS & INSTRUCTIONS
                      </div>
                      <div className="h-5 sm:h-6 w-full bg-slate-800 rounded-sm mb-2" />
                      <div className="text-[8px] sm:text-[9px] text-slate-600 space-y-1 mb-2">
                        <p>1. This card is non-transferable & property of CSMU.</p>
                        <p>2. Must be carried inside campus & presented during exams.</p>
                        <p>3. Report loss immediately to Registrar office.</p>
                        <p>4. Misuse will invite strict disciplinary action.</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-[8px] sm:text-[9px] space-y-0.5 mb-2">
                        <div className="font-bold text-blue-950 uppercase border-b border-slate-200 pb-0.5">
                          Student Emergency Info
                        </div>
                        <div>Phone: {data.phone || "N/A"}</div>
                        <div>DOB: {data.dob || "N/A"}</div>
                        <div className="truncate">Res: {data.address || "Navi Mumbai, MH"}</div>
                      </div>
                      <div className="text-center text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-200">
                        <div className="font-bold text-slate-800 text-[8px] sm:text-[9px]">
                          CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY
                        </div>
                        <div>Panvel, Navi Mumbai - 410206 | www.csmu.ac.in</div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Horizontal Landscape Card Mockup */
                <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[460px] rounded-2xl overflow-hidden shadow-2xl border border-blue-950 bg-white text-left">
                  {activeSide === "front" ? (
                    <div>
                      {/* Top Header */}
                      <div className="bg-[#0f2042] text-white p-2.5 sm:p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white p-0.5 shrink-0 flex items-center justify-center">
                            <Image
                              src="/logos/CSMU-Logo.jpg"
                              alt="CSMU Logo"
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-extrabold text-[10px] sm:text-[11px] uppercase leading-tight font-heading">
                              CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY
                            </div>
                            <div className="text-[8px] sm:text-[9px] text-amber-300 font-semibold">
                              Navi Mumbai, Maharashtra • Approved by UGC
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white">
                            STUDENT ID
                          </div>
                          <div className="text-[7.5px] sm:text-[8px] font-bold text-amber-300">
                            {data.academicYear || "2024-2025"}
                          </div>
                        </div>
                      </div>
                      <div className="h-1 bg-amber-400" />

                      {/* Body */}
                      <div className="p-2.5 sm:p-3.5 flex gap-2.5 sm:gap-3.5 bg-white text-slate-900">
                        {/* Left: Photo & Barcode */}
                        <div className="shrink-0 text-center space-y-1">
                          <div className="h-20 w-16 sm:h-22 sm:w-18 rounded-lg overflow-hidden bg-slate-100 border border-slate-300 shadow">
                            {data.photoUrl ? (
                              <img
                                src={data.photoUrl}
                                alt={data.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <User className="h-6 w-6 mx-auto mt-3 text-slate-400" />
                            )}
                          </div>
                          <div className="h-3.5 w-16 sm:w-18 bg-[repeating-linear-gradient(90deg,#000,#000_1px,transparent_1px,transparent_3px)]" />
                        </div>

                        {/* Center: Details */}
                        <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1 text-[9px] sm:text-[10px]">
                          <div className="font-extrabold text-xs sm:text-sm text-slate-900 truncate">
                            {data.name || "STUDENT NAME"}
                          </div>
                          <div className="text-[8px] sm:text-[9px] font-mono font-bold text-amber-700 truncate">
                            ID: {data.studentId || "CSMU2024CS1089"} | Roll: {data.rollNo || "24CS1089"}
                          </div>
                          <div className="text-slate-600 truncate">
                            <span className="font-semibold">Course:</span> {data.course || "B.Tech"}
                          </div>
                          <div className="text-slate-600">
                            <span className="font-semibold">Term:</span> {data.academicYear || "2024-2025"} (Sem {data.semester || "IV"})
                          </div>
                          <div className="text-slate-600 truncate">
                            <span className="font-semibold">Valid:</span> {data.issueDate} to {data.expiryDate}
                          </div>
                        </div>

                        {/* Right: Signature */}
                        <div className="shrink-0 flex flex-col items-center justify-end pb-0.5">
                          <img
                            src="/signature.png"
                            alt="Authorized Signature"
                            className="h-6 sm:h-8 w-auto object-contain mb-0.5"
                          />
                          <div className="border-t border-slate-400 pt-0.5 text-[6px] sm:text-[7px] font-bold text-slate-700 uppercase">
                            Authorized Signatory
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="bg-[#0f2042] text-white text-[7.5px] sm:text-[8px] py-1 text-center font-bold">
                        CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY • OFFICIAL STUDENT CARD
                      </div>
                    </div>
                  ) : (
                    /* Horizontal Back */
                    <div className="p-3 sm:p-4 bg-white text-slate-900 text-[8px] sm:text-[9px] space-y-2">
                      <div className="h-4 sm:h-5 bg-slate-800 rounded-sm" />
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                        <div>
                          <div className="font-bold text-blue-950 uppercase mb-0.5">
                            Campus Address
                          </div>
                          <p className="text-slate-600 text-[7.5px] sm:text-[8px]">
                            Chhatrapati Shivaji Maharaj University
                            <br />
                            Near Shedung Toll Plaza, Panvel, Navi Mumbai - 410206
                          </p>
                        </div>
                        <div>
                          <div className="font-bold text-blue-950 uppercase mb-0.5">
                            Emergency Contact
                          </div>
                          <p className="text-slate-600 text-[7.5px] sm:text-[8px]">
                            Phone: {data.phone || "+91 98765 43210"}
                            <br />
                            Address: {data.address || "Navi Mumbai, MH"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Download Buttons Section (Full Mobile Touch Targets) */}
            <div className="w-full mt-4 space-y-2.5 pt-3 border-t border-border">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  disabled={isDownloading}
                  onClick={() => handleDownload("front")}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md active:scale-98 disabled:opacity-50"
                >
                  <Download className="h-3.5 w-3.5 shrink-0" />
                  Front (PNG)
                </button>

                <button
                  type="button"
                  disabled={isDownloading}
                  onClick={() => handleDownload("back")}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground border border-border transition-all shadow-sm active:scale-98 disabled:opacity-50"
                >
                  <Download className="h-3.5 w-3.5 shrink-0" />
                  Back (PNG)
                </button>
              </div>

              <button
                type="button"
                disabled={isDownloading}
                onClick={handleDownloadBoth}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all shadow-lg shadow-amber-500/20 active:scale-98 disabled:opacity-50"
              >
                <Download className="h-4 w-4 shrink-0" />
                Download Front & Back (300 DPI HD)
              </button>
            </div>
          </div>

          {/* Guidelines Box */}
          <div className="bg-muted/50 border border-border rounded-xl p-3 sm:p-3.5 text-xs text-muted-foreground space-y-1">
            <div className="font-bold text-foreground flex items-center gap-1.5 text-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              Verified & Certified Specifications:
            </div>
            <p className="text-[11px]">• Includes Official University Details, Academic Term & Validity Dates.</p>
            <p className="text-[11px]">• High density 300 DPI resolution, accepted for student proof verification.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
