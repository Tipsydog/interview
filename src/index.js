import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import './style.css';
import 'antd/dist/antd.css';

import Layoutex from './components/Layout/Layout'
import Bfc from './components/Bfc'
import HomePage from './components/HomePage'

// 意思是Header=Layout.Header
const { Header, Footer, Content } = Layout;

class App extends Component {
    render () {
        return(
            <BrowserRouter>
                <div style={{height: '100%'}}>
                    {/* minWidth: 1400保证页面宽度最小1400px，当浏览器缩小时会自动生成滚动条 */}
                    <Layout style={{ height: '100%' }}>
                        <Header className="header">这是面试巩固</Header>
                        <Content className="content">       
                            <Switch>
                                <Route path='/layout' component={Layoutex}></Route>
                                <Route path='/bfc' component={Bfc}></Route>
                                
                                <Route path='/' component={HomePage}></Route>
                            </Switch>    
                        </Content>
                        <Footer className="footer">@copyright xuweihao 2019</Footer>
                    </Layout>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));