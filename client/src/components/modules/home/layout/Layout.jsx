import Header from './Header'
import Footer from './Footer'
import FloatingContact from './FloatingContact'

export const Layout = ({ children }) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
        <FloatingContact />
    </div>
  )
}
