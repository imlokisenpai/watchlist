import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AnimeDiv.css';
import AnimeList from './Animes.json';
import Load from '../loading/Loading';

export default class AnimeDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultGenre: "",
            subtitle: "Complete List",
            genres: ["-No Filter-", ...new Set(AnimeList.animes.flatMap(x => x.genre))].sort()
        }
    }

    animeListConsole(){
        console.log(AnimeList);
        console.log(this.state.genres);
    }

    changeGenre(){
        this.setState({
            defaultGenre: document.getElementById('genreSelect').value,
            subtitle: document.getElementById('genreSelect').value
        })

        if(document.getElementById('genreSelect').value === '-No Filter-'){
            this.setState({
                subtitle: "Complete List",
                defaultGenre: ""
            })
        }
    }

    render(){
        this.animeListConsole();
        return(
                <div>
                    <Load />
                    <div className="animesDiv">
                        <div className="genreContainer">
                            <h2 className="genreSub">{this.state.subtitle}</h2>
                            <label id="genreLabel">
                                <h3>Filter by genre:</h3>
                                <select id="genreSelect" onChange={() => this.changeGenre()}>
                                {
                                    this.state.genres.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(genre => {
                                        return(
                                            <option value={genre} key={genre}>
                                                {genre}
                                            </option>
                                        );
                                    })
                                }
                                </select>
                            </label>
                        </div>
                        
                        <hr className="subtitleBar" />

                        
                        {
                            AnimeList.animes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).filter(anime => this.state.defaultGenre ? anime.genre.indexOf(this.state.defaultGenre) !== -1 : anime).map(anime => {
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