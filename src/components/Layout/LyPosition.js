import React from 'react';
import './css/lyposition.css'

class LyPosition extends React.Component{

  render(){
    
    return (
      <section className='containerp'>
        <div className='leftp'></div>
        <div className='rightp'></div>
        <div className='centerp'>这是position布局的三栏</div>
      </section>
    )
  }
}

export default LyPosition