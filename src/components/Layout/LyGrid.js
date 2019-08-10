import React from 'react';
import './css/lygrid.css'

class LyGrid extends React.Component{

  render(){
    
    return (
      <section className='containerg'>
        <div className='leftg'></div>
        <div className='centerg'>这是Grid布局的三栏</div>
        <div className='rightg'></div>
      </section>
    )
  }
}

export default LyGrid