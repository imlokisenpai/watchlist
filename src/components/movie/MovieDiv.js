import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './MovieDiv.css';
import MovieList from './Movies.json';
import Load from '../loading/Loading';
import Info from '../watchInfo/WatchInfo';

export default class MovieDiv extends Component{
    state = {
        movieInfo: {},
        redirect: '/'
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
                            <Link to={'/' + movie.id} key={movie.id} className="movieBlock">
                                <img className="movieImg" src={movie.img} alt={movie.name} id={movie.id} onClick={() => this.openInfo(movie)} />
                            </Link>
                        )
                    })
                }
            </div>

            <Route exact path={this.state.redirect}><Info i={this.state.movieInfo} /></Route>
        </div>
        );
    }
}