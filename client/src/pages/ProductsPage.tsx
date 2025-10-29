import { useState } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import studyPlannerImg from "@assets/generated_images/Study_planner_product_mockup_9721f510.png";
import dailyPlannerImg from "@assets/generated_images/Daily_planner_product_mockup_1fa393c4.png";
import uiDesignImg from "@assets/generated_images/UI/UX_design_template_mockup_1066cffd.png";
import researchPaperImg from "@assets/generated_images/Research_paper_product_mockup_d68dd90f.png";

export default function ProductsPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const products = [
    {
      id: "1",
      title: "Ultimate Study Planner 2025",
      creator: "Sarah Johnson",
      price: 19.99,
      image: studyPlannerImg,
      rating: 4.8,
      sales: 342,
      fileType: "PDF",
      description: "Transform your study routine with this comprehensive planner.",
      includes: ["52-week planner", "Goal worksheets", "Habit trackers"]
    },
    {
      id: "2",
      title: "Minimalist Daily Planner",
      creator: "Alex Chen",
      price: 14.99,
      image: dailyPlannerImg,
      rating: 4.9,
      sales: 521,
      fileType: "PDF",
      description: "Clean daily planning pages for busy professionals.",
      includes: ["365 daily pages", "Hourly schedules", "Priority sections"]
    },
    {
      id: "3",
      title: "Modern Dashboard UI Kit",
      creator: "Design Studio Pro",
      price: 49.99,
      image: uiDesignImg,
      rating: 4.7,
      sales: 198,
      fileType: "Figma",
      description: "Complete dashboard UI kit with 50+ screens.",
      includes: ["50+ screens", "200+ components", "Dark mode"]
    },
    {
      id: "4",
      title: "Academic Research Template",
      creator: "Dr. Emily Roberts",
      price: 12.99,
      image: researchPaperImg,
      rating: 4.6,
      sales: 287,
      fileType: "DOCX",
      description: "Professional research paper template with APA formatting.",
      includes: ["APA formatting", "Citation templates", "Reference examples"]
    }
  ];

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product && !cartItems.find(item => item.id === productId)) {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleProductClick = (productId: string) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setProductModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartItemCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
        onCategoryClick={(category) => console.log('Category clicked:', category)}
      />

      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold mb-2" data-testid="text-products-title">
              All Products
            </h1>
            <p className="text-muted-foreground">
              Discover {products.length} premium digital products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <FilterSidebar onFilterChange={(filters) => console.log('Filters:', filters)} />
            </aside>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <p className="text-sm text-muted-foreground" data-testid="text-product-count">
                  Showing {products.length} products
                </p>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48" data-testid="select-sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    creator={product.creator}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    sales={product.sales}
                    fileType={product.fileType}
                    onAddToCart={handleAddToCart}
                    onClick={handleProductClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ProductModal
        open={productModalOpen}
        onOpenChange={setProductModalOpen}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setCartOpen(false);
          console.log('Proceeding to checkout');
        }}
      />
    </div>
  );
}
