import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SerieDiv.css';
import SerieList from './Series.json';
import Load from '../loading/Loading';

export default class SerieDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultGenre: "",
            subtitle: "Complete List",
            genres: ["-No Filter-", ...new Set(SerieList.series.flatMap(x => x.genre))].sort()
        }
    }

    serieListConsole(){
        console.log(SerieList);
        console.log(this.state.genres);
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
        this.serieListConsole();
        return(
            <div>
                <Load />
                <div className="seriesDiv">
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
                        SerieList.series.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).filter(serie => this.state.defaultGenre ? serie.genre.indexOf(this.state.defaultGenre) !== -1 : serie).map(serie => {
                            return(
                                <Link to={'/watchlist/' + serie.id} key={serie.id} className="serieBlock" onClick={() => this.props.data.chgInf(serie)}>
                                    <img className="serieImg" src={serie.img} alt={serie.name} id={serie.id} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}