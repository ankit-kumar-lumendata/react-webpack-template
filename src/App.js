import React, { Component } from 'react'
import Logo from './assets/images/Lumendata.png'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <img src={Logo} alt="lumendata-logo" />
                <h1>Webpack Babel Default Production Template</h1>
            </div>
        )
    }
}

