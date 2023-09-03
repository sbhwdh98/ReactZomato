import React, {useState} from 'react'
import Header from '../../component/common/header'
import Navbar from '../../component/common/navbar'
import Footer from '../../component/common/footer'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  
  return (
    <div>        
    <Header/>
    <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
    {/* Variable Screen */}
    <Footer/>
    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case 'Delivery':
      return <div>Delivery</div>
      break;
    case 'Dining Out':
      return <div>Dining Out</div>
      break;
    case 'Night Life':
      return <div>Night Life</div>
      break;
    default:
      return <div>Delivery</div>
      break;
  }
}

export default HomePage