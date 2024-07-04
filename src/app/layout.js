import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import CustomNavbar from "@/components/Navbar/CustomNavbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Front App",
  description: "Frontend application ",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
          <head>
             
          </head>
      <body className={roboto.className}>
          <header id="header"  >
            <CustomNavbar />
          </header>
          {children}
      </body>
    </html>
  );
}
