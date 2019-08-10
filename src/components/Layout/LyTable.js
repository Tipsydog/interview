import React from 'react';
import './css/lytable.css'

class LyTable extends React.Component{

  render(){
    
    return (
      <section className='containert'>
        <div className='leftt'></div>
        <div className='centert'>这是Table布局的三栏</div>
        <div className='rightt'></div>
      </section>
    )
  }
}

export default LyTable
