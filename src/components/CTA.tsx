import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { ContactFormDialog } from "./ContactFormDialog";

export const CTA = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-primary/20 shadow-[var(--shadow-elegant)]">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Klaar om NuRS-e in Uw Praktijk te Implementeren?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ontdek hoe NuRS-e uw praktijk kan helpen met geautomatiseerde patiëntvolging
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => setIsDemoOpen(true)}
              >
                Plan een Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>

            <ContactFormDialog 
              open={isDemoOpen} 
              onOpenChange={setIsDemoOpen}
              type="demo"
            />

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-6">Contact opnemen</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="tel:+31202262244" 
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Telefoon</p>
                    <p className="font-semibold">+31 (0)20 226 2244</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Contact persoon</p>
                    <p className="font-semibold">Tias Hazebroek</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xs text-muted-foreground mt-2">
                "Making Every Conversation Count"
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
