import React, {Component} from 'react';
import Logo404 from './404page.png';
import './404Page.css';

export default class Page404 extends Component {
    render(){
        return(
            <div className="errorContainer">
                <div className="imgContainer"><img src={Logo404} alt="error404" /></div>
                <div className="textContainer">
                    <div>
                        <h2>404</h2>
                        <p>Page not found!</p>
                    </div>
                </div>
            </div>
        );
    }
}