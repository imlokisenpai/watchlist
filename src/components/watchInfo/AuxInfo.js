import {Component} from 'react';

export default class infoUpdater extends Component{
    constructor(props){
        super(props);
        this.state = {
            i: this.props
        };
    }

    infoUpdate = (update) => {
        this.setState({i: update});
    }

    render(){
        return this.state;
    }
}