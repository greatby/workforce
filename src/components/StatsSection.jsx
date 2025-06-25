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
      value: "70M+",
      label: "Lines of code written by AI every day",
      description:
        "Between Cascade, Tab, and all of the other AI capabilities, our AI is not just writing a lot of code, but writing a lot of accurate code that is being committed into production codebases.",
    },
    {
      value: "1M+",
      label: "Active users on the Windsurf Editor",
      description:
        "Join a force of developers and non-developers alike around the world who are using the Editor's powers to get superpowers of their own.",
    },
    {
      value: "94%",
      label: "Percent of code written by AI",
      description:
        "Our AI removes the vast amounts of time spent of boilerplate and menial tasks so that you can focus on the fun and creative parts of building.",
    },
    {
      value: "59%",
      label: "Fortune 500 companies build with Windsurf",
      description:
        "Windsurf powers mission-critical systems and accelerates software development for the world’s leading companies.",
    },
  ];

  return (
    <section className="w-full bg-[#440036] py-[100px] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col xl:flex-row items-start justify-between gap-10">
          {/* Left Content */}
          <div className="flex max-w-[425px] flex-col gap-8">
            <h4 className="text-3xl sm:text-4xl font-semibold text-white">
              The Windsurf Editor
            </h4>
            <p className="text-sm text-white/90">
              The GenAI engine behind the world’s leading software teams.
              <br />
              <br />
              Backed by data. Proven in production.
            </p>
          </div>

          {/* Right Columns with Staggered Cards */}
          <div className="flex w-full flex-col items-start justify-center gap-8 md:flex-row">
            {/* Left Column - mt-36 stagger */}
            <div className="flex flex-col gap-8 md:mt-36">
              {[stats[0], stats[1]].map((stat, i) => (
                <div
                  key={i}
                  className="flex h-[292px] w-[362px] flex-col items-start justify-between rounded-md bg-[#FAF7F5] p-5 text-[#440036] lg:h-[348px] lg:w-[448px] lg:p-8"
                >
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[54px] leading-none md:text-[80px] h-auto">
                      <span>{stat.value}</span>
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#E10098]" />
                      <h3 className="text-xs font-medium uppercase tracking-tighter md:text-sm">
                        {stat.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              {[stats[2], stats[3]].map((stat, i) => (
                <div
                  key={i}
                  className="flex h-[292px] w-[362px] flex-col items-start justify-between rounded-md bg-[#FAF7F5] p-5 text-[#440036] lg:h-[348px] lg:w-[448px] lg:p-8"
                >
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[54px] leading-none md:text-[80px] h-auto">
                      <span>{stat.value}</span>
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#E10098]" />
                      <h3 className="text-xs font-medium uppercase tracking-tighter md:text-sm">
                        {stat.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
