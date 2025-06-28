export const metadata = {
  title: 'Embroidered Sarees | Demo',
  description: 'Placeholder page for embroidered sarees.'
};

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Embroidered Sarees</h1>
      <p className="mb-6">
        This demo page was inspired by dhananjaycreation.com but the original
        content could not be retrieved.
      </p>
      <img src="/saree.avif" alt="Sample embroidered saree" width="400" height="400" className="mb-6" />
      <p>Contact us for high-quality embroidered sarees.</p>
    </main>
  );
}