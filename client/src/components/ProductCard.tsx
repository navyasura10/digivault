import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  creator: string;
  price: number;
  image: string;
  rating: number;
  sales: number;
  fileType: string;
  onAddToCart?: (id: string) => void;
  onClick?: (id: string) => void;
}

export default function ProductCard({
  id,
  title,
  creator,
  price,
  image,
  rating,
  sales,
  fileType,
  onAddToCart,
  onClick
}: ProductCardProps) {
  return (
    <Card 
      className="overflow-hidden group cursor-pointer hover-elevate transition-all"
      onClick={() => onClick?.(id)}
      data-testid={`card-product-${id}`}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          data-testid={`img-product-${id}`}
        />
        <Badge className="absolute top-3 right-3 text-xs" data-testid={`badge-filetype-${id}`}>
          {fileType}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2" data-testid={`text-product-title-${id}`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3" data-testid={`text-creator-${id}`}>
          by {creator}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium" data-testid={`text-rating-${id}`}>{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-muted-foreground" data-testid={`text-sales-${id}`}>
            <Download className="h-3 w-3 inline mr-1" />
            {sales} sales
          </span>
        </div>
        
        <div className="flex items-center justify-between gap-2">
          <span className="text-2xl font-mono font-semibold" data-testid={`text-price-${id}`}>
            ${price.toFixed(2)}
          </span>
          <Button 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(id);
            }}
            data-testid={`button-add-to-cart-${id}`}
            className="hover-elevate active-elevate-2"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
