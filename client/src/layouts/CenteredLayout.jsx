import React from 'react'
// import PropTypes from 'prop-types'

const CenteredLayout = ({children}) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {children}
    </div>
  )
}

CenteredLayout.propTypes = {

}

export default CenteredLayout
