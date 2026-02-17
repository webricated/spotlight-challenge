import { Trophy } from "lucide-react";

const PrizePodium = () => {
  return (
    <div className="relative py-8 overflow-hidden">
      {/* Spotlight rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-full bg-gradient-to-b from-accent/20 via-accent/5 to-transparent blur-2xl" />
        <div className="absolute top-0 left-1/4 w-20 h-full bg-gradient-to-b from-sky/10 via-transparent to-transparent blur-xl rotate-6" />
        <div className="absolute top-0 right-1/4 w-20 h-full bg-gradient-to-b from-sky/10 via-transparent to-transparent blur-xl -rotate-6" />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: i % 3 === 0 ? 'hsl(var(--accent))' : 'hsl(var(--sky-light))',
            opacity: 0.4 + Math.random() * 0.4,
            animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Confetti pieces */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute pointer-events-none"
          style={{
            width: `${4 + Math.random() * 4}px`,
            height: `${8 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            top: `-${10 + Math.random() * 20}px`,
            background: ['hsl(var(--accent))', 'hsl(var(--sky))', 'hsl(var(--gold-light))', '#ff6b6b', '#c084fc'][i % 5],
            borderRadius: '1px',
            opacity: 0.7,
            animation: `confetti-fall ${4 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 6}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      {/* Section title */}
      <div className="flex items-center justify-center gap-2 mb-6 relative z-10">
        <Trophy className="w-5 h-5 text-accent" />
        <h3 className="text-sm font-body font-bold uppercase tracking-wider text-accent">
          Prize Money
        </h3>
        <Trophy className="w-5 h-5 text-accent" />
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-2 sm:gap-3 relative z-10 px-2">
        {/* 2nd Place - Left */}
        <div className="flex flex-col items-center w-[30%] max-w-[120px]">
          <div className="relative mb-2">
            <div className="absolute inset-0 bg-sky/20 rounded-full blur-lg animate-pulse" />
            <div className="relative bg-gradient-to-b from-[hsl(0_0%_75%)] to-[hsl(0_0%_60%)] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl sm:text-2xl">🥈</span>
            </div>
          </div>
          <p className="text-xs font-body font-bold text-muted-foreground mb-1">2nd Prize</p>
          <p className="text-lg sm:text-xl font-display font-black text-foreground prize-shimmer">₹1000</p>
          <div className="w-full mt-2 bg-gradient-to-t from-[hsl(216_45%_20%)] to-[hsl(216_45%_28%)] border border-border rounded-t-lg h-20 sm:h-24 flex items-center justify-center shadow-inner">
            <span className="text-2xl sm:text-3xl font-display font-black text-muted-foreground/50">2</span>
          </div>
        </div>

        {/* 1st Place - Center (tallest) */}
        <div className="flex flex-col items-center w-[34%] max-w-[140px] -mb-0">
          <div className="relative mb-2">
            {/* Glowing ring animation */}
            <div className="absolute inset-[-8px] rounded-full border-2 border-accent/50 animate-ping opacity-30" />
            <div className="absolute inset-[-4px] rounded-full border border-accent/40 gold-ring-glow" />
            <div className="absolute inset-0 bg-accent/25 rounded-full blur-xl animate-pulse" />
            {/* Sparkle effects */}
            <div className="absolute -top-2 -right-1 text-[10px] animate-bounce" style={{ animationDelay: '0.2s' }}>✨</div>
            <div className="absolute -top-1 -left-2 text-[10px] animate-bounce" style={{ animationDelay: '0.8s' }}>✨</div>
            <div className="absolute -bottom-1 right-0 text-[8px] animate-bounce" style={{ animationDelay: '1.4s' }}>⭐</div>
            <div className="relative bg-gold-gradient w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-gold">
              <span className="text-2xl sm:text-3xl">🥇</span>
            </div>
          </div>
          <p className="text-xs font-body font-bold text-accent mb-1">1st Prize</p>
          <p className="text-2xl sm:text-3xl font-display font-black text-gold-gradient first-prize-shimmer">₹1500</p>
          <div className="w-full mt-2 bg-gradient-to-t from-accent/20 to-accent/10 border border-accent/30 rounded-t-lg h-28 sm:h-32 flex items-center justify-center shadow-gold/20">
            <span className="text-3xl sm:text-4xl font-display font-black text-accent/30">1</span>
          </div>
        </div>

        {/* 3rd Place - Right */}
        <div className="flex flex-col items-center w-[30%] max-w-[120px]">
          <div className="relative mb-2">
            <div className="absolute inset-0 bg-[hsl(30_60%_40%)]/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative bg-gradient-to-b from-[hsl(30_60%_50%)] to-[hsl(30_60%_35%)] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl sm:text-2xl">🥉</span>
            </div>
          </div>
          <p className="text-xs font-body font-bold text-muted-foreground mb-1">3rd Prize</p>
          <p className="text-lg sm:text-xl font-display font-black text-foreground prize-shimmer">₹500</p>
          <div className="w-full mt-2 bg-gradient-to-t from-[hsl(216_45%_20%)] to-[hsl(216_45%_28%)] border border-border rounded-t-lg h-16 sm:h-20 flex items-center justify-center shadow-inner">
            <span className="text-2xl sm:text-3xl font-display font-black text-muted-foreground/50">3</span>
          </div>
        </div>
      </div>

      {/* Stage base */}
      <div className="relative z-10 mx-4 h-3 bg-gradient-to-r from-transparent via-accent/30 to-transparent rounded-b-lg" />

      {/* Consolation Prizes */}
      <div className="relative z-10 mt-6 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute inset-0 bg-accent/15 rounded blur-md animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
              <div className="relative text-lg consolation-gift" style={{ animationDelay: `${i * 0.2}s` }}>🎁</div>
            </div>
          ))}
        </div>
        <p className="text-xs font-body font-semibold text-muted-foreground">
          + <span className="text-accent font-bold">5</span> Consolation Prizes
        </p>
      </div>

      {/* Firework bursts */}
      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-accent firework-burst" />
      <div className="absolute top-8 right-6 w-1.5 h-1.5 rounded-full bg-sky firework-burst" style={{ animationDelay: '2s' }} />
      <div className="absolute top-6 left-1/4 w-1 h-1 rounded-full bg-gold-light firework-burst" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default PrizePodium;
