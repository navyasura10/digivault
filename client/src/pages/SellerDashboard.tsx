import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Upload, DollarSign, Download, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import studyPlannerImg from "@assets/generated_images/Study_planner_product_mockup_9721f510.png";
import dailyPlannerImg from "@assets/generated_images/Daily_planner_product_mockup_1fa393c4.png";

export default function SellerDashboard() {
  const { toast } = useToast();
  const { isAuthenticated, isLoading } = useAuth();

  // Redirect to login if not authenticated - based on Replit Auth blueprint
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "Please log in to access the seller dashboard.",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Ultimate Study Planner 2025",
      price: 19.99,
      image: studyPlannerImg,
      category: "Study Planners",
      fileType: "PDF",
      sales: 342,
      revenue: 6839.58,
      status: "active"
    },
    {
      id: "2",
      title: "Minimalist Daily Planner",
      price: 14.99,
      image: dailyPlannerImg,
      category: "Daily Planners",
      fileType: "PDF",
      sales: 521,
      revenue: 7809.79,
      status: "active"
    }
  ]);

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    fileType: ""
  });

  const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0);
  const totalSales = products.reduce((sum, p) => sum + p.sales, 0);

  const handleUploadProduct = () => {
    console.log('Uploading product:', newProduct);
    setUploadModalOpen(false);
    setNewProduct({
      title: "",
      description: "",
      price: "",
      category: "",
      fileType: ""
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    console.log('Deleted product:', id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartItemCount={0}
        onCartClick={() => console.log('Cart clicked')}
        onCategoryClick={(category) => console.log('Category clicked:', category)}
      />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2" data-testid="text-dashboard-title">
                Seller Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your digital products and track sales
              </p>
            </div>

            <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent text-accent-foreground border border-accent-border hover-elevate active-elevate-2"
                  data-testid="button-upload-product"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Upload New Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl" data-testid="modal-upload-product">
                <DialogHeader>
                  <DialogTitle>Upload New Product</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="title">Product Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Ultimate Study Planner 2025"
                      value={newProduct.title}
                      onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
                      data-testid="input-product-title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your product..."
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                      data-testid="input-product-description"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Price (USD)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        placeholder="19.99"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        data-testid="input-product-price"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select 
                        value={newProduct.category}
                        onValueChange={(value) => setNewProduct({...newProduct, category: value})}
                      >
                        <SelectTrigger data-testid="select-product-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="study-planners">Study Planners</SelectItem>
                          <SelectItem value="daily-planners">Daily Planners</SelectItem>
                          <SelectItem value="ui-templates">UI/UX Templates</SelectItem>
                          <SelectItem value="research-papers">Research Papers</SelectItem>
                          <SelectItem value="design-assets">Design Assets</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="file">Product File</Label>
                    <div className="border-2 border-dashed border-border rounded-md p-8 text-center hover-elevate cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, AI, Figma, DOCX, PNG (max 50MB)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setUploadModalOpen(false)}
                      data-testid="button-cancel-upload"
                      className="hover-elevate"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleUploadProduct}
                      data-testid="button-confirm-upload"
                      className="hover-elevate active-elevate-2"
                    >
                      Upload Product
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-chart-3/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-chart-3" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                  <p className="text-2xl font-mono font-bold" data-testid="text-total-revenue">
                    ${totalRevenue.toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Sales</p>
                  <p className="text-2xl font-mono font-bold" data-testid="text-total-sales">
                    {totalSales}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Products</p>
                  <p className="text-2xl font-mono font-bold" data-testid="text-active-products">
                    {products.length}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-display font-semibold mb-6">Your Products</h2>
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-4 rounded-md border border-border hover-elevate"
                  data-testid={`product-row-${product.id}`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1" data-testid={`text-product-title-${product.id}`}>
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{product.category}</span>
                      <span>•</span>
                      <Badge variant="secondary" className="text-xs">
                        {product.fileType}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-semibold mb-1" data-testid={`text-product-price-${product.id}`}>
                      ${product.price}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-product-sales-${product.id}`}>
                      {product.sales} sales
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-semibold mb-1" data-testid={`text-product-revenue-${product.id}`}>
                      ${product.revenue.toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground">revenue</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      data-testid={`button-edit-${product.id}`}
                      className="hover-elevate"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteProduct(product.id)}
                      data-testid={`button-delete-${product.id}`}
                      className="hover-elevate"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
