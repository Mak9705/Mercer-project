import React from 'react'
import './App.css';
import { useState } from 'react';
import { Colorfilter, Message, TaskSquare, Setting2, Profile2User, Category,AddSquare,More,Calendar2,NotificationBing, ArrowDown2 } from 'iconsax-react';
import profile1 from './profile1.jpeg'
import lamp from './light bulb.png' 

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{fontFamily: 'bahnschrift'}}>
    <div className={`side-navbar ${collapsed ? 'collapsed' : ''}`}>
   <div style={{textAlign:'center'}}>
    <Colorfilter className='mx-3' color="#5030E5" variant="Bulk"/>
    <font style={{fontSize:'25px', fontWeight:'600'}}>Project M.</font>
    <button className="toggle-button" onClick={toggleNavbar} style={{textAlign:'right'}}>
     <span className="toggle-icon mx-2" style={{textAlign:'right'}}>&#8810;</span>
   </button>
   <img className='collapse-profile' src={profile1} alt='' width={'30px'} height={'30px'} style={{borderRadius:'100%', textAlign:'right'}}/>
   </div>
   <hr style={{width:'90%', borderColor:'#f1f1f1', border:'solid 1px', textAlign:'center'}}/>
   <nav style={{color:'#787486'}}> 

     <ul style={{marginLeft:'-5%'}}>
       <li>
       <Category className='mx-3'/>Home
       </li>
       <li>
       <Message className='mx-3'/>Messages
       </li>
       <li>
        <TaskSquare className='mx-3' />Tasks
       </li>
       <li>
       <Profile2User className='mx-3'/>Members
       </li>
       <li className='collapse-profile-li'>
       <NotificationBing className='mx-3' size='25' variant="TwoTone" color='#787486'/>Notifications
       </li>
       <li className='collapse-profile-li '>
        <Calendar2 size="25" className='mx-3' color='#787486' /> Calender
        </li>
       <li>
       <Setting2 className='mx-3' />Settings
       </li>
     </ul>
   <hr style={{width:'90%', borderColor:'#f1f1f1', border:'solid 1px'}}/>
    <font className='mx-5' style={{color:'#787486',
       fontStyle: 'normal',
       fontWeight: '700',
       fontSize: '15px',
       lineHeight: '25px',
       textTransform: 'uppercase'}}>My projects 
       </font>
       <AddSquare size='20'style={{textAlign:'right'}}/> 
       
   <ul className='mt-2' style={{lineHeight:'19px', fontSize:'16px'}}>
     <li style={{listStyle:'disc', color:'green',backgroundColor:'#5030E514', marginRight:'2%', borderRadius:'5%'}}>
       <p  style={{color:'#787486',lineHeight:'10px'}}>Mobile App  
       <More className='ms-5' style={{textAlign:'right'}} size="20"/>
       </p>
     </li>
     <li style={{listStyle:'disc', color:'orange'}}>
       <p style={{color:'#787486', lineHeight:'10px'}}>Website Redesign</p>
     </li>
     <li style={{listStyle:'disc', color:'purple'}}>
       <p style={{color:'#787486',lineHeight:'10px'}}>Design System</p>
     </li>
     <li style={{listStyle:'disc', color:'orange'}}>
       <p style={{color:'#787486', lineHeight:'10px'}}>Wireframes</p>
     </li>
   </ul>
   <div className='my-4' style={{backgroundColor:'#f1f1f1', textAlign:'center', width:'80%', marginLeft:'10%', padding:'5%'}}>
   <div style={{backgroundColor:'#C4C4C4 ', width:'65px', height:'65px', borderRadius:'100%', marginLeft:'35%', zIndex:'9', padding:"5%", marginTop:'-25%' }}>
   </div>
    <h4 className='mt-1' style={{fontSize:'15px', fontWeight:'400', color:'black'}}> Thoughts Time </h4>
    <p style={{ fontSize:'12px', color:'#787486'}}>
     We don’t have any notice for you, till then you can share your thoughts with your peers.
    </p>
    <button className='btn' style={{backgroundColor:'white', fontSize:'14px' }}> Write a message</button>
   </div>
   </nav>
 </div>
 </div>
  )
}

export default Navbar
