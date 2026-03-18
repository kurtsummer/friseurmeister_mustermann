import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative bg-[#1F2A44] rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl shadow-[#1F2A44]/20">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[#6D5EF5]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-[#7FA38A]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm font-bold mb-10 border border-white/10 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#6D5EF5]" />
              <span>Ihr Weg zum KI-Marketing</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
              KI muss nicht kompliziert sein. <br className="hidden md:block" />
              Aber sie sollte <span className="text-[#6D5EF5]">sinnvoll</span> eingesetzt werden.
            </h2>

            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
              Ich unterstütze Unternehmen dabei, KI im Marketing so einzusetzen, dass sie verständlich bleibt, Prozesse entlastet und zu besseren Ergebnissen führt. Ohne Hype, ohne Überforderung, sondern mit Klarheit, Struktur und persönlicher Begleitung.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-16 px-10 rounded-2xl bg-[#6D5EF5] hover:bg-[#6D5EF5]/90 text-white font-bold text-xl shadow-xl shadow-[#6D5EF5]/20 transition-all hover:scale-105 active:scale-95"
              >
                Jetzt kostenloses Erstgespräch anfragen
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>

            <p className="mt-10 text-slate-400 text-sm font-medium">
              Völlig unverbindlich • 30 Minuten Zoom oder Telefon • Fokus auf Ihre Ziele
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
