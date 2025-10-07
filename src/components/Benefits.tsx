import { Card } from "@/components/ui/card";
import { Clock, Award, Users, Smile, Zap, Globe } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Tot wel 75% Tijdsbesparing",
    description: "5-10 uur per week minder telefonische consultaties",
    stat: "75%"
  },
  {
    icon: Award,
    title: "Consistente Kwaliteit",
    description: "Protocolgetrouwe opvolging in iedere taal",
    stat: "100%"
  },
  {
    icon: Users,
    title: "Meer Tijd voor Complexe Zorg",
    description: "POH's kunnen zich richten op moeilijke gevallen",
    stat: "+"
  },
  {
    icon: Zap,
    title: "Direct Inzetbaar",
    description: "Geen lange implementatietijd nodig",
    stat: "0"
  },
  {
    icon: Smile,
    title: "Verbeterde Tevredenheid",
    description: "Snelle bereikbaarheid in- en outbound",
    stat: "↑"
  },
  {
    icon: Globe,
    title: "Verminderde Werkdruk",
    description: "Lagere werkdruk bij praktijkondersteuners",
    stat: "↓"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Voordelen voor Huisartsenpraktijk</h2>
          <p className="text-xl text-muted-foreground">
            Concrete resultaten voor uw praktijk
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 -translate-y-4 translate-x-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.stat}
              </div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 shadow-md">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
