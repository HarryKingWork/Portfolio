'use client'
import React from 'react'
import Layout from '../layout'
import Image from 'next/image'
import { Facebookicon, Linkedinicon, Xicon } from '@/app/icons'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
const social = [
    {
        icon: <Facebookicon className="size-4" />,
        label: 'facebook',
        url: '#'
    },
    {
        icon: <Xicon className="size-4" />,
        label: 'X.com',
        url: '#'
    },
    {
        icon: <Linkedinicon className="size-4" />,
        label: 'X.com',
        url: '#'
    },
]

function Home() {
    return (
        <>
            <Layout>
                <section className='flex  justify-center items-center'>
                    <div className="max-w-4xl mx-auto py-10 flex flex-col md:grid md:grid-cols-12 gap-10">
                        <div className='col-span-4'>
                        <div className='border-8 border-gray-900 ring-1 ring-white/20 overflow-hidden max-w-full'>
                            <Image src="/images/jordan-king.png" width={500} height={500} alt='' className='h-auto object-cover' />
                        </div></div>
                        <div className='col-span-8'>
                            <div className='flex flex-col gap-5 max-w-lg'>
                                <h1 className='text-3xl text-white font-bold text-left uppercase tracking-widest'>Harry King</h1>
                                <p className='text-xl font-light text-white'>
                                  I'm expert in  <TypeAnimation
                                        sequence={[
                                            'React.js (5 Years)', // Types 'One'
                                            1000, // Waits 1s
                                            'Vue.js (5 Years)', // Deletes 'One' and types 'Two'
                                            2000, // Waits 2s
                                            'Node.js (5 Years)', // Types 'Three' without deleting 'Two'
                                            3000, // Waits 2s
                                            'Java (3 Years)', // Types 'Three' without deleting 'Two'
                                            () => {
                                                console.log('Sequence completed');
                                            },
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        className='text-xl font-light text-white'
                                    />
                                </p>
                                <p className='text-white/60 leading-relaxed'>I am a professional developer with 5+ years of work experience. I have experience of working with on-site teams and on my own as a freelancer. </p>
                                <div className='flex gap-3'>
                                    {social.map((item, index) =>
                                        <Link key={index} href={item.url} aria-label={item.label} className='text-white/60 hover:text-white ease-in-out duration-200'>
                                            {item.icon}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Home
