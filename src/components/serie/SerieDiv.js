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
                    SerieList.series.map(serie => {
                        return(
                            <div key={serie.id} className="serieBlock">
                                <img className="serieImg" src={serie.img} alt={serie.name} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}