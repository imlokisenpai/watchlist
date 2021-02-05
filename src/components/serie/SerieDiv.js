import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SerieDiv.css';
import SerieList from './Series.json';
import Load from '../loading/Loading';

export default class SerieDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            serieInfo: {}
        }
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
                                <Link to={'/watchlist/' + serie.id} key={serie.id} className="serieBlock" onClick={() => this.props.data.chgInf(serie)}>
                                    <img className="serieImg" src={serie.img} alt={serie.name} id={serie.id} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}