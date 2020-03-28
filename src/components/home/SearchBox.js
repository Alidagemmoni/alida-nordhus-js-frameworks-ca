import React from "react";
import PropTypes from "prop-types";

function Search({ doSearch }) {
    return (
        <input className="searchBox"
            placeholder="Search for games..."
            onChange={function(e) {
                doSearch(e.target.value);
            }}
        />
    );
}

//import React from "react";
//import { MDBCol } from "mdbreact";

//const SearchPage = () => {
  //return (
    //<MDBCol md="6">
      //<div className="active-pink-3 active-pink-4 mb-4">
        //<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
     // </div>
   // </MDBCol>
  //);
//}

//export default SearchPage;


Search.propTypes = {
    doSearch: PropTypes.func.isRequired
};

export default Search;