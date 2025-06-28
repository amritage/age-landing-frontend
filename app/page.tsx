-export const metadata = {
-  title: 'Embroidered Sarees | Demo',
-  description: 'Placeholder page for embroidered sarees.'
-};
+export const metadata = {
+  title: 'Premium Fabrics for Businesses | FabricCo',
+  description:
+    'Wholesale fabric supplier offering high quality textiles for global businesses. Contact us for quotes.',
+};
+
+export const config = {
+  unstable_runtimeJS: false,
+};
 
-export default function Home() {
-  return (
-    <main className="min-h-screen p-8 max-w-3xl mx-auto">
-      <h1 className="text-3xl font-bold mb-4">Embroidered Sarees</h1>
-      <p className="mb-6">
-        This demo page was inspired by dhananjaycreation.com but the original
-        content could not be retrieved.
-      </p>
-      <img src="/saree.avif" alt="Sample embroidered saree" width="400" height="400" className="mb-6" />
-      <p>Contact us for high-quality embroidered sarees.</p>
-    </main>
-  );
+export default function Home() {
+  return (
+    <main className="min-h-screen font-sans">
+      <section className="bg-[url('/saree.avif')] bg-cover bg-center text-white">
+        <div className="bg-black/60 py-24 px-4 text-center">
+          <h1 className="text-4xl font-bold mb-4">
+            Premium Fabrics for B2B Clients
+          </h1>
+          <p className="mb-6 max-w-2xl mx-auto">
+            Supplying embroidered and plain textiles in bulk for manufacturers
+            and retailers worldwide.
+          </p>
+          <a
+            href="#contact"
+            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded"
+          >
+            Request Quote
+          </a>
+        </div>
+      </section>
+
+      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
+        <h2 className="text-2xl font-semibold mb-8">Why Choose FabricCo?</h2>
+        <div className="grid gap-8 md:grid-cols-3">
+          <div className="flex flex-col items-center">
+            <img src="/globe.svg" alt="Global shipping" className="w-12 h-12 mb-4" />
+            <h3 className="font-semibold mb-2">Global Shipping</h3>
+            <p>Reliable delivery to more than 30 countries.</p>
+          </div>
+          <div className="flex flex-col items-center">
+            <img src="/file.svg" alt="Quality certificates" className="w-12 h-12 mb-4" />
+            <h3 className="font-semibold mb-2">Quality Certified</h3>
+            <p>All fabrics pass stringent quality checks.</p>
+          </div>
+          <div className="flex flex-col items-center">
+            <img src="/window.svg" alt="Custom orders" className="w-12 h-12 mb-4" />
+            <h3 className="font-semibold mb-2">Custom Orders</h3>
+            <p>Tailored designs and patterns to fit your brand.</p>
+          </div>
+        </div>
+      </section>
+
+      <section id="contact" className="bg-gray-100 py-16 px-4 text-center">
+        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
+        <p className="mb-6">Reach out for quotes, catalogs or any business inquiries.</p>
+        <p className="font-semibold">
+          Email:{' '}
+          <a href="mailto:sales@fabricco.example" className="text-blue-600 underline">
+            sales@fabricco.example
+          </a>
+        </p>
+        <p className="font-semibold">
+          Phone:{' '}
+          <a href="tel:+1234567890" className="text-blue-600 underline">
+            +1 234 567 890
+          </a>
+        </p>
+      </section>
+    </main>
+  );
 }
