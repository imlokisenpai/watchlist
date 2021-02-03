import React, {Component} from 'react';
import './MovieDiv.css';
import MovieList from './Movies.json';
import Load from '../loading/Loading'

export default class MovieDiv extends Component{
    state = {
        movies: []
    }

    movieListConsole(){
        console.log(MovieList);
    }
    render(){
        this.movieListConsole();
        return(
            <div className="moviesDiv">
                <Load />
                {
                    MovieList.movies.map(movie => {
                        return(
                            <div key={movie.id} className="movieBlock">
                                <img className="movieImg" src={movie.img} alt={movie.name} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}