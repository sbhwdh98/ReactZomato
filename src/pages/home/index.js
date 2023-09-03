import React, { useState } from 'react'
import Header from '../../component/common/header'
import Navbar from '../../component/common/navbar'
import Footer from '../../component/common/footer'
import Delivery from '../../component/delivery'
import DiningOut from '../../component/diningOut'
import NightLife from '../../component/nightLife'


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <div>
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case 'Delivery':
      return <Delivery />
      break;
    case 'Dining Out':
      return <DiningOut />
      break;
    case 'Night Life':
      return <NightLife />
      break;
    default:
      return <div>Delivery</div>
      break;
  }
}

export default HomePage