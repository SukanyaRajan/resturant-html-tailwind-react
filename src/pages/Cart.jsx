import React from 'react'
import { AddressDetails, AmountDetails, CartItems, CartNav, CoupenCode, FooterNav, RestDetails } from '../components'

const Cart = () => {
    return (
        <div>
            <CartNav />
            <RestDetails />
            <CartItems />
            <CoupenCode />
            <AmountDetails />
            <AddressDetails />
            <FooterNav />
        </div>
    )
}

export default Cart