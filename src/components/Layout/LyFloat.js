import React from 'react';
import './css/lyfloat.css'

class LyFloat extends React.Component{

  render(){
    
    return (
      <section className='containerf'>
        <div className='leftf'></div>
        <div className='rightf'></div>
        <div className='centerf'>这是float布局的三栏</div>
      </section>
    )
  }
}

export default LyFloat