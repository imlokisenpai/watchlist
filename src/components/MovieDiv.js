import React, {Component} from 'react';
import './MovieDiv.css';
import AnimeList from './Movies.json';

export default class MovieDiv extends Component{
    state = {
        animes: []
    }

    animeListConsole(){
        console.log(AnimeList);
    }
    render(){
        this.animeListConsole();
        return(
            <div className="animesDiv">
                {
                    AnimeList.animes.map(anime => {
                        return(
                            <div key={anime.id} className="animeBlock">
                                <img className="animeImg" src={anime.img} alt={anime.name} />
                                <p className="animeName">{anime.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}