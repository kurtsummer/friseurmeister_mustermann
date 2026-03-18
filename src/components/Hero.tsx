import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Scissors } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B4D3B2]/10 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E9D5CA]/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-[#8DA399]/10 text-[#5D6D66] px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span>Musterhausens Top-Adresse für Styling</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-[#2D3436]">
            Dein Look.<br />
            <span className="text-[#8DA399]">Unsere Passion.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#2D3436]/70 max-w-lg leading-relaxed">
            Erleben Sie erstklassiges Handwerk und individuelle Beratung im Herzen von Musterhausen. Max Mustermann und sein Team freuen sich auf Sie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-[#8DA399] hover:bg-[#7A8E85] text-white rounded-full px-8 py-7 text-lg group">
              Termin online buchen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399]/5 rounded-full px-8 py-7 text-lg">
              Unsere Leistungen
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-[#2D3436]">500+ Zufriedene Kunden</p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" 
              alt="Professional Haircut" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#E9D5CA] rounded-full -z-10 mix-blend-multiply opacity-70 blur-2xl" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#B4D3B2] rounded-full -z-10 mix-blend-multiply opacity-50 blur-3xl" />
          
          {/* Floating Card */}
          <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="bg-[#8DA399]/20 p-3 rounded-xl">
                <Scissors className="text-[#8DA399] w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#2D3436]/50 uppercase tracking-wider font-bold">Nächster freier Termin</p>
                <p className="text-lg font-bold text-[#2D3436]">Heute, 16:30 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
