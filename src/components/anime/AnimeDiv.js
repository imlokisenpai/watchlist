import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AnimeDiv.css';
import AnimeList from './Animes.json';
import Load from '../loading/Loading';

export default class AnimeDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultGenre: "Pupi",
            genres: AnimeList.animes.filter(x => x === this.defaultGenre)
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

                    <div className="selectGenre">
                        <h2 className="genreSubtitle">Pupi</h2>
                        <label id="slctGenre">
                            <h3>Filter by genre:</h3>
                            <select id="genreSelect">
                                <option value="" selected>No Filter</option>
                                <option value={this.state.genres[0]}>Comedy</option>
                                <option value={this.state.genres[1]}>Shounen</option>
                                <option value={this.state.genres[2]}>Romance</option>
                                <option value={this.state.genres[3]}>Thriller</option>
                                <option value={this.state.genres[4]}>Sports</option>
                            </select>
                        </label>
                    </div>
                    
                    <hr className="subtitleBar" />

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