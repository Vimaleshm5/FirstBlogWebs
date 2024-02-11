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
        <input type={type} ref={ref} {...props} id={id} className={className}/>
    </div>
)
})
export default Input