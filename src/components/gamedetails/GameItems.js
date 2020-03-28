import React from "react";
import PropTypes from "prop-types";

function GameItems(props) {
    return (
        <div>
            <p>
                <b>Rating: {props.rating}</b> 
            </p>
            <p>
                <b>Release date: {props.released}</b>
            </p>
        </div>
    );
}

GameItems.propTypes = {
    rating: PropTypes.number.isRequired,
    released: PropTypes.string.isRequired
};

export default GameItems;
