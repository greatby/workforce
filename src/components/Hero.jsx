import React from "react";
import WavyBackground from "./HeroBg";



// export default function HeroSection() {
//   return (
//     <section className="relative mx-auto h-[85vh] w-full xl:h-[65vh]">
//       {/* Background */}
//       <div className="absolute inset-0 z-[10] bg-[#F9F4F1] pb-20 pt-16"></div>

//       {/* Content Container */}
//       <div className="mx-auto h-full w-full max-w-7xl px-5">
//         <div className="flex h-full pt-10 flex-col items-center justify-center">
//           <div className="z-[40] flex flex-col items-start justify-center gap-8 xl:flex-row xl:items-start xl:justify-between">

//             {/* Heading */}
//             <h1 className="text-4xl md:text-5xl font-bold text-[#121212] whitespace-nowrap xl:flex-1">
//               Built to Keep You <br /> in Flow State
//             </h1>

//             {/* Description + CTA */}
//             <div className="z-[40] flex max-w-[550px] flex-col gap-12 xl:flex-1">
//               <p className="text-base md:text-xl border-l-2 border-[#5A5A62] pl-2">
//                 The first agentic IDE, and then some. The Windsurf Editor is where the work
//                 of developers and AI truly flow together, allowing for a coding experience
//                 that feels like literal magic.
//               </p>

//               <div className="z-10 flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-2">
//                 <button className="inline-flex items-center justify-center gap-3 bg-[#34E8BB] text-black hover:bg-[#6ff2d1] font-medium text-base md:text-lg px-6 py-4 pr-5 rounded-[2px] w-full md:min-w-[15rem] md:w-fit">
//                   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
//                     <path
//                       d="M3.001 5.479L10.378 4.463V11.59H3L3.001 5.479ZM3.001 18.521L10.378 19.538V12.498H3L3.001 18.521ZM11.189 19.646L21.001 21V12.498H11.189V19.646ZM11.189 4.354V11.59H21.001V3L11.189 4.354Z"
//                       fill="currentColor"
//                     ></path>
//                   </svg>
//                   Download for Windows
//                 </button>

//                 <a
//                   href="/editor/download#all-download-options"
//                   className="text-[#137A6C] underline text-sm md:text-base hover:opacity-80 transition-opacity"
//                 >
//                   See all download options
//                 </a>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



export default function Hero() {
  return (
    <section className="relative h-screen w-screen bg-[#011e3c] text-white overflow-hidden">
  
    <WavyBackground/>
      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto mt-36 md:mt-0 flex h-full w-full max-w-7xl flex-col items-start justify-center px-5">
        <div className="flex w-full flex-col gap-10 md:gap-16 md:max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            Introducing <br /> the Windsurf Editor
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="inline-flex items-center gap-3 justify-center w-full md:w-fit md:min-w-[15rem] px-6 py-4 text-base md:text-lg font-medium text-black bg-[#00f5d4] hover:bg-[#5bf5de] transition rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[#00f5d4] focus-visible:ring-offset-[#00c8aa] disabled:opacity-30">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-auto"
                fill="currentColor"
              >
                <path d="M3.001 5.479L10.378 4.463V11.59H3L3.001 5.479ZM3.001 18.521L10.378 19.538V12.498H3L3.001 18.521ZM11.189 19.646L21.001 21V12.498H11.189V19.646ZM11.189 4.354V11.59H21.001V3L11.189 4.354Z" />
              </svg>
              Download for Windows
            </button>

            <a href="/editor">
              <button className="inline-flex items-center gap-3 justify-center w-full md:w-fit md:min-w-[15rem] px-6 py-4 text-base md:text-lg font-medium text-white border border-white/10 bg-white/10 backdrop-blur-sm hover:border-white/25 hover:bg-white/15 rounded-[2px] transition">
                Explore Features
              </button>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-[6px] w-[6px] bg-[#00f5d4]" />
            <p className="text-sm md:text-base text-white/80">
              The new purpose-built IDE to harness magic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
