"use client"
import React from 'react'
import Layout from '../layout';
import Image from 'next/image'
import { calculateAge } from '../calculateAge';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const dob = "1990-10-10"; // Example Date of Birth (YYYY-MM-DD format)
const age = calculateAge(dob);
const personalInfo = [
  {
    label: 'Birthday',
    value: dob
  },
  {
    label: 'Age',
    value: age
  },
  {
    label: 'Address',
    value: 'Ave 11, New York, USA'
  },
  {
    label: 'Email',
    value: 'tokyo@gmail.com'
  },
  {
    label: 'Phone',
    value: '+77 022 177 05 05'
  },
  {
    label: 'Nationality',
    value: 'USA'
  },
  {
    label: 'Study',
    value: 'University of Texas'
  },
  {
    label: 'Degree',
    value: 'Master'
  },
  {
    label: 'Interest',
    value: 'Playing Football'
  },
  {
    label: 'Freelancer',
    value: 'Available'
  },
]

const skills = [
  {
    label: 'React.js',
    value: 85
  },
  {
    label: 'Vue.js',
    value: 75
  },
  {
    label: 'Node.js',
    value: 90
  },
  {
    label: 'Java',
    value: 65
  },
]
const language = [
  {
    label: 'English',
    value: 90
  },
  {
    label: 'Russian',
    value: 75
  },
  {
    label: 'Arabic',
    value: 90
  },
  {
    label: 'French',
    value: 65
  },
]
const education = [
  {
    year: '2014 - 2016',
    institute: 'Oxford University',
    course: 'Master Degree'
  },
  {
    year: '2010 - 2014',
    institute: 'Texas University',
    course: 'Bachelor Degree'
  },
  {
    year: '2008 - 2010',
    institute: 'Simone College',
    course: 'Associate Degree'
  },

]
const experience = [
  {
    year: '2018 - Now',
    org: 'Envato Market',
    post: 'Exclusive Author'
  },
  {
    year: '2016 - 2018',
    org: 'RGB Studio',
    post: 'UX Designer'
  },
  {
    year: '2012 - 2016',
    org: 'Innovations Park',
    post: 'Web Designer'
  },

]

const testimonials = [
  {
    quote: 'Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!',
    name: 'Alexander Walker',
    post: 'Graphic Designer',
    photo: '/images/1.jpg'
  },
  {
    quote: 'Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!',
    name: 'Isabelle Smith',
    post: 'Content Manager',
    photo: '/images/2.jpg'
  },
  {
    quote: 'Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!',
    name: 'Baraka Clinton',
    post: 'English Teacher',
    photo: '/images/3.jpg'
  },
]

