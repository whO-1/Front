
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";



export const metadata = {
  title: "EventPlanner",
  description: "Application for finding events",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
        
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            <link rel="icon" href="/favicon.ico"></link>
            <meta charSet="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta content="" name="description"/>
            <meta content="" name="keywords"/>
            <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
            <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>

        </head>
        <body >
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
              <i className="bi bi-arrow-up-short"></i>
            </a>
            
            
            {children} 
            
            <Script src="/scripts/main.js" strategy="afterInteractive" />
            <Script src="assets/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" /> 
            <Script src="assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        </body>
    </html>
  );
}
