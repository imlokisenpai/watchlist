import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieDiv.css';
import MovieList from './Movies.json';
import Load from '../loading/Loading';

export default class MovieDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultGenre: "",
            subtitle: "Complete List",
            genres: ["-No Filter-", ...new Set(MovieList.movies.flatMap(x => x.genre))].sort()
        }
    }

    movieListConsole(){
        console.log(MovieList);
        console.log(this.state.genres)
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
        this.movieListConsole();
        return(
            <div>
                <Load />
                <div className="moviesDiv">
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
                        MovieList.movies.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).filter(movie => this.state.defaultGenre ? movie.genre.indexOf(this.state.defaultGenre) !== -1 : movie).map(movie => {
                            return(
                                <Link to={'/watchlist/' + movie.id} key={movie.id} className="movieBlock" onClick={() => this.props.data.chgInf(movie)}>
                                    <img className="movieImg" src={movie.img} alt={movie.name} id={movie.id} />
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}