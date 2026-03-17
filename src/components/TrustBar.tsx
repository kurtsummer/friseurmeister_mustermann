import { ShieldCheck, UserCheck, Cpu, MapPin } from "lucide-react";

export const TrustBar = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#7FA38A]" />,
      text: "Für Klein- und Mittelunternehmen",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#7FA38A]" />,
      text: "Persönliche Begleitung",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#7FA38A]" />,
      text: "Moderne KI-Lösungen",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#7FA38A]" />,
      text: "Aus der Steiermark für Unternehmen mit Zukunft",
    },
  ];

  return (
    <section className="bg-[#EEF2F7] py-8 border-y border-slate-200/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-6 gap-x-8">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                {point.icon}
              </div>
              <span className="text-sm md:text-base font-semibold text-[#1F2A44] leading-tight">
                {point.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
