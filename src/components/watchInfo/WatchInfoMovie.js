//React
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Import Component
import Load from '../loading/Loading';

//JSON
import MovieList from '../movie/Movies.json';

//Styles
import './WatchInfo.css';

//Component
export default class WatchInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.i.inf.id,
            name: this.props.i.inf.name,
            desc: this.props.i.inf.desc,
            img: this.props.i.inf.img,
            genre: this.props.i.inf.genre,
            lenght: this.props.i.inf.lenght,
            collection: this.props.i.inf.collection
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
                                <div><h3 className="subtitle boxedDivMargin">Lenght</h3></div>
                                <div className="infoSize"><p>{this.state.lenght}</p></div>
                            </div>
                        </div>
                        <div className="animated d4">
                            <h3 className="subtitle boxedDivMargin">Collection:</h3>
                            <div className="collectionMovies">
                            {
                                MovieList.movies.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)).filter(movie => this.state.collection ? movie.collection === this.state.collection : movie.name === this.state.name).map(movie => {
                                    return(
                                        <Link to={'/watchlist/' + movie.id} key={movie.id} className="movieCollectionDiv" onClick={() => {
                                            this.setState({
                                                id: movie.id,
                                                name: movie.name,
                                                desc: movie.desc,
                                                img: movie.img,
                                                genre: movie.genre,
                                                lenght: movie.lenght,
                                                collection: movie.collection
                                            })
                                        }}>
                                            <img className="movieCollectionImg" src={movie.img} alt={movie.name} id={movie.id} />
                                        </Link>
                                    );
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}