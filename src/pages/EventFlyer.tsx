import { Camera, Mic, Calendar, Video, Globe, User, Monitor } from "lucide-react";
import PrizePodium from "@/components/PrizePodium";
import RibbonBadge from "@/components/RibbonBadge";
import { useState } from "react";
import qrCode from "@/assets/qr-code.svg";
import whatsappQr from "@/assets/whatsapp-qr.svg";
import sanjivaniLogo from "@/assets/sanjivani-logo-official.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSexample/viewform";
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/JON6X0wYhjmBwBhwOURl1s";

const PointingFinger = () => (
  <span className="inline-block animate-bounce text-lg" style={{ transform: "rotate(-90deg)" }}>👆</span>
);

const EventFlyer = () => {
  const [showDownload, setShowDownload] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const handleLogoClick = () => setShowDownload(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = sanjivaniLogo;
    link.download = "sanjivani-college-logo.png";
    link.click();
    setShowDownload(false);
  };

  const handleLogoDownloadFromGuidelines = () => {
    const link = document.createElement("a");
    link.href = sanjivaniLogo;
    link.download = "sanjivani-college-logo.png";
    link.click();
  };

  // ─── Shared sub-sections ───

  const headerSection = (
    <div className="text-center mb-4">
      <div className="relative inline-block">
        <img
          src={sanjivaniLogo}
          alt="Sanjivani College of Engineering Logo"
          className="w-20 h-20 mx-auto mb-3 rounded-full shadow-gold cursor-pointer hover:scale-105 transition-transform"
          onClick={handleLogoClick}
        />
        <span className="absolute -right-6 top-1/2 -translate-y-1/2 animate-bounce text-lg">👈</span>
      </div>
      <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold-light">
        Sanjivani College of Engineering
      </p>
      <p className="text-xs font-body text-muted-foreground mt-1">
        Department of Training & Placement
      </p>
    </div>
  );

  const divider = (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 h-px bg-gold-gradient opacity-40" />
      <Camera className="w-4 h-4 text-accent" />
      <Mic className="w-4 h-4 text-accent" />
      <Video className="w-4 h-4 text-accent" />
      <div className="flex-1 h-px bg-gold-gradient opacity-40" />
    </div>
  );

  const titleSection = (
    <div className="text-center mb-6">
      <h1 className="font-display text-2xl sm:text-3xl font-black leading-tight text-foreground mb-2">
        Sanjivani
      </h1>
      <h2 className="font-display text-3xl sm:text-4xl font-black text-gold-gradient leading-tight">
        Reel Your Introduction
      </h2>
      <div className="mt-3 relative inline-flex items-center gap-2">
        <button
          onClick={() => setShowGuidelines(true)}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 cursor-pointer hover:bg-accent/20 transition-colors"
        >
          <Video className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-body font-semibold text-accent">
            🎬 Video Submission Guidelines
          </span>
        </button>
        <PointingFinger />
      </div>
    </div>
  );

  const datesSection = (
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="bg-card/60 backdrop-blur border border-border rounded-xl p-4 text-center">
        <Calendar className="w-5 h-5 text-accent mx-auto mb-2" />
        <p className="text-[10px] font-body uppercase tracking-wider text-muted-foreground mb-1">
          Registration Open
        </p>
        <p className="text-lg font-display font-bold text-foreground">
          18 Feb 2026
        </p>
      </div>
      <div className="bg-card/60 backdrop-blur border border-border rounded-xl p-4 text-center">
        <Video className="w-5 h-5 text-accent mx-auto mb-2" />
        <p className="text-[10px] font-body uppercase tracking-wider text-muted-foreground mb-1">
          Last Date of Video Submission
        </p>
        <p className="text-lg font-display font-bold text-foreground">
          28 Feb 2026
        </p>
      </div>
    </div>
  );

  const languageSection = (
    <div className="bg-card/40 border border-border rounded-xl p-4 mb-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Globe className="w-4 h-4 text-sky" />
        <span className="text-xs font-body font-bold uppercase tracking-wider text-sky">
          Language Options
        </span>
      </div>
      <p className="text-sm font-body font-semibold text-foreground">
        English / German / Japanese
      </p>
      <p className="text-[10px] font-body text-muted-foreground mt-1">
        (English or any foreign language allowed)
      </p>
    </div>
  );

  const qrCodesSection = (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
      {/* Google Form QR */}
      <div className="text-center">
        <div className="relative inline-block">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground rounded-2xl p-4 shadow-gold cursor-pointer hover:scale-105 transition-transform"
          >
            <img src={qrCode} alt="Scan to Register QR Code" className="w-28 h-28 sm:w-36 sm:h-36" />
          </a>
          <span className="absolute -left-7 top-1/2 -translate-y-1/2 animate-bounce text-lg">👉</span>
        </div>
        <p className="mt-2 text-sm font-body font-bold text-accent tracking-wide">
          📲 Scan to Register
        </p>
      </div>

      {/* WhatsApp Group QR */}
      <div className="text-center">
        <div className="relative inline-block">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground rounded-2xl p-4 shadow-gold cursor-pointer hover:scale-105 transition-transform"
          >
            <img src={whatsappQr} alt="Join WhatsApp Group QR Code" className="w-28 h-28 sm:w-36 sm:h-36" />
          </a>
          <span className="absolute -right-7 top-1/2 -translate-y-1/2 animate-bounce text-lg">👈</span>
        </div>
        <p className="mt-2 text-sm font-body font-bold text-accent tracking-wide">
          📲 WhatsApp Group
        </p>
      </div>
    </div>
  );

  const footerSection = (
    <div className="text-center border-t border-gold/20 pt-4">
      <div className="flex items-center justify-center gap-3 mb-3 opacity-40">
        <User className="w-6 h-6 text-sky-light" />
        <Mic className="w-5 h-5 text-accent" />
        <Camera className="w-5 h-5 text-sky-light" />
      </div>
      <p className="font-display text-sm sm:text-base italic text-gold-gradient">
        "Showcase Your Confidence. Speak. Shine. Succeed."
      </p>
    </div>
  );

  // ─── Portrait (default) layout ───

  const portraitLayout = (
    <div className="min-h-screen bg-navy-gradient flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[595px] bg-navy-gradient spotlight-effect shadow-gold rounded-2xl overflow-hidden border border-gold/30 relative">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />

        <RibbonBadge onClickAction={() => window.open(GOOGLE_FORM_URL, "_blank")} />

        <div className="px-6 sm:px-10 py-8 relative z-10">
          {headerSection}
          {divider}
          {titleSection}
          {datesSection}
          {languageSection}
          <div className="mb-4">
            <PrizePodium />
          </div>
          {qrCodesSection}
          {footerSection}
        </div>
      </div>
    </div>
  );

  // ─── Landscape (TV) layout ───

  const landscapeLayout = (
    <div className="w-screen h-screen bg-navy-gradient spotlight-effect overflow-hidden relative">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl z-20" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl z-20" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl z-20" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-2xl z-20" />

      <RibbonBadge onClickAction={() => window.open(GOOGLE_FORM_URL, "_blank")} />

      <div className="h-full flex flex-col px-6 py-3">
        {/* Top – Branding row */}
        <div className="flex-shrink-0 flex items-center justify-center gap-4 pb-2 border-b border-gold/20">
          <img
            src={sanjivaniLogo}
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-gold cursor-pointer hover:scale-105 transition-transform"
            onClick={handleLogoClick}
          />
          <div className="text-center">
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-light">
              Sanjivani College of Engineering
            </p>
            <p className="text-[9px] font-body text-muted-foreground">
              Department of Training & Placement
            </p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Camera className="w-3 h-3 text-accent" />
            <Mic className="w-3 h-3 text-accent" />
            <Video className="w-3 h-3 text-accent" />
          </div>
        </div>

        {/* Three-column body */}
        <div className="flex-1 flex gap-4 min-h-0 mt-2">
          {/* Left column – Title & Info */}
          <div className="flex-[1.1] flex flex-col justify-center items-center px-2">
            <h1 className="font-display text-xl font-black leading-tight text-foreground">Sanjivani</h1>
            <h2 className="font-display text-2xl font-black text-gold-gradient leading-tight mb-2">Reel Your Introduction</h2>
            <button
              onClick={() => setShowGuidelines(true)}
              className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 cursor-pointer hover:bg-accent/20 transition-colors mb-2"
            >
              <Video className="w-3 h-3 text-accent" />
              <span className="text-[9px] font-body font-semibold text-accent">🎬 Guidelines</span>
              <PointingFinger />
            </button>

            <div className="grid grid-cols-2 gap-2 w-full max-w-xs mb-2">
              <div className="bg-card/60 backdrop-blur border border-border rounded-lg p-1.5 text-center">
                <Calendar className="w-3 h-3 text-accent mx-auto mb-0.5" />
                <p className="text-[7px] font-body uppercase tracking-wider text-muted-foreground">Registration Open</p>
                <p className="text-xs font-display font-bold text-foreground">18 Feb 2026</p>
              </div>
              <div className="bg-card/60 backdrop-blur border border-border rounded-lg p-1.5 text-center">
                <Video className="w-3 h-3 text-accent mx-auto mb-0.5" />
                <p className="text-[7px] font-body uppercase tracking-wider text-muted-foreground">Video Submission</p>
                <p className="text-xs font-display font-bold text-foreground">28 Feb 2026</p>
              </div>
            </div>

            <div className="bg-card/40 border border-border rounded-lg p-1.5 text-center w-full max-w-xs">
              <div className="flex items-center justify-center gap-1">
                <Globe className="w-3 h-3 text-sky" />
                <span className="text-[8px] font-body font-bold uppercase tracking-wider text-sky">Language</span>
              </div>
              <p className="text-[10px] font-body font-semibold text-foreground">English / German / Japanese</p>
            </div>
          </div>

          {/* Center column – Prize Podium */}
          <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
            <div className="transform scale-[0.6] origin-center">
              <PrizePodium />
            </div>
          </div>

          {/* Right column – QR Codes */}
          <div className="flex-[0.8] flex flex-col justify-center items-center gap-3 px-2">
            {/* Google Form QR */}
            <div className="text-center">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-foreground rounded-xl p-2 shadow-gold cursor-pointer hover:scale-105 transition-transform">
                <img src={qrCode} alt="Register" className="w-20 h-20" />
              </a>
              <p className="mt-1 text-[9px] font-body font-bold text-accent">📲 Register</p>
            </div>
            {/* WhatsApp QR */}
            <div className="text-center">
              <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-foreground rounded-xl p-2 shadow-gold cursor-pointer hover:scale-105 transition-transform">
                <img src={whatsappQr} alt="WhatsApp Group" className="w-20 h-20" />
              </a>
              <p className="mt-1 text-[9px] font-body font-bold text-accent">📲 WhatsApp Group</p>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex-shrink-0 text-center border-t border-gold/20 pt-1.5 pb-1">
          <p className="font-display text-[10px] italic text-gold-gradient">
            "Showcase Your Confidence. Speak. Shine. Succeed."
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={`transition-all duration-500 ease-in-out ${isLandscape ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'}`}>
        {portraitLayout}
      </div>
      <div className={`transition-all duration-500 ease-in-out ${isLandscape ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}`}>
        {landscapeLayout}
      </div>

      {/* Landscape toggle button */}
      <button
        onClick={() => setIsLandscape(!isLandscape)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-card border border-accent/40 text-accent rounded-full px-4 py-2 shadow-gold hover:bg-accent/20 transition-colors font-body text-xs font-semibold"
      >
        <Monitor className="w-4 h-4" />
        {isLandscape ? "Portrait" : "Landscape"}
      </button>

      {/* Logo Download Dialog */}
      <AlertDialog open={showDownload} onOpenChange={setShowDownload}>
        <AlertDialogContent className="bg-card border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-foreground">Download Logo</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              Do you want to download the Sanjivani College of Engineering logo?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-border text-muted-foreground">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDownload} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Video Submission Guidelines Dialog */}
      <Dialog open={showGuidelines} onOpenChange={setShowGuidelines}>
        <DialogContent className="bg-card border-border max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-foreground text-lg font-display">
              🎬 Video Submission Guidelines
            </DialogTitle>
          </DialogHeader>
          <ul className="space-y-3 text-sm font-body text-muted-foreground mt-2">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span><strong className="text-foreground">Duration:</strong> 2 to 5 minutes only</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span><strong className="text-foreground">Topic:</strong> Self Introduction</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span><strong className="text-foreground">Language:</strong> English or any foreign language (German/Japanese)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>Maintain formal attire and confident body language</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>Ensure clear audio and good lighting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                Include the official institute logo visible in the background
                <br />
                <button
                  onClick={handleLogoDownloadFromGuidelines}
                  className="text-accent underline hover:text-accent/80 transition-colors mt-1 inline-block"
                >
                  Click here to download the logo
                </button>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>No abusive, inappropriate, or offensive content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>Video should be recorded in landscape mode</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>Speak naturally and avoid reading fully from paper</span>
            </li>
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventFlyer;
