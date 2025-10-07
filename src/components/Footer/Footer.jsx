import React from 'react'
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary-950)] w-full">
      <div className="container mx-auto px-5 py-8 flex flex-col items-center">
        <Logo width="100px" />
        <p className="text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Skill Stream. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer