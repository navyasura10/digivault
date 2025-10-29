import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";
import { useState } from "react";

interface CheckoutFormProps {
  total: number;
  onSubmit?: (email: string) => void;
}

export default function CheckoutForm({ total, onSubmit }: CheckoutFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-display font-bold mb-8" data-testid="text-checkout-title">
        Complete Your Purchase
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-email"
            />
            <p className="text-sm text-muted-foreground">
              Your download link will be sent to this email
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Details
          </h3>
          <div className="bg-muted/50 p-8 rounded-md border-2 border-dashed border-border">
            <p className="text-center text-muted-foreground" data-testid="text-stripe-placeholder">
              Stripe payment form will be integrated here
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-card">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-mono" data-testid="text-subtotal">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Processing Fee</span>
              <span className="font-mono" data-testid="text-processing-fee">$0.00</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="font-mono" data-testid="text-checkout-total">${total.toFixed(2)}</span>
            </div>
          </div>
        </Card>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent hover:bg-accent text-accent-foreground border border-accent-border hover-elevate active-elevate-2"
          data-testid="button-complete-purchase"
        >
          <Lock className="h-5 w-5 mr-2" />
          Complete Purchase - ${total.toFixed(2)}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Secure payment powered by Stripe. Your payment information is encrypted and secure.
        </p>
      </form>
    </div>
  );
}
