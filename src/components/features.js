import React from 'react';
import {FaTv, FaRegCheckCircle} from 'react-icons/fa';
import {ImStack} from 'react-icons/im';
import { motion } from "framer-motion"

export default class Feature extends React.Component {

    chooseIcon = () => {
        var whichIcon = this.props.icon;
        if (whichIcon === "TV") {
            return (<FaTv size="100%    " />);
        }
        else if (whichIcon === "stack") {
            return (<ImStack size="100%    "/>)
        }
        return (<FaRegCheckCircle size="100%    "/>);
    }

    render() {
        return(
            <div className="features">
                <motion.div   whileHover={{scale: 1.2,transition: { duration: 1 },}}>
                    {this.chooseIcon()}
                </motion.div>
                <h5> {this.props.name} </h5>
                <p> {this.props.blurb} </p>
            </div>
        );
    }
}