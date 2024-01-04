import Link from 'next/link';
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';
import { BookCopy } from 'lucide-react';

const headingFont = localFont({
  src: '../public/fonts/font.woff2',
});

export const Logo = () => {
  return (
    <Link href='/'>
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <BookCopy className='h-[30px] w-[30px]' />
        <p className={cn('text-lg text-neutral-700', headingFont.className)}>
          Place4Notes
        </p>
      </div>
    </Link>
  );
};
