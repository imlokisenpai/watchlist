import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Load from '../loading/Loading';
import Animes from '../anime/Animes.json';
import Series from '../serie/Series.json';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            watching: JSON.parse(JSON.stringify(Animes.animes)).filter(x => x.state === "seeing").concat(JSON.parse(JSON.stringify(Series.series)).filter(x => x.state === "seeing")),
            waiting: JSON.parse(JSON.stringify(Animes.animes)).filter(x => x.state === "waiting").concat(JSON.parse(JSON.stringify(Series.series)).filter(x => x.state === "waiting")),
            next: JSON.parse(JSON.stringify(Animes.animes)).filter(x => x.state === "next").concat(JSON.parse(JSON.stringify(Series.series)).filter(x => x.state === "next")),
            watchInfo: {}
        }
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
                    <Load />
                    <div className="Watching">
                        <h3 className="show1 animate">Watching</h3>
                        <div className="seeingDiv show1 animate">
                        {
                            this.state.watching.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(seeing => {
                                return(
                                        <Link to={'/watchlist/' + seeing.id} key={seeing.id} className="seeingBlock" onClick={() => this.props.data.chgInf(seeing)}>
                                            <img className="seeingImg" src={seeing.img} alt={seeing.name} id={seeing.id} />
                                        </Link>
                                )
                            })
                        }
                        </div>

                        <h3 className="spaceTop show2 animate">Waiting</h3>
                        <div className="seeingDiv waitingDiv show2 animate">
                        {
                            this.state.waiting.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(waiting => {
                                return(
                                        <Link to={'/watchlist/' + waiting.id} key={waiting.id} className="seeingBlock" onClick={() => this.props.data.chgInf(waiting)}>
                                            <img className="seeingImg" src={waiting.img} alt={waiting.name} id={waiting.id} />
                                        </Link>
                                )
                            })
                        }
                        </div>  
                        {/*
                        <h3 className="spaceTop show3 animate">Next to see</h3>
                        <div className="seeingDiv waitingDiv show3 animate">
                        {
                            this.state.next.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(next => {
                                return(
                                        <Link to={'/watchlist/' + next.id} key={next.id} className="seeingBlock" onClick={() => this.props.data.chgInf(next)}>
                                            <img className="seeingImg" src={next.img} alt={next.name} id={next.id} />
                                        </Link>
                                )
                            })
                        }
                        </div> 
                    */}
                    </div>
                </div>
        );
    }
}