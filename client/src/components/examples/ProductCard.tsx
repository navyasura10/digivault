import ProductCard from '../ProductCard';
import productImage from '@assets/generated_images/Study_planner_product_mockup_9721f510.png';

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        id="1"
        title="Ultimate Study Planner 2025"
        creator="Sarah Johnson"
        price={19.99}
        image={productImage}
        rating={4.8}
        sales={342}
        fileType="PDF"
        onAddToCart={(id) => console.log('Add to cart:', id)}
        onClick={(id) => console.log('Product clicked:', id)}
      />
    </div>
  );
}
