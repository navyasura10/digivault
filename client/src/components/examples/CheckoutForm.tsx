import CheckoutForm from '../CheckoutForm';

export default function CheckoutFormExample() {
  return (
    <CheckoutForm
      total={34.98}
      onSubmit={(email) => console.log('Purchase submitted with email:', email)}
    />
  );
}
