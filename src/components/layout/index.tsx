import React from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
    children: any
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;