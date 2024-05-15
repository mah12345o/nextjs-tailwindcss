import { Open_Sans } from 'next/font/google'
import "./globals.css";
import { Navbar } from './component';
import { Footer } from './component';
const opensens = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={opensens.className}>
        <Navbar />
        <div className='mx-auto max-w-screen-xl'>{children}</div>
         <Footer />
         </body>
    </html>
  );
}