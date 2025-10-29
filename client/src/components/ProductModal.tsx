import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Download, ShoppingCart, CheckCircle2 } from "lucide-react";

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    id: string;
    title: string;
    creator: string;
    price: number;
    image: string;
    rating: number;
    sales: number;
    fileType: string;
    description: string;
    includes: string[];
  } | null;
  onAddToCart?: (id: string) => void;
}

export default function ProductModal({ open, onOpenChange, product, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-product-detail">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display" data-testid="text-modal-title">
            {product.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full rounded-md"
              data-testid="img-modal-product"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-2" data-testid="text-modal-creator">
                by {product.creator}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium" data-testid="text-modal-rating">{product.rating.toFixed(1)}</span>
                </div>
                <span className="text-muted-foreground" data-testid="text-modal-sales">
                  <Download className="h-4 w-4 inline mr-1" />
                  {product.sales} sales
                </span>
                <Badge data-testid="badge-modal-filetype">{product.fileType}</Badge>
              </div>
            </div>

            <div className="bg-card p-6 rounded-md border border-card-border">
              <div className="text-3xl font-mono font-bold mb-4" data-testid="text-modal-price">
                ${product.price.toFixed(2)}
              </div>
              <Button 
                size="lg"
                className="w-full mb-3 bg-accent hover:bg-accent text-accent-foreground border border-accent-border hover-elevate active-elevate-2"
                onClick={() => onAddToCart?.(product.id)}
                data-testid="button-modal-add-to-cart"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Instant download after purchase
              </p>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1" data-testid="tab-description">
                  Description
                </TabsTrigger>
                <TabsTrigger value="includes" className="flex-1" data-testid="tab-includes">
                  What's Included
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <p className="text-sm leading-relaxed" data-testid="text-modal-description">
                  {product.description}
                </p>
              </TabsContent>
              <TabsContent value="includes" className="mt-4">
                <ul className="space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm" data-testid={`text-includes-${index}`}>
                      <CheckCircle2 className="h-5 w-5 text-chart-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
