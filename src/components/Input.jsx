import React, { forwardRef } from 'react'
import { useId } from 'react'

const Input=forwardRef(function input(
    {label,
    type="text",
    className="",
    ...props
    },ref){

const id=useId()

return (
    <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input type={type} ref={ref} {...props} id={id} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}/>
    </div>
)
})
export default Input