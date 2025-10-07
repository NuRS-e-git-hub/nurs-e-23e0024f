import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Heart, Shield, Cpu, Globe } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "45-65% Automatisering",
    description: "Vervangt en ondersteunt telefonische consulten",
    highlight: "AI-powered"
  },
  {
    icon: Shield,
    title: "Protocollaire Nauwkeurigheid",
    description: "Volgt triage-structuren en richtlijnen exact",
    highlight: "Veilig"
  },
  {
    icon: Heart,
    title: "Empathische Gesprekken",
    description: "Menselijke, warme interactie via voicebot",
    highlight: "Menselijk"
  },
  {
    icon: Cpu,
    title: "HIS Integratie",
    description: "Naadloze koppeling met bestaande systemen",
    highlight: "Geïntegreerd"
  },
  {
    icon: Globe,
    title: "Meertalig",
    description: "Gesprekken in iedere gewenste taal",
    highlight: "Inclusief"
  }
];

export const Solution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">De Oplossing</Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NuRS-e
            </span>
            {" "}Automatiseert Patiëntvolging
          </h2>
          <p className="text-xl text-muted-foreground">
            Slimme LLM-technologie die telefonische patiëntvolging overneemt met behoud van empathie en veiligheid
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <Badge variant="secondary" className="mb-3 text-xs">
                  {feature.highlight}
                </Badge>
                
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
