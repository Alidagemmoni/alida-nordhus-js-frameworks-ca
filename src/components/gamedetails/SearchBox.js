import React from "react";
import PropTypes from "prop-types";

function Search({ doSearch }) {
    return (
        <input
            placeholder="Search by name..."
            onChange={function(e) {
                // console.log(e.target.value);
                doSearch(e.target.value);
            }}
        />
    );
}

Search.propTypes = {
    doSearch: PropTypes.func.isRequired
};

export default Search;