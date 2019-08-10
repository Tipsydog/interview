import React from 'react'

import './css/bfc.css'
class Bfc extends React.Component {

  render() {
    return (
      <div>
{/* bfc解决margin塌陷 */}
        <section className='marginProblem'>
          <p>1距上5px，距下45px</p>
          <div style={{ overflow: 'hidden' }}>
            <p>2距上45px，距下45px</p>
          </div>
          <p>3距上45px，距下30px</p>
          <p>4距上30px，距下30px</p>
        </section>
{/* bfc不与float重叠 */}
        <section className='floatProblem'>
          <div className='fp_left'></div>
          <div className='fp_rigth'>若此div不加’overflow: hidden‘属性，则下方黑块会变成黄色</div>
        </section>

{/* 清除浮动 */}
        <section className='floatClear'>
          <div className='fc_float'>我是浮动元素,BFC元素即使是float也会参与高度计算</div>
        </section>
      </div>
    )
  }
}

export default Bfc