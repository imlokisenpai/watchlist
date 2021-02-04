import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './Home.css';
import Load from '../loading/Loading';
import Animes from '../anime/Animes.json';
import Series from '../serie/Series.json';
import Info from '../watchInfo/WatchInfo';

export default class Home extends Component{
    state = {
        watching: JSON.parse(JSON.stringify(Animes.animes)).filter(x => x.state === "seeing").concat(JSON.parse(JSON.stringify(Series.series)).filter(x => x.state === "seeing")),
        waiting: JSON.parse(JSON.stringify(Animes.animes)).filter(x => x.state === "waiting").concat(JSON.parse(JSON.stringify(Series.series)).filter(x => x.state === "waiting")),
        next: JSON.parse(JSON.stringify(Animes.animes)).filter(x => x.state === "next").concat(JSON.parse(JSON.stringify(Series.series)).filter(x => x.state === "next")),
        redirect: '/',
        watchInfo: {}
    }

    listConsole(){
        console.log(this.state.watching);
        console.log(this.state.waiting);
        console.log(this.state.next);
    }

    openInfo(inf){
        this.setState({
            watchInfo: inf,
            redirect: this.state.redirect + inf.id
        });
    }

    render(){
        this.listConsole();
        return(
            <div>
                <div className="Watching">
                    <Load />

                    <h3>Watching</h3>
                    <div className="seeingDiv">
                    {
                        this.state.watching.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(seeing => {
                            return(
                                    <Link to={'/' + seeing.id} key={seeing.id} className="seeingBlock">
                                        <img className="seeingImg" src={seeing.img} alt={seeing.name} id={seeing.id} onClick={() => this.openInfo(seeing)} />
                                    </Link>
                            )
                        })
                    }
                    </div>

                    <h3 className="spaceTop">Waiting</h3>
                    <div className="seeingDiv waitingDiv">
                    {
                        this.state.waiting.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(waiting => {
                            return(
                                    <Link to={'/' + waiting.id} key={waiting.id} className="seeingBlock">
                                        <img className="seeingImg" src={waiting.img} alt={waiting.name} id={waiting.id} onClick={() => this.openInfo(waiting)} />
                                    </Link>
                            )
                        })
                    }
                    </div>  

                    <h3 className="spaceTop">Next to see</h3>
                    <div className="seeingDiv waitingDiv">
                    {
                        this.state.next.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(next => {
                            return(
                                    <Link to={'/' + next.id} key={next.id} className="seeingBlock">
                                        <img className="seeingImg" src={next.img} alt={next.name} id={next.id} onClick={() => this.openInfo(next)} />
                                    </Link>
                            )
                        })
                    }
                    </div> 
                </div>
                
                <Route exact path={this.state.redirect}><Info i={this.state.watchInfo} /></Route>
            </div>
        );
    }
}