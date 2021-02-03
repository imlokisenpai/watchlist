import React, {Component} from 'react';
import './Home.css';
import Recent from './Home.json';
import Load from '../loading/Loading'

export default class Home extends Component{
    state = {
        recents: []
    }

    listConsole(){
        console.log(Recent);
    }
    render(){
        this.listConsole();
        return(
            <div className="seeingDiv">
                <Load />
                {
                    Recent.new.map(seeing => {
                        return(
                            <div key={seeing.id} className="seeingBlock">
                                <img className="seeingImg" src={seeing.img} alt={seeing.name} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}