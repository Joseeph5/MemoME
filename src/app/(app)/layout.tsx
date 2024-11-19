import BackgroundPattern from '@/components/BackgroundPattern';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundPattern />
      <div className='flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
