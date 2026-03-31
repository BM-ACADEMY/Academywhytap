import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingContact from './FloatingContact'

export const Layout = () => {
  return (
    <>
      <Header />
      {/* 
        We wrap the content in overflow-x-hidden to prevent the "horizontal glitch"
        while keeping the Header outside so position: sticky works perfectly.
      */}
      <div className="overflow-x-hidden flex flex-col min-h-screen">
        <main className="flex-grow relative">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingContact />
    </>
  )
}
