import Header from "@/components/Header";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartItemCount={2}
        onCartClick={() => console.log('Cart clicked')}
        onCategoryClick={(category) => console.log('Category clicked:', category)}
      />

      <main className="flex-1 py-12">
        <CheckoutForm
          total={34.98}
          onSubmit={(email) => console.log('Purchase submitted with email:', email)}
        />
      </main>

      <Footer />
    </div>
  );
}
