import Image from 'next/image';
import './globals.css';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
export default function Home() {
  return (
    <>
      {/* <!-- Header Withs Sidebar --> */}
      <Header />
      {/* <!-- Header With Sidebar Ends --> */}

      <div className='relative px-4 pt-14 sm:px-6 lg:px-8'>
        <main className='flex-auto py-12'>
          {/* <!-- Green Top Overlay --> */}
          <div className='absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden'>
            <div className='absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100'></div>
            </div>
          </div>
          {/* <!-- Green Top Overlay End--> */}

          <Landing/>
        </main>

        <footer className='mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl'>
          <div className='relative h-8'></div>
          <div className='flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row'>
            <p className='text-xs text-zinc-600 dark:text-zinc-400'>
              © Copyright 2023. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
