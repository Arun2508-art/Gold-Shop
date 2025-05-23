import Footer from '@/components/Footer';
import HeaderMarquee from '@/components/HeaderMarquee';
import Navbar from '@/components/Navbar';
import StickyNavbar from '@/components/StickyNavbar';

export default function ClientLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderMarquee />
      <Navbar />
      <StickyNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
