import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Image from 'react-bootstrap/Image'
import Header from './components/Header'
import Cards from './components/Cards'
import Card2 from './components/Card2'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { PiWarningCircle } from "react-icons/pi";
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showOtherComponent, setShowOtherComponent] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowOtherComponent(false); 
  };

  const handleOtherComponentClick = () => {
    setShowOtherComponent(true);
    setShowLoginForm(false);
  };

  const closeModals = () => {
    setShowLoginForm(false);
    setShowOtherComponent(false);
  };
  return (
    <div>
      <NavBar  onLoginClick={handleLoginClick} onOtherComponentClick={handleOtherComponentClick} />
      <div className='hero'>
        <img src="https://muzaffarhaque.github.io/agt-A/images/hero-bg-home.png" style={{width: "100%", zIndex: 0, height: "100%"}}/>;
        <div className='img-text' style={{zIndex: 1, marginTop: "-20%", color: "white",
        marginLeft: "17%"}}>  
          <span>Computer Engineering</span>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <Header />
      <hr style={{width: "67%", marginLeft: "20.7%"}}/>
      <div className='location'>
        <MdOutlineLocationOn/><input placeholder='Noida, India' style={{border: "none", marginLeft: "5%", width: "50%"}}/>
        <MdEdit style={{marginLeft: "30%"}}/>
        <div className='loc-line'></div>
      </div>
        <div className='warning'>
        <PiWarningCircle style={{marginTop: "5%"}}/><p>Your location will help us serve better and extend a personalised experience.</p>
        </div>
        {showLoginForm && <Login onClose={closeModals} />}
        {showOtherComponent && <SignUp onClose={closeModals} />}
      <Cards src="https://muzaffarhaque.github.io/agt-A/images/artical1-img.png" title="✍ Article" content="What if famous brands had regular fonts? Meet RegulaBrands!" subContent="I’ve worked in UX for the better part of a decade. F.." profilePic="https://muzaffarhaque.github.io/agt-A/images/profile.png" username="Sarthak Kamra" />
      <Cards src="https://muzaffarhaque.github.io/agt-A/images/door.png" title="🔬️ Education" content="What if famous brands had regular fonts? Meet RegulaBrands!" subContent="I’ve worked in UX for the better part of a decade. F.." profilePic="https://muzaffarhaque.github.io/agt-A/images/Rectangle%203.png" username="Sarthak Kamra"/>
      <Card2  src="https://muzaffarhaque.github.io/agt-A/images/car.png" title="🗓️ Meetup" content="What if famous brands had regular fonts? Meet RegulaBrands!" subContent="I’ve worked in UX for the better part of a decade. F.." profilePic="https://muzaffarhaque.github.io/agt-A/images/Rectangle%203%20(1).png" username="Sarthak Kamra" color="red"/>
      <Card2   title="💼️ Job" content="What if famous brands had regular fonts? Meet RegulaBrands!" subContent="I’ve worked in UX for the better part of a decade. F.." profilePic="https://muzaffarhaque.github.io/agt-A/images/Rectangle%203%20(2).png" username="Sarthak Kamra" color="green"/>
    </div>
  )
}

export default App
