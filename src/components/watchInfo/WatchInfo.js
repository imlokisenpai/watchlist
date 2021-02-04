import React, {Component} from 'react';
import Load from '../loading/Loading';

//Styles
import './WatchInfo.css';

export default class WatchInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            desc: this.props.desc,
            img: this.props.img,
            state: this.props.state,
            genre: this.props.genre
        };
    };

    showOnConsole(){
        console.log(this.state);
    }

    render(){
        this.showOnConsole();
        return(
            <div className="globalContainer">
                <Load />
                <div className="imgContainer">
                    <img src={this.state.img} alt={this.state.name} />
                </div>
                <div className="data">
                    <div className="title">
                        <h2>{this.state.name}</h2>
                    </div>
                    <div className="info">
                        
                    </div>
                </div>
            </div>
        );
    };
}