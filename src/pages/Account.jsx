import React from 'react'
import { AccountDetails, AccountNav, FooterNav, RecentOrders } from '../components'

const Account = () => {
  return (
        <div>
            <AccountNav />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 p-5 sm:p-10'>
              <div className='col-span-1'>
                <AccountDetails />
              </div>
              <RecentOrders />
            </div>
            <FooterNav />
        </div>
    )
}

export default Account