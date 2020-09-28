import { Portrait } from '@material-ui/icons';
import React from 'react';
import Portrait1 from "../../assets/logo192.png"

export default class Recommendation extends React.Component {

    
    render() {
        return(
            <div class="testimonials">

                <div class= "left-half" style={ {"background-image": "url(" + process.env.PUBLIC_URL + this.props.imageURL + ")", "background-size":"cover", "background-color": "#eee", "border-radius": "100%"}} ></div>

                <h5> {this.props.name} </h5>
                <p> {this.props.blurb} </p>
            </div>
        );
    }
}