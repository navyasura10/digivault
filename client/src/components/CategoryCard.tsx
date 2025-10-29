import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  productCount: number;
  onClick?: () => void;
}

export default function CategoryCard({ title, icon: Icon, productCount, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all"
      onClick={onClick}
      data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg mb-1" data-testid={`text-category-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid={`text-category-count-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {productCount} products
          </p>
        </div>
      </div>
    </Card>
  );
}
