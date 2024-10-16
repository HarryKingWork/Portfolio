'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Briefcaseicon, Emailicon, Homeicon, Papericon, Settingicon, Userfillicon } from '../icons';
const menu = [
    {
        label: 'Home',
        url: '/',
        icon: <Homeicon className="size-4" />
    },
    {
        label: 'About',
        url: '/about',
        icon: <Userfillicon className="size-4" />
    },
    {
        label: 'Services',
        url: '/services',
        icon: <Settingicon className="size-4" />
    },
    {
        label: 'Portfolio',
        url: '/portfolio',
        icon: <Briefcaseicon className="size-4" />
    },
    {
        label: 'Blog',
        url: '/blog',
        icon: <Papericon className="size-4" />
    },
    {
        label: 'Contact',
        url: '/contact',
        icon: <Emailicon className="size-4" />
    },

]

function Leftpart() {
    const currentYear = new Date().getFullYear();
    const active = usePathname();
    const router = useRouter();
 
      const handleNavLink = (routerName:any) =>{
        router.push(routerName)
    }


    return (
        <aside className='fixed flex items-center bg-gray-900 border-r border-gray-800 inset-y-0 left-0 w-full max-w-xs xl:max-w-md'>
            <div className='w-64 mx-auto flex flex-col gap-10 py-10 max-h-screen'>
                <div className='relative'>
                    <Link href="/"><span className='text-2xl tracking-widest uppercase text-white font-extrabold leading-none whitespace-nowrap'>Harry King</span></Link>
                </div>
                <div className='flex-1 overflow-auto'>
                    <div className='flex flex-col gap-5'>
                        {menu.map((item, index) =>
                            <button onClick={() => handleNavLink(item.url)} key={index} className={`flex gap-2 items-center font-medium ease-in-out duration-200 ${active  === item.url ? 'text-white tracking-wider':'text-white/65 hover:text-white hover:tracking-wider'}`} >
                                {item.icon}<span>{item.label}</span>
                            </button>
                        )}
                    </div>
                </div>
                <div className='relative'>
                    <p className='text-left text-white/60 text-sm'>&copy; {currentYear} Harry King | All right reserved</p>
                </div>
            </div>
        </aside>
    )
}

export default Leftpart
