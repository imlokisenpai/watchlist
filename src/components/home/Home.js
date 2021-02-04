import React, {Component} from 'react';
import './Home.css';
import Recent from './Home.json';
import Load from '../loading/Loading'

export default class Home extends Component{
    state = {
        redirect: '/'
    }

    listConsole(){
        console.log(Recent);
    }

    openInfo(inf){
        console.log(inf)
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
                                    <img className="seeingImg" src={seeing.img} alt={seeing.name} id={seeing.id} onClick={() => this.openInfo(seeing)} />
                                </div>
                        )
                    })
                }
                </div>

                <h3 className="spaceTop">Waiting</h3>
                <div className="seeingDiv waitingDiv">
                {
                    Recent.wait.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(waiting => {
                        return(
                                <div key={waiting.id} className="seeingBlock">
                                    <img className="seeingImg" src={waiting.img} alt={waiting.name} id={waiting.id} onClick={() => this.openInfo(waiting)} />
                                </div>
                        )
                    })
                }
                </div>  
            </div>
        );
    }
}