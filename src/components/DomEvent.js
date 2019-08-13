import React from 'react'

import './css/domevent.css'
class DomEvent extends React.Component {
  constructor(props){
    super(props)
    this.getDom = this.getDom.bind(this)
    // this.firstClick = this.firstClick.bind(this)
  }
  getDom(){
    var first = document.getElementById('first')
    const second = document.getElementById('second')
    const third = document.getElementById('third')

    var eve = new Event('customEvent')    // 自定义事件

    first.addEventListener('customEvent', function () {     // first节点监听custom方法
      console.log('first a has been dispatched')    
    })
    second.addEventListener('customEvent', function () {    // second节点监听custom方法
      second.style.background = 'black'
      console.log('点击first节点改变second颜色')      
    })

    // 事件的触发
    first.addEventListener('click', function () {   // 当点击first的时候执行
      second.dispatchEvent(eve)    // second节点执行eve方法
    })
    second.addEventListener('click',function(){
      first.style.background = 'red'
      first.dispatchEvent(eve)    
    })

  }
  // firstClick(){
  //   this.getDom()
  // }
  render() {
    return (
      <section className='domEvent'>
        <div className='first'>firstDiv</div>
        <div className='second'>secondDiv</div>
        <div className='third'>thirdDiv</div>
      </section>
    )
  }
}

export default DomEvent