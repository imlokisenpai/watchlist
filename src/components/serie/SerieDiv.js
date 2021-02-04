import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './SerieDiv.css';
import SerieList from './Series.json';
import Load from '../loading/Loading';
import Info from '../watchInfo/WatchInfo';

export default class SerieDiv extends Component{
    state = {
        serieInfo: {},
        redirect: '/'
    }

    serieListConsole(){
        console.log(SerieList);
    }

    openInfo(inf){
        this.setState({
            serieInfo: inf,
            redirect: this.state.redirect + inf.id
        });
    }

    render(){
        this.serieListConsole();
        return(
            <div>
                <div className="seriesDiv">
                    <Load />
                    {
                        SerieList.series.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(serie => {
                            return(
                                <Link to={'/' + serie.id} key={serie.id} className="serieBlock">
                                    <img className="serieImg" src={serie.img} alt={serie.name} id={serie.id} onClick={() => this.openInfo(serie)} />
                                </Link>
                            )
                        })
                    }
                </div>
                
                <Route exact path={this.state.redirect}><Info i={this.state.serieInfo} /></Route>
            </div>
        );
    }
}