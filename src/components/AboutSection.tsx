import { MapPin, Quote } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="uber-mich" className="bg-[#F8F9FC] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image/Visual Side */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="/kurt.png"
                alt="Kurt - KI-Marketing Experte"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7FA38A]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#6D5EF5]/5 rounded-full blur-3xl -z-10"></div>
            
            {/* Floating Info Badge */}
            <div className="absolute bottom-12 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 max-w-[200px] animate-bounce-slow">
              <Quote className="w-8 h-8 text-[#7FA38A] mb-3 opacity-20" />
              <p className="text-sm font-bold text-[#1F2A44] leading-snug">
                "KI im Marketing muss vor allem eines: funktionieren."
              </p>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7FA38A]/10 text-[#7FA38A] text-sm font-bold mb-8 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#7FA38A]"></span>
              Über mich
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2A44] mb-8 leading-tight">
              Persönlich in der Zusammenarbeit. Professionell in der Umsetzung.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10">
              <p>
                Hinter dem Angebot steht kein anonymer Großanbieter, sondern ein klar fokussierter Partner für KI-Marketing im Mittelstand.
              </p>
              <p>
                Ich begleite Unternehmen persönlich, erkläre komplexe Themen verständlich und entwickle Lösungen, die im Alltag wirklich funktionieren. So entsteht eine Zusammenarbeit, die menschlich, klar und gleichzeitig professionell ist.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F8F9FC] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#7FA38A]" />
              </div>
              <div>
                <p className="text-slate-600 font-bold mb-1">Standort Steiermark</p>
                <p className="text-slate-400 text-sm font-medium">
                  Mit Sitz in der Steiermark begleite ich KMU dabei, ihr Marketing zukunftssicher, effizient und verständlich weiterzuentwickeln.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
