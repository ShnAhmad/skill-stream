import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-400">
      <div className="sticky top-0 z-20">
        <Header />
      </div>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
