import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import GameItems from "../gamedetails/GameItems";
import SearchBox from "./SearchBox";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home() {

    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(function() {
        fetch(BASE_URL) 
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.dir(json.results); 
                setResults(json.results);
                setFilteredResults(json.results);
            })
            .catch(function(error) {
                console.log(error);
            });
    }, []);

    function handleSearch(inputValue) {
        const lowerCaseInput = inputValue.toLowerCase();

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
                <Col className="column" key={result.name} lg={4} md={6} sm={12}>
                <Card border="danger">
                    <Card.Body>
                        <Card.Title className="text-center">{result.name}</Card.Title>
                        <Card.Img variant="top" className="image" src={result.background_image} alt={result.name} />
                        <GameItems name={result.name} rating={result.rating} released={result.released}/>
                        <Card.Link className="bg-danger text-white button" href={href}>Details</Card.Link>
                    </Card.Body>
                </Card> 
                </Col>
            );
        });
    }

    return (
        <div>
            <h1 className="text-center text-dark">Video games</h1>
            <SearchBox doSearch={handleSearch} />
            <Row>
            {displayResults()}
            </Row>
        </div>
    );
}

export default Home;
