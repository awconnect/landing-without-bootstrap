import React from 'react';

export default class Detail extends React.Component {


    orientDiv = () => {

        var orientation = this.props.imageOrient;
        return (orientation ? 
            <div class={"details-wrapper"}>

                <div class= "left-half" style={ {"background-image": "url(" + process.env.PUBLIC_URL + this.props.imageURL + ")", "background-size":"cover", "background-color": "#eee"}} >
                </div>
            
                <div class="right-half">
                    <div class="details-text-container">
                        <h5> {this.props.name} </h5>
                        <p> {this.props.blurb} </p> 
                    </div>
                </div>
            </div>
            :
            <div class={"details-wrapper"}>
                <div class="left-half">
                    <div class="details-text-container">
                        <h5> {this.props.name} </h5>
                        <p> {this.props.blurb} </p> 
                    </div>
                </div>

                <div class= "right-half" style={ {"background-image": "url(" + process.env.PUBLIC_URL + this.props.imageURL + ")", "background-size":"cover", "background-color": "#eee"}} >
                </div>

            </div>

        )
    }

    render() {
        return this.orientDiv();
    }
}