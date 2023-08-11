import React from 'react'
import { CategoryList, FooterNav, RestaurantList, RestaurantsNav } from '../components'

const Restaurants = () => {
    return (
            <div>
                <RestaurantsNav />
                <CategoryList />
                <RestaurantList />
                <FooterNav />
            </div>
        )
}

export default Restaurants