function About() {

  const midpoint = Math.ceil(personalInfo.length / 2); // Find the middle point
  const firstHalf = personalInfo.slice(0, midpoint);
  const secondHalf = personalInfo.slice(midpoint);


  return (
    <Layout>
      <section className='max-w-screen-lg mx-auto px-4 py-5 md:py-14'>
        <p className='bg-white/10 py-2 px-4 text-white/60 inline-flex'>About</p>
        <h1 className='text-3xl font-bold text-white text-left pt-5'>About Us</h1>
        <div className='w-full overflow-hidden mt-14'>
          <Image src='/images/about-me.jpg' width={1200} height={700} className='h-auto w-full' alt='about-me' />
        </div>
        <div className='divide-y divide-white/10'>
          <div className='py-10'>
            <h2 className='text-2xl font-bold text-white'>Jordan King</h2>
            <p className="text-lg text-white/50">Web Developer</p>
          </div>
          <div className='py-10'>
            <p className='text-white/60 leading-relaxed'>
              I am a professional developer with 5+ years of work experience. I have experience of working with on-site teams and on my own as a freelancer. I try to adapt myself to all working conditions and always try to give my best for my clients and the company.</p><p className='text-white/60 leading-relaxed pt-5'>I can work well both in a team environment as well as using my own initiative.
            </p>
          </div>
          <div className='py-10 flex flex-col md:grid md:grid-cols-2 gap-10 '>
            <div className='flex flex-col gap-5'>
              {firstHalf.map((item, index) => (
                <p key={index} className='text-white tracking-wider flex flex-wrap'><strong className='font-semibold w-40'>{item.label}:</strong> <span className='text-white/60'>{item.value}</span></p>
              ))}
            </div>
            <div className='flex flex-col gap-5'>
              {secondHalf.map((item, index) => (
                <p key={index} className='text-white tracking-wider flex flex-wrap'><strong className='font-semibold w-40'>{item.label}:</strong> <span className='text-white/60'>{item.value}</span></p>
              ))}
            </div>
          </div>

          <div className='py-10'>
            <button className='py-3 px-10 bg-white hover:bg-green-700 text-gray-900 hover:text-white font-medium ease-in-out duration-200'>Download CV</button>
          </div>
          <div className='py-10 flex flex-col md:grid md:grid-cols-2 gap-20'>
            <div className='flex flex-col gap-7'>
              <h2 className='text-2xl font-bold text-white'>Programming Skills</h2>
              <div className='flex flex-col gap-5'>
                {skills.map((item, index) =>
                  <div key={index} className='flex flex-col gap-2'>
                    <div className='flex justify-between gap-2'>
                      <p className='text-white/70 italic'>{item.label}</p>
                      <p className='text-white/50 italic'>{item.value}%</p>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-0.5">
                      <div className="bg-white h-0.5 rounded-full" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='flex flex-col gap-7'>
              <h2 className='text-2xl font-bold text-white'>Language Skills</h2>
              <div className='flex flex-col gap-5'>
                {language.map((item, index) =>
                  <div key={index} className='flex flex-col gap-2'>
                    <div className='flex justify-between gap-2'>
                      <p className='text-white/70 italic'>{item.label}</p>
                      <p className='text-white/50 italic'>{item.value}%</p>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-0.5">
                      <div className="bg-white h-0.5 rounded-full" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='py-10 flex flex-col md:grid md:grid-cols-2 gap-20'>
            <div className='flex flex-col gap-7'>
              <h2 className='text-2xl font-bold text-white'>Education</h2>
              <div className='flex flex-col gap-5 relative before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-white/20 '>
                {education.map((item, index) =>
                  <div key={index} className='grid grid-cols-2 items-center pl-7 lg:pl-5 xl:pl-10 relative before:size-4 before:border before:border-white/20 before:bg-slate-950 before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2'>
                    <div className='flex justify-start'>
                      <p className='py-2 px-3 xl:px-5 bg-white text-gray-900 rounded-full'>{item.year}</p>
                    </div>
                    <div className='flex flex-col '>
                      <p className='text-white'>{item.institute}</p>
                      <p className='text-white text-sm text-white/50'>{item.course}</p>
                    </div>

                  </div>
                )}
              </div>

            </div>

            <div className='flex flex-col gap-7'>
              <h2 className='text-2xl font-bold text-white'>Experience</h2>
              <div className='flex flex-col gap-5 relative before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-white/20 '>
                {experience.map((item, index) =>
                  <div key={index} className='grid grid-cols-2 items-center pl-7 lg:pl-5 xl:pl-10 relative before:size-4 before:border before:border-white/20 before:bg-slate-950 before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2'>
                    <div className='flex justify-start'>
                      <p className='py-2 px-3 xl:px-5 bg-white text-gray-900 rounded-full'>{item.year}</p>
                    </div>
                    <div className='flex flex-col '>
                      <p className='text-white'>{item.org}</p>
                      <p className='text-white text-sm text-white/50'>{item.post}</p>
                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>

          <div className='flex flex-col gap-7 py-10'>
            <h2 className='text-2xl font-bold text-white'>Testimonials</h2>
            <div className='relative'>
              <Swiper className="mySwiper" slidesPerView={1}
                spaceBetween={30} breakpoints={{
                  576: {
                    // width: 576,
                    slidesPerView: 1,
                  },
                  768: {
                    // width: 768,
                    slidesPerView: 2,
                  },
                }}>
                {testimonials.map((item, index) =>
                  <SwiperSlide key={index}>
                    <div className='flex flex-col gap-5'>
                      <div className='flex-1 border-2 border-slate-800 py-5 px-7 relative '>
                        <p className='text-lg font-light italic text-white/60 leading-loose'>{item.quote}</p>
                      </div>
                      <div className='flex gap-4 items-center'>
                        <div className='size-14 rounded-full overflow-hidden'><Image src={item.photo} alt={item.name} width={50} height={40} className='size-14' /></div>
                        <div className='space-y-1'>
                          <p className='text-lg text-white font-medium tracking-wider leading-none'>{item.name}</p>
                          <p className='text-white/50 text-sm leading-none'>{item.post}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>

            </div>
          </div>
        </div>

      </section>
    </Layout>
  )
}

export default About
