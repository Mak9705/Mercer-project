import React, { useState } from 'react'
import { MessageQuestion,Calendar2,NotificationBing,SearchNormal1,ArrowDown2,MessageEdit,Message,RepeatCircle,AddSquare,Folder2,RowVertical,Menu,FilterSearch,Calendar1,Profile2User } from 'iconsax-react';
import profile1 from './profile1.jpeg' 
import plant from './plant.png'
import unsplash from './unsplash.jpeg'
import home from './home.jpeg'
import profile2 from './profile2.jpeg'
import profile3 from './profile3.jpg'
import profile4 from './profile5.jpeg'
import profile5 from './profile6.jpeg'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


const Home = () => {

   const todo = [
    {
      id:'brain',
    index:1,
    title:'Brainstorming',
    data:'Brainstorming brings team members diverse experience into play.',
    msg:'12 comments',
    file:'0 files',
    status:'low'
   },
   {
    id:'res',
    index:2,
    title:'Research',
    data:'User research helps you to create an optimal product for users.',
    msg:'10 comments',
    file:'3 files',
    status:'high'
   },
   {
    id:'wire',
    index:3,
    title:'Wireframes',
    data:'Low fidelity wireframes include the most basic content and visuals.',
    msg:'12 comments',
    file:'13 files',
    status:'high'
   }
  ]

  const progress = [
    {
      id:'onboard',
      index:1,
      title:'Onboarding Illustrations',
      img:unsplash,
      msg:'14',
      file:'10',
      status:'low'
    },
    { 
      id:'mood',
      title:'Moodboard',
      img:home,
      msg:'20',
      file:'15',
      status:'Completed'
    },
  ]

  const done = [
    {
      index:1,
      title:'Mobile App Design',
      img:plant,
      msg:'20',
      file:'15',
      status:'Completed'
    },
    {
      index:2,
      title:'Design System',
      img:'',
      msg:'12',
      file:'15',
      status:'Completed'
    },
  ]
  return (
    <div>
    <div id="wrapper" style={{marginLeft:'1%'}}>
  <section id="content-wrapper" padding='1%'>
    <div class="row">
      <div class="col-lg-12">
      <div className='row' padding='2%'>
       <div className='col-7 abb' >
        <form className="d-flex search" role="search" >
           <button style={{border:'none'}} ><SearchNormal1 color="#787486" size="25"/></button> <input class=" me-2" type="search" placeholder={"Search for anything...."} style={{border:'none',backgroundColor:'#f1f1f1', padding:'2%'}} aria-label=" Search for anything...." />
      </form>
        </div>
        <div className='col text-right' >
            <div className='row'>
             <div className='col-4 my-3 header' >
             <Calendar2 size="25" className='icon' color='#787486' />
            <MessageQuestion className='icon' size="25" color='#787486' />
            <NotificationBing className='icon' size='25' variant="TwoTone" color='#787486'/>
             </div>
             <div className='col' style={{textAlign:'right'}}>
            <p className='header icon'>
            Anima Agrawal<br /> <font color='#787486'>UP India</font>
            </p>
             </div>
            <div className='col'>
            <img className='icon' src={profile1} alt='' width={'45px'} height={'45px'} style={{borderRadius:'100%'}}/>
            <ArrowDown2 className='ms-3 icon' color="#787486" variant="TwoTone"/>
            </div>
            </div>
        </div> 
    </div>

      </div>
    </div>
</section>
<div className='row mt-3'>
  <div className='col-sm-8'>
    <h1 className='ms-2'>Mobile App <MessageEdit color="#5030E5"variant="Bulk"/> <RepeatCircle color="#5030E5" variant="Bulk"/></h1>
  </div>
  <div className='col'>
    <div className='row'>
      <div className='col-3 mt-4 ms-3'>
      <AddSquare size='20'color="#5030E5"variant="Bulk" style={{textAlign:'center'}}/>Invite
      </div>
      <div className='col mt-3'>
        <img className='ms-1' src={profile5} width='45px' height='45px'  style={{borderRadius:'100%', marginRight:'-5%'}}/>
        <img src={profile2} width='45px' height='45px'  style={{borderRadius:'100%', marginRight:'-5%'}}/>
        <img src={profile3} width='45px' height='45px'  style={{borderRadius:'100%',marginRight:'-5%'}}/>
        <img src={profile4} width='45x' height='45px'  style={{borderRadius:'100%',marginRight:'-5%'}}/>
        <span width='45px' height='45px' style={{padding:'4%',borderRadius:'100%',marginRight:'-5%', backgroundColor:'#FFE0DF', color:'maroon'}} >2+</span>
      </div>
    </div>
  </div>
</div>
<div className='row my-4'>
  <div className='col-sm-6'>
    <button className='btn btn-outline-secondary'><FilterSearch size='15' className='mx-2'/> Filter <ArrowDown2 className='ms-1' color="#787486" variant="TwoTone" size='15'/></button>
    <button className='btn btn-outline-secondary ms-4'><Calendar1 size='15'className='mx-2'/>Today <ArrowDown2 className='ms-1' color="#787486" variant="TwoTone" size='15'/></button>
  </div>
  <div className='col icon me-5' style={{textAlign:'right'}}>
    <button className='btn btn-outline-secondary ms-4'><Profile2User size='15'className='mx-2'/>Share <ArrowDown2 className='ms-1' color="#787486" variant="TwoTone" size='15'/></button>
    <button  className='btn ms-4' style={{backgroundColor:'#5030E5'}} ><RowVertical color="#ffffff" variant="Bold"/></button>
    <Menu className='ms-3' variant="Outline"/>
  </div>
</div>
<DragDropContext onDragEnd> 
<div className='row'>
 <Droppable droppableId='todo'>
  {(provided)=>
  (
    <div className='col-sm mx-3 my-3' style={{backgroundColor:'#f1f1f1', borderRadius:'1%', textAlign:'center', width:'380px'}} ref={provided.innerRef}
    {...provided.droppableProps}>
    <ul>
      <li style={{listStyle:'disc', textAlign:'left',color:'#5030E5'}}><font style={{color:'black', fontWeight:'500'}}>To Do</font></li>
    </ul>
    <hr style={{border:'2px solid blue' }} />
  {todo.map((to,index)=>{
    return(
   <Draggable draggableId={to.id} >
    {(provided)=>
       (
      <div class=" card card-body my-3" style={{textAlign:'left', border:'none', padding:'5%',borderRadius:'5%'}} ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
    <button className={to.status=='high'?'high':'low'}  style={{border:'none', borderRadius:'10%' ,width:'45px', height:'30px', fontSize:'12px',fontWeight:'bold'}}>{to.status} </button>
    <h5 class="card-title my-3">{to.title}</h5>
    <p class="card-text" style={{color:'#787486'}}>{to.data} </p>
    <p className='row'>
    <div className='col-4 mt-3'>
        <img  src={profile2} width='30px' height='30px'  style={{borderRadius:'100%', marginRight:'-5%'}}/>
        <img src={profile4} width='30px' height='30px'  style={{borderRadius:'100%', marginRight:'-5%'}}/>
        <img src={profile3} width='30px' height='30px'  style={{borderRadius:'100%',marginRight:'-5%'}}/>
      </div>
      <div className='col mt-3' style={{fontSize:'13px', color:'#787486'}}>
      <Message className='mx-1' size='20'/>{to.msg} <Folder2 className='mx-1' size='20'/> {to.file}
      </div>
    </p>
  </div>
  )}
  </Draggable>
  )})}
  {provided.placeholder}
    </div>
  )}
  </Droppable> 
  <Droppable droppableId='progress'>
  {(provided)=>
  (
    <div className='col-sm mx-3 my-3' style={{backgroundColor:'#f1f1f1', borderRadius:'1%', textAlign:'center',width:'380px'}} ref={provided.innerRef}
    {...provided.droppableProps}>
    <ul>
      <li style={{listStyle:'disc', textAlign:'left', color:'#D58D49'}}><font style={{color:'black', fontWeight:'500'}}>On Progress</font></li>
    </ul>
    <hr style={{ border:'2px solid orange'}}/>
    {progress.map((pro)=>{return( 
  <Draggable draggableId={pro.id} >
    {(provided)=>{
      return (
      <div class=" card card-body my-3" style={{textAlign:'left', border:'none', padding:'5%', borderRadius:'5%'}} ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps} >
    <button className={pro.status=='low'?'low':'complete'}  style={pro.status=='low'?{width:'45px',border:'none',fontSize:'12px',fontWeight:'bold'}:{width:'95px',fontWeight:'bold',fontSize:'12px',border:'none'}}>{pro.status}</button>
    
    <h5 class="card-title my-3">{pro.title}</h5>
    <img src={pro.img} alt=""/>
    <p className='row'>
    <div className='col-4 mt-3'>
        <img  src={profile5} width='35px' height='35px'  style={{borderRadius:'100%', marginRight:'-5%'}}/>
        <img src={profile2} width='35px' height='35px'  style={{borderRadius:'100%', marginRight:'-5%'}}/>
      </div>
      <div className='col mt-3' style={{fontSize:'13px', color:'#787486'}}>
      <Message className='mx-1' size='20'/> {pro.msg} Comments <Folder2 className='mx-1' size='20'/> {pro.file} Files
      </div>
    </p>
  </div>  
  )}}
  </Draggable>
    )})}
    {provided.placeholder}
    </div>
      )}
    </Droppable>
    <Droppable droppableId='Completed'>
    {(provided)=>
    (
     <div className='col-sm mx-3 me-5 my-3' style={{backgroundColor:'#f1f1f1', borderRadius:'1%', textAlign:'center',width:'380px'}} ref={provided.innerRef}
     {...provided.droppableProps}>
    <ul>
      <li style={{listStyle:'disc', textAlign:'left', color:'#68B266'}}><font style={{color:'black', fontWeight:'500'}}>Done</font></li>
    </ul>
    <hr style={{ border:'2px solid darkgreen'}} />
   {done.map(done=>{return(
    <Draggable draggableId={done.id} >
    {(provided)=>{
      return (
     <div class=" card card-body my-3" style={{textAlign:'left', border:'none', padding:'5%', borderRadius:'5%'}} ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps} >
    <button className='btn' style={{backgroundColor:'#83C29D33',border:'none', borderRadius:'10%' ,width:'95px', height:'30px', fontSize:'12px',fontWeight:'bold', color:'#68B266'}}>Completed</button>
    <h5 class="card-title my-3">{done.title}</h5>
    <img src={done.img} alt="" />
    <p className='row'>
    <div className='col-4 mt-3'>
        <img  src={profile4} width='35px' height='35px'  style={{borderRadius:'100%', marginRight:'-5%'}}/>
      </div>
      <div className='col mt-3' style={{fontSize:'13px', color:'#787486'}}>
      <Message className='mx-1' size='20'/> {done.msg} Comments<Folder2 className='mx-1' size='20'/> {done.file} Files
      </div>
    </p>
  </div>
  )}}
  </Draggable>
    )})}
    
    </div>
        )}
        
      </Droppable>

</div> 
</DragDropContext>
</div>

</div>
  )
}

export default Home
