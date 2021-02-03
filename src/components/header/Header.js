//React
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//Components
import Animes from '../anime/AnimeDiv';
import Series from '../serie/SerieDiv';
import Movies from '../movie/MovieDiv';
import Home from '../home/Home';
import NoMatch from '../404/404Page';

//Styles
import './Header.css';

//Image
import WebLogo from './webLogo.png';
import MenuBtn from './menu.png';

export default class Header extends Component {
    render(){
        return(
            <header className="header">
                <div className="linkContainer">
                    <Router>
                        <div className="links">
                            <h1 className="webTitle"><img src={WebLogo} alt="panda" /></h1>
                            <input type="checkbox" id="chkbx" />
                            <label for="chkbx">
                                <img src={MenuBtn} alt="menu" className="menuBtn" />
                            </label>
                            <div className="link-list">
                                <Link exact to="/watchlist/" className="link">Home</Link>
                                <Link exact to="/watchlist/animes" className="link">Animes</Link>
                                <Link exact to="/watchlist/movies" className="link">Movies</Link>
                                <Link exact to="/watchlist/series" className="link">Series</Link>
                            </div>
                        </div>
                        <Switch>
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
                            <Route path='*' component={NoMatch}></Route>
                        </Switch>
                    </Router>
                </div>
            </header>
        )
    }
}