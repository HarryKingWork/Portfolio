'use client'
import React from 'react'
import Layout from '../layout'
import { Modal } from '../modal'
import Image from 'next/image'
const items = [
    { id: 1, name: 'Item 1', thumb:'/images/portfolio-1.jpg', categories: ['category1','category3'] },
    { id: 2, name: 'Item 2', thumb:'/images/portfolio-2.jpg', categories: ['category2','category3'] },
    { id: 3, name: 'Item 3', thumb:'/images/portfolio-3.jpg', categories: ['category3',] },
    { id: 4, name: 'Item 4', thumb:'/images/portfolio-4.jpg', categories: ['category1',] },
    { id: 5, name: 'Item 5', thumb:'/images/portfolio-5.jpg', categories: ['category2',] },
    { id: 6, name: 'Item 6', thumb:'/images/portfolio-6.jpg', categories: ['category3',] },
];
function Portfolio() {
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
                <div className='flex flex-wrap justify-between gap-2'>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='bg-white/10 py-2 px-4 text-white/60 inline-flex'>Portfolio</p>
                        <h1 className='text-3xl font-bold text-white text-left pt-5'>Creative Portfolio</h1>
                    </div>
                    <div className="flex  gap-4 ">
                        <button
                            className={`text-sm ease-in-out duration-200 ${activeCategory === 'all' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                            onClick={() => handleTabClick('all')}
                        >
                            All
                        </button>
                        <button
                            className={`text-sm ease-in-out duration-200 ${activeCategory === 'category1' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                            onClick={() => handleTabClick('category1')}
                        >
                           Full Stack
                        </button>
                        <button
                            className={`text-sm ease-in-out duration-200 ${activeCategory === 'category2' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                            onClick={() => handleTabClick('category2')}
                        >
                            Java
                        </button>
                        <button
                            className={`text-sm ease-in-out duration-200 ${activeCategory === 'category3' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                            onClick={() => handleTabClick('category3')}
                        >
                            Python
                        </button>
                    </div>

                </div>

                <div className='pt-10 '>


                    {/* Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {items
                            .filter(
                                (item) => activeCategory === 'all' || item.categories.includes(activeCategory)
                            )
                            .map((item,index) => (
                                <div key={index} className="overflow-hidden">                                   
                                    <Image src={item.thumb} alt={item.name} width={500} height={500} onClick={() => toggleDropdown(index)} className='w-full h-auto' />
                                    {viewmodal === index &&
                                <Modal onClick={() => toggleDropdown(index)}>
                                    <div className="overflow-hidden max-h-[700px]">   
                                    <Image src={item.thumb} alt={item.name} width={700} height={700} className='h-auto w-full' />
                                     </div>
                                </Modal>
                            }
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Portfolio
