import Branding from '@/components/Branding';
import SearchForm from '@/components/SearchForm';
import SnippetButton from '@/components/SnippetButton';
import SnippetDetails from '@/components/SnippetDetails';
import SnippetList from '@/components/SnippetList';
import Stats from '@/components/Stats';
import React from 'react';

export default function Page() {
  return (
    <main>
      <div className='flex items-center justify-between text-white py-8'>
        <Branding />
        <Stats />
      </div>
      <div className='grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]'>
        <div className='md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1'>
          <SearchForm />
        </div>
        <div className='relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1'>
          <SnippetList />
          <div className='absolute bottom-4 right-4'>
            <SnippetButton />
          </div>
        </div>
        <div className='md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full'>
          <SnippetDetails />
        </div>
      </div>
    </main>
  );
}
