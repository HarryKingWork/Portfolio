'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import Layout from '../layout';
import Input from '../input';
import Textarea from '../textarea';
import { Emailicon, Gmailicon, Telegramfillicon, Whatsappfillicon, Whatsappicon } from '@/app/icons';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setResponseMessage('Something went wrong, please try again.');
    }
  };

  return (
    <Layout>
      <section className='max-w-screen-lg mx-auto px-4 py-5 md:py-14'>
        <p className='bg-white/10 py-2 px-4 text-white/60 inline-flex'>Contact</p>
        <h1 className='text-3xl font-bold text-white text-left pt-5'>Get in Touch</h1>
        <div className='pt-10'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-7'>
              <Input id="name" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required={true} />
              <Input id="email" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required={true} />
              <Textarea id="message" placeholder="message" name="message" rows={10} cols={10} value={formData.message} onChange={handleChange} />

              <div className='relative'>
                <button type="submit" className='py-3 px-10 bg-white hover:bg-green-700 text-gray-900 hover:text-white font-medium ease-in-out duration-200'>Send Message</button>
              </div>
            </div>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
        <div className='pt-20 flex justify-between gap-5 flex-wrap'>
        <div className='flex gap-4'>
         <Whatsappfillicon className="size-6" /> <p className='text-white font-semibold hover:opacity-60 ease-in-out duration-200'><Link href={'https://wa.me/+919828368878'} >+91-9828368878</Link></p>
        </div>
        <div className='flex gap-4'>
         <Gmailicon className="size-6" /> <p className='text-white font-semibold hover:opacity-60 ease-in-out duration-200'><Link href={'mailto:kshekh@gmail.com'} >kshekh@gmail.com</Link></p>
        </div>
        <div className='flex gap-4'>
         <Telegramfillicon className="size-6" /> <p className='text-white font-semibold hover:opacity-60 ease-in-out duration-200'><Link href={'https://t.me/Jordn_KinG'} >@Jordn_KinG</Link></p>
        </div>
        </div>

      </section>
    </Layout>
  );
};

export default Contact;
