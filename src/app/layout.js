import { Providers } from "./providers";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata = {
  title: "CCXI Demo",
  description: "demos for ccxi",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>

        <Providers>
          <Nav />
          <div className="container mx-auto p-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
