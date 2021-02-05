import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieDiv.css';
import MovieList from './Movies.json';
import Load from '../loading/Loading';

export default class MovieDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieInfo: {}
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
            <div>
            <div className="moviesDiv">
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
        </div>
        );
    }
}