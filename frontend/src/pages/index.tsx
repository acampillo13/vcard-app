// pages/index.tsx
import VCardForm from "../components/VCardForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800">Crea tu vCard</h1>
      <p className="text-gray-600 mt-2">Genera tu vCard con código QR y compártela fácilmente.</p>
      <VCardForm />
    </main>
  );
}
