'use client'
import Link from 'next/link'
import React from 'react'
import { Burgericon, Crossicon } from '../icons'
import Leftpart from './left-part'

function Header() {
    const [sidebar, setSidebar] = React.useState(false)
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };
    React.useEffect(() => {
        if (sidebar) {
            document.body.classList.add('overflow-hidden');
        }
        else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [sidebar]);
    return (
        <>
            <div className='bg-slate-900 py-3 px-5 flex lg:hidden justify-between gap-2 items-center fixed top-0 inset-x-0'>
                <div className='relative'>
                    <Link href="/"><span className='text-2xl tracking-widest uppercase text-white font-extrabold leading-none whitespace-nowrap'>Harry King</span></Link>
                </div>
                <div className='relative'>
                    <button className='text-white p-2' onClick={toggleSidebar}>
                        <Burgericon className="size-5" />
                    </button>

                </div>

            </div>
            {sidebar && 
            <div className='fixed inset-0 z-50'>
                <div className='fixed inset-0 bg-black/90' onClick={toggleSidebar} />
                <Leftpart />
                <button onClick={toggleSidebar} className='absolute top-3 left-72 text-white '><Crossicon className="size-4"/></button>
            </div>
            }
        </>
    )
}

export default Header
