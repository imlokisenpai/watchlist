import React, {Component} from 'react';
import './AnimeDiv.css';
import AnimeList from './Animes.json';

class AnimeDiv extends Component{
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

export default AnimeDiv;