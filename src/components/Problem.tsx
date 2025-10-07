import { Card } from "@/components/ui/card";
import { AlertCircle, Clock, Users, TrendingDown } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Tijdsdruk",
    description: "POH's besteden veel tijd aan telefonische patiëntcontroles"
  },
  {
    icon: TrendingDown,
    title: "Administratieve Last",
    description: "Groeiende administratieve druk door chronische patiënten"
  },
  {
    icon: Users,
    title: "Personeelstekort",
    description: "Tekort aan personeel in de eerstelijnszorg"
  },
  {
    icon: AlertCircle,
    title: "Kwaliteitsvariatie",
    description: "Kwaliteit van patiëntvolging fluctueert door tijdsdruk"
  }
];

export const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">De Uitdaging in de Eerstelijnszorg</h2>
          <p className="text-xl text-muted-foreground">
            De druk op huisartsenpraktijken neemt jaarlijks toe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
              <p className="text-muted-foreground text-sm">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
