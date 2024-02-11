import React from 'react'
import { useId } from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {

    const id=useId();

  return (
    <div>
{label && <label htmlFor={id}></label>}
<select {...props} id={id} ref={ref}>
{
    options?.map((option,i) =>(
        <option key={i} value={option}>{option}</option>
    ))
}


</select>

    </div>
  )
}

export default React.forwardRef(Select);