import ProductModal from '../ProductModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import productImage from '@assets/generated_images/Study_planner_product_mockup_9721f510.png';

export default function ProductModalExample() {
  const [open, setOpen] = useState(false);

  const sampleProduct = {
    id: "1",
    title: "Ultimate Study Planner 2025",
    creator: "Sarah Johnson",
    price: 19.99,
    image: productImage,
    rating: 4.8,
    sales: 342,
    fileType: "PDF",
    description: "Transform your study routine with this comprehensive planner designed for students and lifelong learners. Features weekly spreads, goal tracking, and habit monitoring to keep you organized and motivated throughout the year.",
    includes: [
      "52-week undated planner (printable PDF)",
      "Monthly goal-setting worksheets",
      "Daily study schedule templates",
      "Habit tracker pages",
      "Subject-specific note sections",
      "Commercial license for resale"
    ]
  };

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Product Modal</Button>
      <ProductModal
        open={open}
        onOpenChange={setOpen}
        product={sampleProduct}
        onAddToCart={(id) => console.log('Add to cart:', id)}
      />
    </div>
  );
}
