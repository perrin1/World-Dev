import Footer from '@/components/elements/Footer';
import NavBar from '@/components/elements/NavBar';
import Provider from '@/components/elements/Provider';
import React, { FC, ReactNode } from 'react'
interface AuthLayoutProps {
    children: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
  return (
    <>
  
      <NavBar />
      
      {children}

      <Footer />
    
    </>
  )
}

export default AuthLayout
