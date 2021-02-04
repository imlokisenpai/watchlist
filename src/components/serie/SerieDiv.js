import React, {Component} from 'react';
import './SerieDiv.css';
import SerieList from './Series.json';
import Load from '../loading/Loading'

export default class SerieDiv extends Component{
    state = {
        series: []
    }

    serieListConsole(){
        console.log(SerieList);
    }
    render(){
        this.serieListConsole();
        return(
            <div className="seriesDiv">
                <Load />
                {
                    SerieList.series.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(serie => {
                        return(
                            <div key={serie.id} className="serieBlock">
                                <img className="serieImg" src={serie.img} alt={serie.name} id={serie.id} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}