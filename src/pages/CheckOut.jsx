import React from 'react'
import { AmountDetails, CheckoutDetails, CheckoutNav, FooterNav } from '../components'

const CheckOut = () => {
    return (
        <div>
            <CheckoutNav />
            <AmountDetails />
            <CheckoutDetails />
            <FooterNav />
        </div>
    )
}

export default CheckOut