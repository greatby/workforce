// export default function WindsurfStatsSection() {
//   return (
//     <section className="w-full bg-[#440036] py-24">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="flex flex-col xl:flex-row gap-10 items-start justify-between">
//           {/* Left Text Section */}
//           <div className="max-w-md flex flex-col gap-8">
//             <h4 className="text-3xl font-semibold text-white">The Windsurf Editor</h4>
//             <p className="text-base text-white">
//               The GenAI engine behind the world’s leading software teams. <br />
//               <br />
//               Backed by data. Proven in production.
//             </p>
//           </div>

//           {/* Right Stat Cards */}
//           <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-start">
//             {[
//               {
//                 stat: "70M+",
//                 subtitle: "Lines of code written by AI every day",
//                 description:
//                   "Between Cascade, Tab, and all of the other AI capabilities, our AI is not just writing a lot of code, but writing a lot of accurate code that is being committed into production codebases.",
//               },
//               {
//                 stat: "1M+",
//                 subtitle: "Active users on the Windsurf Editor",
//                 description:
//                   "Join a force of developers and non-developers alike around the world who are using the Editor's powers to get superpowers of their own.",
//               },
//               {
//                 stat: "94%",
//                 subtitle: "Percent of code written by AI",
//                 description:
//                   "Our AI removes the vast amounts of time spent of boilerplate and menial tasks so that you can focus on the fun and creative parts of building.",
//               },
//               {
//                 stat: "59%",
//                 subtitle: "Fortune 500 companies build with Windsurf",
//                 description:
//                   "Windsurf powers mission-critical systems and accelerates software development for the world’s leading companies.",
//               },
//             ].map((card, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col justify-between bg-[#FAF7F5] rounded-md p-5 lg:p-8 w-[320px] md:w-[362px] lg:w-[448px] h-[292px] lg:h-[348px]"
//               >
//                 <div className="flex flex-col gap-6">
//                   <h2 className="text-[54px] md:text-[80px] leading-none text-[#0E1B2A]">
//                     {card.stat}
//                   </h2>
//                   <div className="flex items-center gap-2">
//                     <div className="h-2 w-2 bg-[#1C2A3A] rounded-full"></div>
//                     <h3 className="text-xs md:text-sm font-medium uppercase tracking-tight text-[#0E1B2A]">
//                       {card.subtitle}
//                     </h3>
//                   </div>
//                 </div>
//                 <p className="text-sm text-[#0E1B2A] opacity-80">{card.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function WindsurfStatsLayout() {
 const stats = [
  {
    phase: "PHASE ONE: MASTERY",
    quote: '"Learn the old world to build the new one"',
    points: [
      "For our clients: World-class HR services that work flawlessly today",
      "For our team: Deep understanding of what needs to be transformed",
      "For the future: The blueprint for complete automation",
    ],
  },
  {
    phase: "PHASE TWO: CREATION",
    quote: '"Build the intelligence that will replace us"',
    points: [
      "For our clients: Cutting-edge HR software that evolves with your needs",
      "For our team: The thrill of building tomorrow's workforce management",
      "For the future: Intelligent systems that surpass human capability",
    ],
  },
  {
    phase: "PHASE THREE: ORCHESTRATION",
    quote: '"Become the conductors of an AI symphony"',
    points: [
      "For our clients: Competitive advantages that last decades",
      "For our team: Careers that span the greatest transformation in work history",
      "For the future: The foundation of how work gets done for the next century",
    ],
  },
];


  return (
    // <section className="w-full bg-[#440036] py-[100px] text-white">
    //   <div className="mx-auto max-w-7xl px-4">
    //     <div className="flex flex-col xl:flex-row items-start justify-between gap-10">
    //       {/* Left Content */}
    //       <div className="flex max-w-[425px] flex-col gap-8">
    //         <h4 className="text-3xl sm:text-4xl font-semibold text-white">
    //           The Windsurf Editor
    //         </h4>
    //         <p className="text-sm text-white/90">
    //           The GenAI engine behind the world’s leading software teams.
    //           <br />
    //           <br />
    //           Backed by data. Proven in production.
    //         </p>
    //       </div>

    //       {/* Right Columns with Staggered Cards */}
    //       <div className="flex w-full flex-col items-start justify-center gap-8 md:flex-row">
    //         {/* Left Column - mt-36 stagger */}
    //         <div className="flex flex-col gap-8 md:mt-36">
    //           {[stats[0], stats[1]].map((stat, i) => (
    //             <div
    //               key={i}
    //               className="flex h-[292px] w-[362px] flex-col items-start justify-between rounded-md bg-[#FAF7F5] p-5 text-[#440036] lg:h-[348px] lg:w-[448px] lg:p-8"
    //             >
    //               <div className="flex flex-col gap-6">
    //                 <h2 className="text-[54px] leading-none md:text-[80px] h-auto">
    //                   <span>{stat.value}</span>
    //                 </h2>
    //                 <div className="flex items-center gap-2">
    //                   <div className="h-2 w-2 bg-[#E10098]" />
    //                   <h3 className="text-xs font-medium uppercase tracking-tighter md:text-sm">
    //                     {stat.label}
    //                   </h3>
    //                 </div>
    //               </div>
    //               <p className="text-sm">{stat.description}</p>
    //             </div>
    //           ))}
    //         </div>

    //         {/* Right Column */}
    //         <div className="flex flex-col gap-8">
    //           {[stats[2], stats[3]].map((stat, i) => (
    //             <div
    //               key={i}
    //               className="flex h-[292px] w-[362px] flex-col items-start justify-between rounded-md bg-[#FAF7F5] p-5 text-[#440036] lg:h-[348px] lg:w-[448px] lg:p-8"
    //             >
    //               <div className="flex flex-col gap-6">
    //                 <h2 className="text-[54px] leading-none md:text-[80px] h-auto">
    //                   <span>{stat.value}</span>
    //                 </h2>
    //                 <div className="flex items-center gap-2">
    //                   <div className="h-2 w-2 bg-[#E10098]" />
    //                   <h3 className="text-xs font-medium uppercase tracking-tighter md:text-sm">
    //                     {stat.label}
    //                   </h3>
    //                 </div>
    //               </div>
    //               <p className="text-sm">{stat.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="w-full bg-[#440036] py-[100px] text-white">
  <div className="mx-auto max-w-7xl px-4">
    <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-12 text-center">
      The Three Sacred Phases of Transformation
    </h2>

    <div className="flex flex-col gap-16">
      {/* Phase 1 */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-2">
          PHASE ONE: MASTERY
        </h3>
        <p className="italic text-white/90 mb-4">"Learn the old world to build the new one"</p>
        <p className="text-white/80 mb-4">
          We don't just provide HR services. We dissect every process, understand every pain point, and map every inefficiency. Because you can't revolutionize what you don't master.
        </p>
        <ul className="list-disc list-inside text-white/90 space-y-1">
          <li><strong>For our clients:</strong> World-class HR services that work flawlessly today</li>
          <li><strong>For our team:</strong> Deep understanding of what needs to be transformed</li>
          <li><strong>For the future:</strong> The blueprint for complete automation</li>
        </ul>
      </div>

      {/* Phase 2 */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-2">
          PHASE TWO: CREATION
        </h3>
        <p className="italic text-white/90 mb-4">"Build the intelligence that will replace us"</p>
        <p className="text-white/80 mb-4">
          Every compliance check teaches our AI. Every recruitment decision trains our algorithms. Every payroll run feeds our predictive models. We're not just working—we're programming the future.
        </p>
        <ul className="list-disc list-inside text-white/90 space-y-1">
          <li><strong>For our clients:</strong> Cutting-edge HR software that evolves with your needs</li>
          <li><strong>For our team:</strong> The thrill of building tomorrow's workforce management</li>
          <li><strong>For the future:</strong> Intelligent systems that surpass human capability</li>
        </ul>
      </div>

      {/* Phase 3 */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-2">
          PHASE THREE: ORCHESTRATION
        </h3>
        <p className="italic text-white/90 mb-4">"Become the conductors of an AI symphony"</p>
        <p className="text-white/80 mb-4">
          The final transformation: From managing people to orchestrating intelligence. Our AI agents handle the routine. Our teams focus on the revolutionary. This isn't just business evolution—it's human evolution.
        </p>
        <ul className="list-disc list-inside text-white/90 space-y-1">
          <li><strong>For our clients:</strong> Competitive advantages that last decades</li>
          <li><strong>For our team:</strong> Careers that span the greatest transformation in work history</li>
          <li><strong>For the future:</strong> The foundation of how work gets done for the next century</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
}
