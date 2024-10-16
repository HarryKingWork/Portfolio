'use client'
import React from 'react'
import Layout from '../layout'
import { Modal } from '../modal'
import Image from 'next/image'
import { describe } from 'node:test'
const blogposts = [
    {
        date: '10 Oct 2024',
        title: 'Format releases a new tool that enables direct video hosting',
        describe: 'Just because we can’t get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you’re prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.',
        thumb: '/images/news-1.jpg'
    }
]
function Blog() {
    const [activeCategory, setActiveCategory] = React.useState('all');
    const handleTabClick = (category: any) => {
        setActiveCategory(category);
    };
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

                <p className='bg-white/10 py-2 px-4 text-white/60 inline-flex'>Blog</p>
                <h1 className='text-3xl font-bold text-white text-left pt-5 capitalize'>My latest posts</h1>

                <div className='pt-10 flex flex-col md:grid md:grid-cols-2 gap-10'>
                    {blogposts.map((item, index) =>
                        <div key={index} className='flex flex-col bg-white/10'>
                            <div className='h-64 flex justify-center items-center overflow-hidden' onClick={() => toggleDropdown(index)}>
                                <Image src={item.thumb} alt={item.title} width={350} height={250} className='max-w-none min-w-full h-full object-cover' />
                            </div>
                            <div className='p-5  '>
                                <p className='italic text-white/60 text-sm pb-3'>Date: {item.date}</p>
                                <h2 className='text-lg text-white font-medium py-5 border-t border-white/10'>{item.title}</h2>
                                <button className='text-white font-medium hover:opacity-55 ease-in-out duration-200' onClick={() => toggleDropdown(index)}>Read more</button>
                            </div>
                            {viewmodal === index &&
                                <Modal onClick={() => toggleDropdown(index)}>
                                    <Image src={item.thumb} alt={item.title} width={1000} height={500} className='h-auto w-full' />
                                    <div className='space-y-3 pt-10'>
                                        <h2 className='text-xl text-white font-semibold'>{item.title}</h2>
                                        <p className='text-white/50'>{item.describe}</p>
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

export default Blog
