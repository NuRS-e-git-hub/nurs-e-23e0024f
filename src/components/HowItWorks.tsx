import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, Database, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Patiënt wordt gebeld",
    description: "NuRS-e belt de patiënt voor routinecontrole of de patiënt kan zelf bellen",
    step: "01"
  },
  {
    icon: MessageSquare,
    title: "Gestructureerd Gesprek",
    description: "Volgt triageprotocollen per zorgpad in iedere taal",
    step: "02"
  },
  {
    icon: Database,
    title: "Directe Registratie",
    description: "Gespreksuitkomsten worden automatisch geregistreerd in HIS/HINQ/Edifact",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Triage & Communicatie",
    description: "Resultaten worden direct gecommuniceerd naar POH of huisarts voor vervolgactie",
    step: "04"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hoe Werkt Het?</h2>
          <p className="text-xl text-muted-foreground">
            Slimme telefonische patiëntinteractie in 4 stappen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%-2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 z-0" />
              )}
              
              <Card className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
