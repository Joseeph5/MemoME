import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10'>
      <Image
        src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Preview of PetSoft'
        width={519}
        height={472}
      />
      <div>
        <h1 className='text-5xl font-semibold my-6 max-w-[500px]'>
          Manage your <span className='font-extrabold'>code snippets</span> with
          ease
        </h1>
        <p className='text-2xl font-medium max-w-[600px]'>
          Use MemoMe to practice coding!
        </p>
        <div className='mt-10 space-x-3'>ssss</div>
      </div>
    </main>
  );
}
