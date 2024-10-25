'use client'
import React from 'react'
import Layout from '../layout'
import { Modal } from '../modal'
import Image from 'next/image'
const servicelist = [
    {
        title: 'Web Design',
        short: 'A web designer creates the visual layout and user experience of websites.',
        thumb: '/images/news-1.jpg'
    },
    {
        title: 'Full Stack Web Develop',
        short: 'A Full Stack Web Developer handles both front-end and back-end development, managing everything from user interfaces to server-side logic.',
        thumb: '/images/news-2.jpg'
    },
    {
        title: 'Search Engine Optimization',
        short: 'SEO, or Search Engine Optimization, involves strategies and techniques to improve a website visibility in search engine results.',
        thumb: '/images/news-3.jpg'
    },
    {
        title: 'Blockchain Develop',
        short: 'A Blockchain Developer specializes in building and implementing blockchain-based solutions, focusing on secure and decentralized applications.',
        thumb: '/images/news-4.jpg'
    },
    {
        title: 'Database Administration',
        short: 'Database Administration involves managing and maintaining databases to ensure their performance, security, and reliability.',
        thumb: '/images/news-1.jpg'
    },
    {
        title: 'Software Test',
        short: 'A tester, or software tester, evaluates applications to identify bugs and ensure quality before release.',
        thumb: '/images/news-2.jpg'
    },
]
function Services() {
    const [viewmodal, setViewmodal] = React.useState<number | null>(null)
    const toggleDropdown = (index: number) => {
        setViewmodal(viewmodal === index ? null : index);
    };
    React.useEffect(() => {
        if (viewmodal) {
            document.body.classList.add('overflow-hidden');
        }
        else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [viewmodal]);
    return (
        <Layout>
            <section className='max-w-screen-lg mx-auto px-4 py-5 md:py-14'>
                <p className='bg-white/10 py-2 px-4 text-white/60 inline-flex'>Services</p>
                <h1 className='text-3xl font-bold text-white text-left pt-5'>What I Do</h1>
                <div className='pt-10 flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {servicelist.map((item, index) =>
                        <div key={index} className="bg-white/20 py-10 px-7">
                            <div className='rounded-full flex justify-center items-center size-14 bg-white/10 text-white font-semibold'>{String(index + 1).padStart(2, '0')}</div>
                            <div className='space-y-4 pt-5'>
                                <h2 className='text-xl text-white font-semibold'>{item.title}</h2>
                                <p className='text-white/50 text-lg'>{item.short}</p>
                                <button className='text-white font-medium hover:opacity-55 ease-in-out duration-200' onClick={() => toggleDropdown(index)}>Read more</button>
                            </div>
                            {viewmodal === index &&
                                <Modal onClick={() => toggleDropdown(index)}>
                                    <Image src={item.thumb} alt={item.title} width={1000} height={500} className='h-auto w-full' />
                                    <div className='space-y-3 pt-10'>
                                        <h2 className='text-xl text-white font-semibold'>{item.title}</h2>
                                        <p className='text-white/50 text-lg'>{item.short}</p>
                                    </div>
                                </Modal>
                            }
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    )
}

export default Services
