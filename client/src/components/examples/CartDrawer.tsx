import CartDrawer from '../CartDrawer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import productImage from '@assets/generated_images/Study_planner_product_mockup_9721f510.png';

export default function CartDrawerExample() {
  const [open, setOpen] = useState(false);

  const sampleItems = [
    {
      id: "1",
      title: "Ultimate Study Planner 2025",
      price: 19.99,
      image: productImage,
      fileType: "PDF"
    },
    {
      id: "2",
      title: "Minimalist Daily Planner",
      price: 14.99,
      image: productImage,
      fileType: "PDF"
    }
  ];

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Cart</Button>
      <CartDrawer
        open={open}
        onOpenChange={setOpen}
        items={sampleItems}
        onRemoveItem={(id) => console.log('Remove item:', id)}
        onCheckout={() => console.log('Checkout clicked')}
      />
    </div>
  );
}
