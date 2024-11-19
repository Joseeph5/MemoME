import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-y-5 justify-center items-center min-h-screen'>
      <Header />

      {children}

      <Footer />
    </div>
  );
}
