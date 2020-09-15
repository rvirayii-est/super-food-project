import React from 'react'
// import PropTypes from 'prop-types'

// components
import Offers from 'components/landing/Offers';

// data
import { OFFERS } from 'data/offers';

const SectionTwo = props => {
  
  return (
    <div className="h-full sm:h-screen bg-orange-200">
      {/*  bg-pink-500 xs:bg-blue-400 sm:bg-purple-400 md:bg-green-500 lg:bg-orange-400 xl:bg-indigo-400 */}
      <div className="bg-pink-500 xs:bg-blue-400 sm:bg-purple-400 md:bg-green-500 lg:bg-orange-400 xl:bg-indigo-400">
        breakpoint-(pink-default//blue-xs//purple-md//lg-orange//xl-indigo)
      </div>
      <div className="sm:p-4 border-accent border-t-4">
      <Offers offers={OFFERS} />

      </div>
    </div>
  )
}

SectionTwo.propTypes = {

}

export default SectionTwo
