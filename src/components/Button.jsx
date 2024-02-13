import React from 'react'

function Button({
  children, 
  type = "button",
  bgColor="bg-blue-500",
  text="text-white",
  className = "",
  ...props
 }) {

  return (
    <button className={`px-4 py-2 mt-2 text-center rounded-lg ${bgColor} ${text} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button