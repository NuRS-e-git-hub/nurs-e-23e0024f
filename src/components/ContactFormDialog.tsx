import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(100, "Naam moet korter dan 100 karakters zijn"),
  email: z.string().trim().email("Ongeldig email adres").max(255, "Email moet korter dan 255 karakters zijn"),
  message: z.string().trim().min(1, "Bericht is verplicht").max(1000, "Bericht moet korter dan 1000 karakters zijn"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "contact" | "demo";
}

export const ContactFormDialog = ({ open, onOpenChange, type }: ContactFormDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          ...data,
          type,
        },
      });

      if (error) throw error;

      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo snel mogelijk contact met u op.",
      });

      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of bel ons direct.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {type === "demo" ? "Plan een Demo" : "Neem Contact Op"}
          </DialogTitle>
          <DialogDescription>
            {type === "demo" 
              ? "Vul het formulier in en we nemen contact met u op om een demo in te plannen."
              : "Vul het formulier in en we nemen zo snel mogelijk contact met u op."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Naam</FormLabel>
                  <FormControl>
                    <Input placeholder="Uw naam" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="uw@email.nl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bericht</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={type === "demo" 
                        ? "Vertel ons wanneer u beschikbaar bent voor een demo..."
                        : "Uw bericht..."
                      }
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 justify-end pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Annuleren
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Verstuur
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
