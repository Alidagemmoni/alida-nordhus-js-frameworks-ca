import React from "react";
import PropTypes from "prop-types";

function GameItems(props) {
    return (
        <div>
            <p>
                <b>Title: {props.title}</b>
            </p>
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
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
};

export default GameItems;
