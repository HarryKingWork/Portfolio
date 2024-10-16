'use client'
import React from 'react'
interface input { 
  name?: string,
  value?:any,
  id?: string,
  label?: string,
  placeholder?: string,
  className?: string,
  readOnly?: boolean,
  required?: boolean,
  rows?:number,
  cols?:number,
  Icon?: React.ElementType,
  iconClass?: string,
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  
}
const Textarea: React.FC<input> = ({ name, id, value, label, placeholder, className, readOnly, required, rows, cols, Icon, iconClass, onChange }) => {
   
   
  return (
    <div className="relative">
      {label &&
        <label htmlFor={id} className='text-sm font-medium font-dm text-gray-500 pb-2'>{label}</label>
      }
      <textarea onChange={onChange}
      id={id}
        className={`w-full bg-transparent border border-white/20 placeholder-white/35 rounded-none font-normal text-white text-sm focus:border-green-900 px-5 py-3 outline-none focus:outline-none focus:ring-0 ${className}`}        
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        rows={rows}
        cols={cols}
      />
      {Icon &&
        <span className={`absolute after:absolute after:right-0.5 after:w-px after:h-8 after:bg-gray-300 text-gray-500 w-12 inset-y-0 flex items-center justify-center ${iconClass}`}>
          <Icon className="size-4" />
        </span>
      }

    </div>
  )
}

export default Textarea
