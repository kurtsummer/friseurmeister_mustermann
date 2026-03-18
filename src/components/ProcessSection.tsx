export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Kennenlernen",
      description: "Wir schauen uns an, wo Ihr Unternehmen aktuell steht und welches Potenzial im Marketing steckt.",
    },
    {
      number: "02",
      title: "Strategie & Klarheit",
      description: "Sie erhalten eine klare Einschätzung, welche KI-Lösungen zu Ihrem Unternehmen passen — verständlich und ohne unnötige Komplexität.",
    },
    {
      number: "03",
      title: "Umsetzung & Begleitung",
      description: "Gemeinsam setzen wir die passenden Maßnahmen um, damit aus Ideen messbare Ergebnisse werden.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2A44] mb-8 leading-tight">
            So läuft die Zusammenarbeit ab
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium">
            In drei klaren Schritten zu Ihrem KI-gestützten Marketing — <br className="hidden md:block" />
            strukturiert, verständlich und ohne Umwege.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 -z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-2xl bg-[#F8F9FC] border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:border-[#6D5EF5]/30 group-hover:bg-white transition-all duration-500">
                  <span className="text-2xl font-black text-[#1F2A44] group-hover:text-[#6D5EF5] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#1F2A44]">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Mobile/Tablet Spacer Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-px h-12 bg-slate-100 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Footer for Process */}
        <div className="mt-20 pt-12 border-t border-slate-50 text-center">
          <p className="text-slate-400 font-semibold italic">
            "Keine starren Pakete, sondern eine Begleitung, die sich an Ihren Zielen orientiert."
          </p>
        </div>
      </div>
    </section>
  );
};
