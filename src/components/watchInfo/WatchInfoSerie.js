import React, {Component} from 'react';
import Load from '../loading/Loading';

//Styles
import './WatchInfo.css';

export default class WatchInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.i.id,
            name: this.props.i.name,
            desc: this.props.i.desc,
            img: this.props.i.img,
            state: this.props.i.state,
            genre: this.props.i.genre,
            seasons: this.props.i.seasons,
            finished: this.props.i.finished,
            episodes: this.props.i.episodes,
            ovas: this.props.i.ovas,
            movies: this.props.i.movies
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
                        <div className="descDiv animated d1">
                            <div><h3 className="subtitle">Description</h3></div>
                            <div className="descMargin infoSize"><p>{this.state.desc}</p></div>
                        </div>
                        <div className="genreDiv animated d2">
                            <div><h3 className="subtitle">Genres:</h3></div>
                            <div><p className="fixHeight infoSize">{this.state.genre.join(', ')}</p></div>
                        </div>
                        <div className="seasonDiv">
                            <div className="boxedDiv animated d3">
                                <div><h3 className="subtitle boxedDivMargin">Seasons</h3></div>
                                <div className="infoSize"><p>{this.state.seasons}</p></div>
                            </div>
                            <div className="boxedDiv animated d3">
                                <div><h3 className="subtitle boxedDivMargin">Episodes</h3></div>
                                <div className="infoSize"><p>{this.state.episodes}</p></div>
                            </div>
                        </div>
                        <div className="stDiv animated d4">
                            <div><h3 className="subtitle">State:</h3></div>
                            <div className="infoSize"><p className="fixHeight">{this.state.finished}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}