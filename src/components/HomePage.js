import React from 'react';
import { Link } from 'react-router-dom'

import './homepage.css'

class HomePage extends React.Component{

  render(){
    
    return (
      <div className='homePage'>
        <Link to='/layout' >
          <span>点击跳转到三栏布局界面</span> </Link>
        <Link to='/bfc' >
          <span>点击跳转到块级格式化上下文界面</span> </Link>
      </div>
    )
  }
}

export default HomePage