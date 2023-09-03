import React from 'react'
import Header from '../../component/common/header'
import Navbar from '../../component/common/navbar'
import Footer from '../../component/common/footer'

const HomePage = () => {
  return (
    <div>        
    <Header/>
    <Navbar/>
    {
      getCorrectScreen()
    }
    {/* Variable Screen */}
    <Footer/>
    </div>
  )
}

export default HomePage