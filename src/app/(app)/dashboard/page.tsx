import Branding from '@/components/Branding';
import Stats from '@/components/Stats';
import React from 'react';

export default function Page() {
  return (
    <main>
      <div className='flex items-center justify-between text-white py-8'>
        <Branding />
        <Stats />
      </div>
    </main>
  );
}
