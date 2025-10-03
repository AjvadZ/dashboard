import AcmeLogo from '@/app/ui/acme-logo'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { lusitana } from '@/app/ui/fonts'

export default function Page(){
    return(
    <main className='p-6 flex flex-col min-h-screen'>

        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
            <AcmeLogo/>
        </div>

        <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>

            <div className='bg-gray-50 rounded-lg flex flex-col justify-center py-10 px-6 md:w-2/5 md:px-20 gap-6'>

                <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    <strong>Welcome to Acme.</strong> This is the example for the {''}
                    <a href="https://nextjs.org/learn/" className='text-blue-500'>
                        Next.js Learn Course
                    </a>
                    , brought to you by Vercel.
                </p>

                <Link
                    href='/login' 
                    className='flex gap-4 items-center py-3 px-6 bg-blue-500 self-start rounded-lg text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'
                >
                    <span>Log in</span> <ArrowRightIcon className='w-4 md:w-6' />
                </Link>
            </div>

            <div className='md:w-3/5 flex items-center justify-center p-6 md:px-28 md:py-12'>
                <Image 
                    src="/hero-desktop.png"
                    width={1000}
                    height={760}
                    className='hidden md:block'
                    alt="Screenshots of the dashboard project showing deskktop version"
                />
                <Image 
                    src="/hero-desktop.png"
                    width={560}
                    height={620}
                    className='block md:hidden'
                    alt="Screenshots of the dashboard project showing deskktop version"
                />
                

            </div>
        </div>

    </main>
    
)
}