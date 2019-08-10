import React from 'react';

import LyFloat from './LyFloat'
import LyPosition from './LyPosition'
import LyFlex from './LyFlex'
import LyTable from './LyTable'
import LyGrid from './LyGrid'

class Layoutex extends React.Component{

  render(){
    return (
      <div>
        <LyFloat></LyFloat>
        <LyPosition></LyPosition>
        <LyFlex></LyFlex>
        <LyTable></LyTable>
        <LyGrid></LyGrid>
      </div>
    )
  }
}

export default Layoutex