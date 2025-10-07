import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Wind, Droplet, Heart, Cigarette, MoreHorizontal } from "lucide-react";

const carePaths = [
  {
    icon: Activity,
    title: "Diabetes Controle",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Cigarette,
    title: "Stoppen met Roken",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Droplet,
    title: "Bloeddruk Monitoring",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Wind,
    title: "Astma/COPD Controle",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Heart,
    title: "Cholesterol Trajecten",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: MoreHorizontal,
    title: "Meer op Termijn",
    color: "from-gray-500 to-gray-600"
  }
];

export const CarePaths = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Geschikte Zorgpaden</Badge>
          <h2 className="text-4xl font-bold mb-4">Waar NuRS-e Direct Inzetbaar Is</h2>
          <p className="text-xl text-muted-foreground">
            Ondersteunt diverse chronische zorg- en ketenzorgtrajecten met protocollaire nauwkeurigheid
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {carePaths.map((path, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <path.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{path.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
