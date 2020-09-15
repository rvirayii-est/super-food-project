import React from 'react'
// import PropTypes from 'prop-types'

// icon
import { Icon } from '@iconify/react';

const Offers = ({ offers }) => {
  return (
    <div className="w-full text-primary bg-white shadow-lg sm:rounded-lg flex-col justify-center items-center text-center">
      {offers.map(offer => {
        const { id, title, icon, description } = offer;
        return (
          <div key={id} className="py-16 mx-10">
            <div className="flex items-center justify-center mx-4">

            <Icon icon={icon} className="w-20 h-20" />
            </div>
            <h2 className="text-3xl">
            {title}
            </h2>
            <div className="text-base">
              {description}
            </div>
          </div>
        )
      })}
    </div>
  )
}

Offers.propTypes = {

}

export default Offers
