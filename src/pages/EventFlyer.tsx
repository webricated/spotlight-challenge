import { Camera, Mic, Trophy, Calendar, Video, Globe, AlertCircle, User } from "lucide-react";
import { useState } from "react";
import qrCode from "@/assets/qr-code.svg";
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

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSexample/viewform";

const EventFlyer = () => {
  const [showDownload, setShowDownload] = useState(false);

  const handleLogoClick = () => setShowDownload(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = sanjivaniLogo;
    link.download = "sanjivani-college-logo.png";
    link.click();
    setShowDownload(false);
  };

  return (
    <div className="min-h-screen bg-navy-gradient flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[595px] bg-navy-gradient spotlight-effect shadow-gold rounded-2xl overflow-hidden border border-gold/30 relative">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />

        <div className="px-6 sm:px-10 py-8 relative z-10">
          {/* Header with Logo */}
          <div className="text-center mb-6">
            <img
              src={sanjivaniLogo}
              alt="Sanjivani College of Engineering Logo"
              className="w-20 h-20 mx-auto mb-3 rounded-full shadow-gold cursor-pointer hover:scale-105 transition-transform"
              onClick={handleLogoClick}
            />
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold-light">
              Sanjivani College of Engineering
            </p>
            <p className="text-xs font-body text-muted-foreground mt-1">
              Department of Training & Placement
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gold-gradient opacity-40" />
            <Camera className="w-4 h-4 text-accent" />
            <Mic className="w-4 h-4 text-accent" />
            <Video className="w-4 h-4 text-accent" />
            <div className="flex-1 h-px bg-gold-gradient opacity-40" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl sm:text-3xl font-black leading-tight text-foreground mb-2">
              Sanjivani
            </h1>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gold-gradient leading-tight">
              Reel Your Introduction
            </h2>
            <div className="mt-3 inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5">
              <Video className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-body font-semibold text-accent">
                🎬 Submit a 2-minute video introducing yourself
              </span>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-card/60 backdrop-blur border border-border rounded-xl p-4 text-center">
              <Calendar className="w-5 h-5 text-accent mx-auto mb-2" />
              <p className="text-[10px] font-body uppercase tracking-wider text-muted-foreground mb-1">
                Last Date of Registration
              </p>
              <p className="text-lg font-display font-bold text-foreground">
                24 Feb 2026
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur border border-border rounded-xl p-4 text-center">
              <Video className="w-5 h-5 text-accent mx-auto mb-2" />
              <p className="text-[10px] font-body uppercase tracking-wider text-muted-foreground mb-1">
                Last Date of Submission
              </p>
              <p className="text-lg font-display font-bold text-foreground">
                28 Feb 2026
              </p>
            </div>
          </div>

          {/* Language Options */}
          <div className="bg-card/40 border border-border rounded-xl p-4 mb-6 text-center">
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

          {/* Prize Money */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-body font-bold uppercase tracking-wider text-accent">
                Prize Money
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-gold-gradient rounded-xl p-3 text-center shadow-gold">
                <span className="text-lg">🥇</span>
                <p className="text-xs font-body font-bold text-accent-foreground mt-1">1st Prize</p>
                <p className="text-lg font-display font-black text-accent-foreground">₹1500</p>
              </div>
              <div className="bg-card/70 border border-border rounded-xl p-3 text-center">
                <span className="text-lg">🥈</span>
                <p className="text-xs font-body font-bold text-muted-foreground mt-1">2nd Prize</p>
                <p className="text-lg font-display font-black text-foreground">₹1000</p>
              </div>
              <div className="bg-card/70 border border-border rounded-xl p-3 text-center">
                <span className="text-lg">🥉</span>
                <p className="text-xs font-body font-bold text-muted-foreground mt-1">3rd Prize</p>
                <p className="text-lg font-display font-black text-foreground">₹500</p>
              </div>
            </div>
            <p className="text-center text-xs font-body text-muted-foreground">
              🎁 + 5 Consolation Prizes
            </p>
          </div>

          {/* Important Guidelines */}
          <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <h3 className="text-xs font-body font-bold uppercase tracking-wider text-destructive">
                Important Guidelines
              </h3>
            </div>
            <ul className="space-y-2 text-xs font-body text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>Video must include <strong className="text-foreground">Sanjivani College of Engineering logo</strong> clearly visible in the background</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>No abusive or inappropriate content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>Duration strictly <strong className="text-foreground">2 minutes</strong></span>
              </li>
            </ul>
          </div>

          {/* QR Code */}
          <div className="text-center mb-6">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground rounded-2xl p-4 shadow-gold cursor-pointer hover:scale-105 transition-transform"
            >
              <img src={qrCode} alt="Scan to Register QR Code" className="w-36 h-36" />
            </a>
            <p className="mt-3 text-sm font-body font-bold text-accent tracking-wide">
              📲 Scan to Register
            </p>
          </div>

          {/* Student silhouette section */}
          <div className="flex items-center justify-center gap-3 mb-4 opacity-40">
            <User className="w-6 h-6 text-sky-light" />
            <Mic className="w-5 h-5 text-accent" />
            <Camera className="w-5 h-5 text-sky-light" />
          </div>

          {/* Footer */}
          <div className="text-center border-t border-gold/20 pt-4">
            <p className="font-display text-sm sm:text-base italic text-gold-gradient">
              "Showcase Your Confidence. Speak. Shine. Succeed."
            </p>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default EventFlyer;
