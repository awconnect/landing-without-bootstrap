import React from 'react';
import Recommendation from "./recs/recommendation"
import people from "../assets/testimonials.json";

export default class Testimonials extends React.Component {

    render() {
        return(
            <div style={{"padding":"10px 0"}}>
                <h2 style={{"text-align": "center"}}>
                    What people are saying...
                </h2>
                <div class="testimonials-overlay">
                    <Recommendation imageURL={'/margaret.jpeg'} name={people.Margaret.name} blurb={people.Margaret.blurb}/>
                    <Recommendation imageURL={'/fred.jpeg'} name={people.Fred.name} blurb={people.Fred.blurb}/>
                    <Recommendation imageURL={'/sarah.jpg'} name={people.Sarah.name} blurb={people.Sarah.blurb}/>
                </div>

            </div>
        );
    }
}