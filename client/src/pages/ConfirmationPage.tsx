import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Mail } from "lucide-react";

import studyPlannerImg from "@assets/generated_images/Study_planner_product_mockup_9721f510.png";
import dailyPlannerImg from "@assets/generated_images/Daily_planner_product_mockup_1fa393c4.png";

export default function ConfirmationPage() {
  const purchasedItems = [
    {
      id: "1",
      title: "Ultimate Study Planner 2025",
      image: studyPlannerImg,
      fileType: "PDF"
    },
    {
      id: "2",
      title: "Minimalist Daily Planner",
      image: dailyPlannerImg,
      fileType: "PDF"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartItemCount={0}
        onCartClick={() => console.log('Cart clicked')}
        onCategoryClick={(category) => console.log('Category clicked:', category)}
      />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-chart-3/10 mb-4">
              <CheckCircle2 className="h-8 w-8 text-chart-3" />
            </div>
            <h1 className="text-4xl font-display font-bold mb-2" data-testid="text-confirmation-title">
              Purchase Successful!
            </h1>
            <p className="text-muted-foreground" data-testid="text-confirmation-description">
              Order #ORD-2025-001234
            </p>
          </div>

          <Card className="p-6 mb-6">
            <div className="flex items-start gap-3 mb-6">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Check Your Email</h3>
                <p className="text-sm text-muted-foreground">
                  We've sent download links to your email address. You can also download your products below.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Your Downloads</h3>
              {purchasedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 rounded-md border border-border"
                  data-testid={`download-item-${item.id}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium line-clamp-1" data-testid={`text-download-title-${item.id}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.fileType}</p>
                  </div>
                  <Button
                    size="sm"
                    data-testid={`button-download-${item.id}`}
                    className="hover-elevate active-elevate-2"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="outline" data-testid="button-continue-shopping" className="hover-elevate">
              Continue Shopping
            </Button>
            <Button data-testid="button-view-library" className="hover-elevate active-elevate-2">
              View My Library
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
