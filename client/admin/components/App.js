import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import AsideMenu from './AsideMenu'
import Footer from './Footer'

export default function App(props) {
    return (
      <div>
        <Header />

        <Sidebar />

        <Main />

        <AsideMenu />

        <Footer />
      </div>
    )
}
