'use client'
import React from 'react'
import { Crossicon} from '@/app/icons' 
 
interface modal { 
    children:React.ReactNode;
    onClick?: () => void,
}


export const Modal: React.FC<modal> = ({children, onClick}) => {
  return (
    <>
      <div className={`fixed z-50 inset-0 flex justify-center items-center p-5 sm:p-10 `} >
        <div onClick={onClick} className={`fixed inset-0 bg-black/90 ease-in-out duration-200 `} />
        <section className={`relative z-10 w-full p-5 max-w-3xl bg-slate-900 rounded overflow-auto max-h-[calc(100vh-100px)]`}  >
          <button onClick={onClick} className='absolute top-2 right-2 ease-in-out duration-200 text-gray-500 hover:text-red-600'>
            <Crossicon className="size-3" />
          </button>
          <div className="relative sm:p-3">           
            <div className="overflow-auto max-h-[calc(100vh-150px)]">
                {children}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


