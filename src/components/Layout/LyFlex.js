import React from 'react';
import './css/lyflex.css'

class LyFlex extends React.Component{

  render(){
    
    return (
      <section className='containerfl'>
        <div className='leftfl'></div>
        <div className='centerfl'>这是flex布局的三栏</div>
        <div className='rightfl'></div>
      </section>
    )
  }
}

export default LyFlex