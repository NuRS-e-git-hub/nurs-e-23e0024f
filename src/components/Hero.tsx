import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { ContactFormDialog } from "./ContactFormDialog";

export const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-flex items-center gap-3">
                <Stethoscope className="w-14 h-14 lg:w-16 lg:h-16" style={{ color: 'hsl(var(--primary))' }} />
                NuRS-e
              </span>
              <br />
              <span className="text-foreground">
                De Digitale Praktijkondersteuner
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Een innovatief, AI gedreven digitaal patiëntenvolgsysteem. 
              Automatiseert tot wel <span className="font-bold text-accent">75% van alle telefonische consulten</span> in de eerstelijnszorg.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => { console.log("Hero: Neem Contact Op clicked"); setIsContactOpen(true); }}
              >
                Neem Contact Op
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsContactOpen(true)}
              >
                Meer Informatie
              </Button>
            </div>

            <ContactFormDialog 
              open={isContactOpen} 
              onOpenChange={setIsContactOpen}
              type="contact"
            />

            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <a href="tel:+31610797527" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  +31 (0)6 10 79 75 27
                </a>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Healthcare professional" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
