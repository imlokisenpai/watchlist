import React, {Component} from 'react';
import Load from '../loading/Loading';

//Styles
import './WatchInfo.css';

export default class WatchInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 'Pupi',
            name: 'Boku no Hero Academy',
            desc: 'In a world where most of the population is gifted with special powers known as "Quirks", Izuku Midoriya is a young boy who always dreamed of becoming a hero, despite not having a Quirk himself, until one day he is attacked by a villain made of sludge and is rescued by none other than All Might, the most famous hero ever and his idol since childhood.',
            img: "https://github.com/Souto751/project-imgs/blob/main/watchlist%20page%20imgs/anime/bokuNoHero.jpg?raw=true",
            state: 'waiting',
            genre: ['Adventure fiction', 'Fantasy', 'Superhero fiction', 'Comedy', 'Science Fiction'],
            seasons: 4,
            finished: 'Next release: Season 5',
            episodes: 88
        };
    };

    showOnConsole(){
        console.log(this.state);
    }

    render(){
        this.showOnConsole();
        return(
            <div className="globalContainer">
                <Load />
                <div className="centerImg">
                    <div className="imgContainer">
                        <img src={this.state.img} alt={this.state.name} />
                    </div>
                </div>
                <div className="data">
                    <div className="title">
                        <h2>{this.state.name}</h2>
                    </div>
                    <div className="info">
                        <div className="descDiv">
                            <div><h3 className="subtitle">Description</h3></div>
                            <div><p>{this.state.desc}</p></div>
                        </div>
                        <div className="genreDiv">
                            <div><h3 className="subtitle">Genres:</h3></div>
                            <div><p className="fixHeight">{this.state.genre.join(', ')}</p></div>
                        </div>
                        <div className="seasonDiv">
                            <div className="boxedDiv">
                                <div><h3 className="subtitle boxedDivMargin">Seasons</h3></div>
                                <div><p>{this.state.seasons}</p></div>
                            </div>
                            <div className="boxedDiv">
                                <div><h3 className="subtitle boxedDivMargin">Episodes</h3></div>
                                <div><p>{this.state.episodes}</p></div>
                            </div>
                        </div>
                        <div className="stDiv">
                            <div><h3 className="subtitle">State:</h3></div>
                            <div><p className="fixHeight">{this.state.finished}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}