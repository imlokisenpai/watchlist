import React, {Component} from 'react';

import './WatchInfo.css'

export default class WatchInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: this.props
        }
    }

    showConsole(){
        console.log(this.state.info);
    }

    render(){
        this.showConsole();
        return(
            <h1></h1>
        )
    }
}