import React from 'react'
import { CartDetails, NavBar, RestaurantDetails, RestaurantItems } from '../components'

const Restaurant = () => {
  return (
        <div>
            <NavBar />
            <RestaurantDetails />
            <RestaurantItems />
            <CartDetails />
        </div>
    )
}

export default Restaurant