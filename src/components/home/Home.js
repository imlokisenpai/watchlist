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
            <div className="Watching">
                <Load />
                <h3>Watching</h3>

                <div className="seeingDiv">
                {
                    Recent.new.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(seeing => {
                        return(
                                <div key={seeing.id} className="seeingBlock">
                                    <img className="seeingImg" src={seeing.img} alt={seeing.name} id={seeing.id} />
                                </div>
                        )
                    })
                }
                </div>  
            </div>
        );
    }
}