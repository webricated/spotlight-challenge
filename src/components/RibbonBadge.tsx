import ribbon from "@/assets/ribbon.png";

interface RibbonBadgeProps {
  onClickAction?: () => void;
}

const RibbonBadge = ({ onClickAction }: RibbonBadgeProps) => {
  return (
    <div className="absolute top-4 left-4 z-40 select-none">
      <img
        src={ribbon}
        alt="Spotlight Challenge Ribbon"
        onClick={onClickAction}
        className="w-48 cursor-pointer"  // reduced size (was w-64)
        style={{
          transform: "rotate(-35deg)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
};

export default RibbonBadge;










// import { useState } from "react";

// interface RibbonBadgeProps {
//   onClickAction?: () => void;
// }

// const RibbonBadge = ({ onClickAction }: RibbonBadgeProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="fixed top-4 left-4 z-50 select-none" style={{ perspective: "800px" }}>
//       {/* Soft glow behind ribbon */}
//       <div className="absolute inset-0 bg-destructive/20 blur-2xl rounded-full scale-150 animate-pulse" />

//       <div
//         className="relative cursor-pointer transition-transform duration-300"
//         style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={onClickAction}
//       >
//         {/* Main ribbon container */}
//         <div className="relative">
//           {/* Top red strip */}
//           <div className="relative overflow-hidden rounded-t-lg px-5 py-2"
//             style={{
//               background: "linear-gradient(135deg, hsl(0 75% 35%), hsl(0 85% 50%), hsl(0 75% 40%))",
//               boxShadow: "0 2px 8px hsl(0 80% 40% / 0.4), inset 0 1px 0 hsl(0 80% 70% / 0.3)",
//             }}
//           >
//             {/* Highlight streak */}
//             <div
//               className="absolute inset-0 opacity-30"
//               style={{
//                 background: "linear-gradient(110deg, transparent 30%, hsl(0 0% 100% / 0.4) 45%, transparent 55%)",
//               }}
//             />
//             {/* Left fold */}
//             <div
//               className="absolute -left-1.5 bottom-0 w-3 h-3"
//               style={{
//                 background: "linear-gradient(135deg, hsl(0 70% 25%), transparent)",
//                 clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
//               }}
//             />
//             {/* Right fold */}
//             <div
//               className="absolute -right-1.5 bottom-0 w-3 h-3"
//               style={{
//                 background: "linear-gradient(225deg, hsl(0 70% 25%), transparent)",
//                 clipPath: "polygon(0 0, 100% 100%, 0 100%)",
//               }}
//             />
//             <p className="relative z-10 text-[11px] sm:text-xs font-body font-extrabold uppercase tracking-widest text-center"
//               style={{ color: "hsl(0 0% 100%)", textShadow: "0 1px 2px hsl(0 0% 0% / 0.3)" }}
//             >
//               Challenge On 🔥
//             </p>
//           </div>

//           {/* Bottom gold strip */}
//           <div className="relative overflow-hidden rounded-b-lg px-5 py-1.5"
//             style={{
//               background: "linear-gradient(135deg, hsl(43 95% 40%), hsl(43 90% 55%), hsl(43 85% 65%), hsl(43 90% 50%))",
//               boxShadow: "0 4px 12px hsl(43 90% 40% / 0.3), inset 0 1px 0 hsl(43 80% 75% / 0.5)",
//             }}
//           >
//             {/* Shine effect */}
//             <div
//               className="absolute inset-0 opacity-25"
//               style={{
//                 background: "linear-gradient(110deg, transparent 25%, hsl(0 0% 100% / 0.5) 40%, transparent 50%)",
//               }}
//             />
//             {/* Left fold */}
//             <div
//               className="absolute -left-1.5 top-0 w-3 h-3"
//               style={{
//                 background: "linear-gradient(45deg, hsl(43 90% 30%), transparent)",
//                 clipPath: "polygon(100% 0, 100% 100%, 0 0)",
//               }}
//             />
//             {/* Right fold */}
//             <div
//               className="absolute -right-1.5 top-0 w-3 h-3"
//               style={{
//                 background: "linear-gradient(315deg, hsl(43 90% 30%), transparent)",
//                 clipPath: "polygon(0 0, 100% 0, 0 100%)",
//               }}
//             />
//             <p className="relative z-10 text-[11px] sm:text-xs font-body font-extrabold uppercase tracking-wider text-center"
//               style={{ color: "hsl(216 50% 10%)", textShadow: "0 1px 0 hsl(43 80% 70% / 0.5)" }}
//             >
//               No Fee 🤩
//             </p>
//           </div>

//           {/* Depth shadow */}
//           <div
//             className="absolute -bottom-1 left-1 right-1 h-2 rounded-b-lg opacity-30"
//             style={{ background: "hsl(0 0% 0%)", filter: "blur(4px)" }}
//           />
//         </div>

//         {/* Click Here callout */}
//         <div className="mt-1.5 text-center">
//           <span className="text-[10px] font-body font-bold text-accent animate-pulse cursor-pointer">
//             Click Here 👉
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RibbonBadge;
