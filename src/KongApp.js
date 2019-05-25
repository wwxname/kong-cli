import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import About from './containers/about';
import Inbox from './containers/inbox';
import Home from './containers/home';


class KongApp extends React.Component {
    connect(){

        axios.get(this.urlInput.value)
    }
    constructor(props) {
        super(props);
        this.state = {route: window.location.hash.substr(1)};
        this.connect = this.connect.bind(this);
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => { //监控hash值的变化
            this.setState({
                route: window.location.hash.substr(1) //更新state值
            })
        })
    }

    render() {
        let Child
        switch (this.state.route) { //判断state值，渲染不同的组件
            case '/about':
                Child = About;
                break;
            case '/inbox':
                Child = Inbox;
                break;
            default:
                Child = Home;
        }


        return (
            <div>
                <div className={"header"}>
                    <h1 style={{width:'25px',display:'inline'}}>Kong</h1>
                    <input ref={input => this.urlInput = input} style={{position: 'relative',left:'100px'}}></input>
                    <button onClick={this.connect} style={{position: 'relative',left:'100px'}} >链接</button>
                    <span style={{position: 'relative',left:'150px',color:'red'}}>未连接</span>
                    <span style={{position: 'relative',left:'200px',color:'red'}}>暂无</span>
                </div>

                <div className={"topnav"}>
                    <a href="#/home"> Home </a>
                    <a href="#/about">About</a>
                    <a href="#/inbox"> Inbox </a>
                </div>
                <Child/>
            </div>

        )
    }
}

export default KongApp;
