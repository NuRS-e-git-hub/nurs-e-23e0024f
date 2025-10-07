export const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NuRS-e
            </h3>
            <p className="text-sm text-muted-foreground">Nurture Response Safe and Export</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>Recordatio.AI</span>
            <span>·</span>
            <span>Een samenwerking tussen Achmea & MNK</span>
          </div>

          <div className="text-xs text-muted-foreground pt-4 border-t border-border/30">
            <p>© {new Date().getFullYear()} NuRS-e. Making Every Conversation Count.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
