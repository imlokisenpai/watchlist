//React
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Components
import Animes from './AnimesGrl';
import Series from './SerieDiv';
import Movies from './MovieDiv';
import Home from './Home';

//Styles
import './Header.css'

export default class Header extends Component {
    render(){
        return(
            <header className="header">
                <div className="linkContainer">
                    <Router>
                        <div className="links">
                            <h1 className="webTitle">Pupi & Puxu's Watchlist</h1>
                            <div className="link-list">
                                <Link exact to="/watchlist/" className="link">Home</Link>
                                <Link exact to="/watchlist/animes" className="link">Animes</Link>
                                <Link exact to="/watchlist/movies" className="link">Movies</Link>
                                <Link exact to="/watchlist/series" className="link">Series</Link>
                            </div>
                        </div>
                        <Route exact path="/watchlist/" Component={Home}>
                            <Home />
                        </Route>
                        <Route exact path="/watchlist/animes" Component={Animes}>
                            <Animes />
                        </Route>
                        <Route exact path="/watchlist/movies" Component={Movies}>
                            <Movies />
                        </Route>
                        <Route exact path="/watchlist/series" Component={Series}>
                            <Series />
                        </Route>
                    </Router>
                </div>
            </header>
        )
    }
}