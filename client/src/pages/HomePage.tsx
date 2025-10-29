import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, Palette, FileText, Layers, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

import studyPlannerImg from "@assets/generated_images/Study_planner_product_mockup_9721f510.png";
import dailyPlannerImg from "@assets/generated_images/Daily_planner_product_mockup_1fa393c4.png";
import uiDesignImg from "@assets/generated_images/UI/UX_design_template_mockup_1066cffd.png";
import researchPaperImg from "@assets/generated_images/Research_paper_product_mockup_d68dd90f.png";
import designAssetsImg from "@assets/generated_images/Design_assets_product_mockup_e66c3ff8.png";

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const categories = [
    { title: "Study Planners", icon: BookOpen, productCount: 24 },
    { title: "Daily Planners", icon: Calendar, productCount: 18 },
    { title: "UI/UX Templates", icon: Palette, productCount: 32 },
    { title: "Research Papers", icon: FileText, productCount: 15 },
    { title: "Design Assets", icon: Layers, productCount: 28 },
  ];

  const trendingProducts = [
    {
      id: "1",
      title: "Ultimate Study Planner 2025",
      creator: "Sarah Johnson",
      price: 19.99,
      image: studyPlannerImg,
      rating: 4.8,
      sales: 342,
      fileType: "PDF",
      description: "Transform your study routine with this comprehensive planner designed for students and lifelong learners. Features weekly spreads, goal tracking, and habit monitoring to keep you organized and motivated throughout the year.",
      includes: [
        "52-week undated planner (printable PDF)",
        "Monthly goal-setting worksheets",
        "Daily study schedule templates",
        "Habit tracker pages",
        "Subject-specific note sections"
      ]
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
      description: "Clean, distraction-free daily planning pages that help you focus on what matters. Perfect for busy professionals who want to stay organized without the clutter.",
      includes: [
        "365 daily pages (undated)",
        "Hourly schedule layouts",
        "Priority task sections",
        "Notes and reflections area",
        "Printable A4 and Letter sizes"
      ]
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
      description: "Complete dashboard UI kit with 50+ screens and 200+ components. Built with modern design principles and ready for your next project.",
      includes: [
        "50+ screen templates",
        "200+ UI components",
        "Dark and light mode versions",
        "Responsive layouts",
        "Free updates for 12 months"
      ]
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
      description: "Professional research paper template following APA 7th edition guidelines. Save hours of formatting time and focus on your research.",
      includes: [
        "APA 7th edition formatting",
        "Title page and abstract templates",
        "Citation and reference examples",
        "Table and figure formatting",
        "Appendix templates"
      ]
    },
    {
      id: "5",
      title: "Creative Icon Pack - 500 Icons",
      creator: "Icon Masters",
      price: 24.99,
      image: designAssetsImg,
      rating: 4.9,
      sales: 456,
      fileType: "AI, PNG",
      description: "500 carefully crafted icons perfect for any design project. Available in multiple formats and fully customizable.",
      includes: [
        "500 unique icons",
        "AI, SVG, and PNG formats",
        "Fully editable vectors",
        "Multiple style variations",
        "Commercial license included"
      ]
    },
    {
      id: "6",
      title: "Weekly Study Schedule Planner",
      creator: "Sarah Johnson",
      price: 9.99,
      image: studyPlannerImg,
      rating: 4.5,
      sales: 623,
      fileType: "PDF",
      description: "Focused weekly planner for students who want to maximize their study time. Includes time-blocking and subject rotation features.",
      includes: [
        "52 weekly spreads",
        "Time-blocking templates",
        "Subject rotation planner",
        "Study goals tracker",
        "Exam preparation sections"
      ]
    }
  ];

  const handleAddToCart = (productId: string) => {
    const product = trendingProducts.find(p => p.id === productId);
    if (product && !cartItems.find(item => item.id === productId)) {
      setCartItems([...cartItems, product]);
      console.log('Added to cart:', product.title);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    console.log('Removed from cart:', productId);
  };

  const handleProductClick = (productId: string) => {
    const product = trendingProducts.find(p => p.id === productId);
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
        <Hero onExploreClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} />

        <section className="container mx-auto px-4 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2" data-testid="text-categories-title">
                Browse by Category
              </h2>
              <p className="text-muted-foreground">
                Find the perfect digital product for your needs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                productCount={category.productCount}
                onClick={() => console.log('Category clicked:', category.title)}
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-6 w-6 text-accent" />
                <h2 className="text-3xl lg:text-4xl font-display font-bold" data-testid="text-trending-title">
                  Trending Products
                </h2>
              </div>
              <p className="text-muted-foreground">
                Most popular digital products this week
              </p>
            </div>
            <Button variant="outline" data-testid="button-view-all" className="hover-elevate">
              View All Products
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((product) => (
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
        </section>

        <section className="bg-card py-16 border-y">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-products">
                  10,000+
                </div>
                <p className="text-muted-foreground">Digital Products</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-creators">
                  2,500+
                </div>
                <p className="text-muted-foreground">Happy Creators</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-sales">
                  50,000+
                </div>
                <p className="text-muted-foreground">Products Sold</p>
              </div>
            </div>
          </div>
        </section>
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
