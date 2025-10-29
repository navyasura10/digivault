import Header from '../Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header 
        cartItemCount={3}
        onCartClick={() => console.log('Cart clicked')}
        onCategoryClick={(category) => console.log('Category clicked:', category)}
      />
    </ThemeProvider>
  );
}
