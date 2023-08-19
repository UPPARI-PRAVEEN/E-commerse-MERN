import React from 'react'
import Header from '../components/header/Dummyheader'


const Layout = ({children}) => {
  return (
    <>
    <div><Header/></div>
    <div>{children}</div>
    </>
  )
}

export default Layout