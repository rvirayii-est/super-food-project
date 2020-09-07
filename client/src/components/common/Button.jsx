import React from 'react'

export const Button = ({category, children, ...props}) => {
  return (
    <button {...props} className={`btn-category-${category} flex items-center justify-center space-x-2 p-2 px-4 my-2 w-full rounded-md text-white hover:opacity-75 focus:opacity-75 transform hover:-translate-y-1 focus:-translate-y-1 ease-in-out duration-300 hover:shadow-md focus:shadow-md outline-none focus::outline-none`}>
      {children}
    </button>
  )
}
