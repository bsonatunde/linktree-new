import React from 'react'
import Footer from '../components/Footer'
import Links from '../components/Links'
import Profile from '../components/Profile'
import Socials from '../components/Socials'

const Linktree = () => {
  return (
    <div className='items-center text-gray-900'>
      <Profile />
      <Links />
      <Socials />
      <Footer />
    </div>
  )
}

export default Linktree