import { Card } from "@/components/ui/card";
import { Brain, GitBranch, Shield, Workflow } from "lucide-react";

const techFeatures = [
  {
    icon: Brain,
    title: "Large Language Model (LLM)",
    description: "Medisch gespecialiseerde AI voor natuurlijke gesprekken"
  },
  {
    icon: GitBranch,
    title: "Flowbot Structuur",
    description: "Gestructureerde gesprekssturing volgens protocollen"
  },
  {
    icon: Shield,
    title: "Geavanceerde Guardrails",
    description: "Veiligheid en protocollaire betrouwbaarheid"
  },
  {
    icon: Workflow,
    title: "HIS Integratie",
    description: "Naadloze integratie met bestaande werkprocessen"
  }
];

export const Technology = () => {
  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">De Technologie</h2>
          <p className="text-xl text-muted-foreground">
            Krachtige combinatie van AI en medische expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {techFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
