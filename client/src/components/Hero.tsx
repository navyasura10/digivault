import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Creative_workspace_hero_image_de28f0df.png";
import { useLocation } from "wouter";

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const [, setLocation] = useLocation();

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
      
      <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6" data-testid="text-hero-title">
            Discover Premium Digital Products for Creators
          </h1>
          <p className="text-xl text-white/90 mb-8" data-testid="text-hero-description">
            Study planners, daily organizers, UI/UX templates, and research papers - all ready for instant download
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg"
              onClick={() => {
                setLocation('/products');
                onExploreClick?.();
              }}
              data-testid="button-explore-products"
              className="bg-accent hover:bg-accent text-accent-foreground border border-accent-border hover-elevate active-elevate-2"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setLocation('/seller')}
              data-testid="button-become-seller"
              className="bg-background/20 backdrop-blur-sm text-white border-white/30 hover-elevate active-elevate-2"
            >
              Become a Seller
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
