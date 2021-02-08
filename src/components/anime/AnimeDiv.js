import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AnimeDiv.css';
import AnimeList from './Animes.json';
import Load from '../loading/Loading';

export default class AnimeDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            genres: ["Shounen", "Romance", "Comedy", "Action", "School"]
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
                <div className="selectGenre">
                    <label id="slctGenre">
                        <h3>Filter by genre:</h3>
                        <select id="genreSelect">
                            <option value={this.state.genres[0]}>a</option>
                            <option value={this.state.genres[1]}>b</option>
                            <option value={this.state.genres[2]}>c</option>
                            <option value={this.state.genres[3]}>d</option>
                            <option value={this.state.genres[4]}>e</option>
                        </select>
                    </label>
                </div>
                
                <h2 className="genreSubtitle">Pupi</h2>
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