import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import GameItems from "../gamedetails/GameItems";
import SearchBox from "../gamedetails/SearchBox";

function Home() {
    // state = local variables that belong only to this component
    // set up state variables
    // make the api call
    // when api call comes back store the return value in state variables
    // loop over the state variables to display

    const [results, setResults] = useState([]); // default value is empty array
    const [filteredResults, setFilteredResults] = useState([]);

    // useEffect runs when component gets mounted
    // also when the component gets updated

    // when  the component gets loaded into the browser
    // make the api
    useEffect(function() {
        fetch(BASE_URL) // make the call to the api
            .then(function(response) {
                return response.json(); // what comes back which is a promise
            })
            .then(function(json) {
                console.dir(json.results); // this is the actual return value from the value
                setResults(json.results);
                setFilteredResults(json.results);
            })
            .catch(function(error) {
                console.log(error);
            });
    }, []);

    function handleSearch(inputValue) {
        const lowerCaseInput = inputValue.toLowerCase();

        // filter function creates a new array from an existing array
        const filteredArray = results.filter(function(result) {
            const lowercaseName = result.name.toLowerCase();

            if (lowercaseName.startsWith(lowerCaseInput)) {
                return true;
            } else {
                return false;
            }
        });

        setFilteredResults(filteredArray);
    }

    function displayResults() {
        if (filteredResults.length === 0) {
            return <div>No results</div>;
        }

        return filteredResults.map(function(result) {
            const href = "game/" + result.id;

            return (
                <div className="card">
                    <h1 className="Card.Title" key={result.name}>{result.name}</h1>
                    <img className="cardImg" src={result.background_image} alt={result.background_image} />
                    <GameItems name={result.name} rating={result.rating} released={result.released} />
                    <a href={href}>Details</a>
                </div>
            );
        });
    }

    return (
        <div>
            <SearchBox doSearch={handleSearch} />

            {displayResults()}
        </div>
    );
}

export default Home;
