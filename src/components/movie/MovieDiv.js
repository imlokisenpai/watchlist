import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieDiv.css';
import MovieList from './Movies.json';
import Load from '../loading/Loading';

export default class MovieDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultGenre: "Pupi",
            genres: MovieList.movies.filter(x => x === this.defaultGenre)
        }
    }

    movieListConsole(){
        console.log(MovieList);
    }

    openInfo(inf){
        this.setState({
            movieInfo: inf,
            redirect: this.state.redirect + inf.id
        });
    }

    render(){
        this.movieListConsole();
        return(
            <div className="moviesDiv">

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
                    MovieList.movies.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(movie => {
                        return(
                            <Link to={'/watchlist/' + movie.id} key={movie.id} className="movieBlock" onClick={() => this.props.data.chgInf(movie)}>
                                <img className="movieImg" src={movie.img} alt={movie.name} id={movie.id} />
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}