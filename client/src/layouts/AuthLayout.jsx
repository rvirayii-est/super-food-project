import React from 'react'
// import PropTypes from 'prop-types';

const AuthLayout = ({children}) => {
  return (
    <div className="flex items-center justify-center h-full w-full my-4 md:my-0 md:h-screen md:w-screen">
      {/*  bg-pink-500 sm:bg-purple-400 md:bg-green-500 lg:bg-orange-500 xl:bg-blue-500 */}
      {children}
    </div>
  )
}

AuthLayout.propTypes = {

}

export default AuthLayout;