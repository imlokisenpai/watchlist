import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AnimeDiv.css';
import AnimeList from './Animes.json';
import Load from '../loading/Loading';

export default class AnimeDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            animeInfo: {}
        }
    }

    animeListConsole(){
        console.log(AnimeList);
    }

    openInfo(inf){
        this.props.i(inf);
    }

    render(){
        this.animeListConsole();
        return(
            <div>
                <div className="animesDiv">
                <Load />
                {
                    AnimeList.animes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(anime => {
                        return(
                            <Link to={'/watchlist/' + anime.id} key={anime.id} className="animeBlock" onClick={() => this.props.data.chgInf(anime)}>
                                <img className="animeImg" src={anime.img} alt={anime.name} id={anime.id} />
                            </Link>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}