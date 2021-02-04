import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './AnimeDiv.css';
import AnimeList from './Animes.json';
import Load from '../loading/Loading';
import Info from '../watchInfo/WatchInfo';

class AnimeDiv extends Component{
    state = {
        animeInfo: {},
        redirect: '/'
    }

    animeListConsole(){
        console.log(AnimeList);
    }
    
    openInfo(inf){
        this.setState({
            animeInfo: inf,
            redirect: this.state.redirect + inf.id
        });
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
                            <Link to={'/' + anime.id} key={anime.id} className="animeBlock">
                                <img className="animeImg" src={anime.img} alt={anime.name} id={anime.id} onClick={() => this.openInfo(anime)} />
                            </Link>
                        )
                    })
                }
                </div>

                <Route exact path={this.state.redirect}><Info i={this.state.animeInfo} /></Route>
            </div>
        );
    }
}

export default AnimeDiv;