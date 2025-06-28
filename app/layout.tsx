 import type { Metadata } from "next";
 import "./globals.css";
 
-export const metadata: Metadata = {
-  title: "Embroidered Sarees Demo",
-  description: "Static page without client-side JavaScript",
-};
+export const metadata: Metadata = {
+  title: "Embroidered Sarees Demo",
+  description: "Static page without client-side JavaScript",
+};
+
+export const config = {
+  unstable_runtimeJS: false,
+};
 
 export default function RootLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   return (
     <html lang="en">
       <body className="antialiased font-sans">
         {children}
       </body>
     </html>
   );
 }
