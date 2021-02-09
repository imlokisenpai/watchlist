import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SerieDiv.css';
import SerieList from './Series.json';
import Load from '../loading/Loading';

export default class SerieDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultGenre: "Pupi",
            genres: SerieList.series.filter(x => x === this.defaultGenre)
        }
    }

    serieListConsole(){
        console.log(SerieList);
    }

    openInfo(inf){
        this.setState({
            serieInfo: inf,
            redirect: this.state.redirect + inf.id
        });
    }

    render(){
        this.serieListConsole();
        return(
            <div className="seriesDiv">
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
                    SerieList.series.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(serie => {
                        return(
                            <Link to={'/watchlist/' + serie.id} key={serie.id} className="serieBlock" onClick={() => this.props.data.chgInf(serie)}>
                                <img className="serieImg" src={serie.img} alt={serie.name} id={serie.id} />
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}