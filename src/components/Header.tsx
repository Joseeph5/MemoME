'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const activePathname = usePathname();

  const routes = [
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      label: 'Account',
      path: '/account',
    },
  ];

  return (
    <header className='flex justify-between items-center border-b border-white/10 py-2'>
      <div>LOGO</div>
      <nav>
        <ul className='flex gap-2 text-xs'>
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  'text-white/70 rounded-sm px-2 py-1 hover:text-white focus:text-white transition',
                  {
                    'bg-black/10 text-white': route.path === activePathname,
                  }
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
