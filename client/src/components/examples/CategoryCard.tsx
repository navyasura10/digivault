import CategoryCard from '../CategoryCard';
import { BookOpen } from 'lucide-react';

export default function CategoryCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CategoryCard 
        title="Study Planners"
        icon={BookOpen}
        productCount={24}
        onClick={() => console.log('Category clicked')}
      />
    </div>
  );
}
