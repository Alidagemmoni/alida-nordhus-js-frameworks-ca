import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function GameDetails() {
    const [detail, setDetail] = useState({});

    const { id } = useParams();

    const url = BASE_URL + id;

    useEffect(function() {
        console.log("ddd");
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log("josn", json);
                setDetail(json);
            })
            .catch(error => console.log(error));
    });

    
    return (
        <div>
            <h1>Title: {detail.name}</h1>
            <img src={detail.image} alt={detail.image}/>
            <p>Description: {detail.description}</p>
            <p>Website link: {detail.clip}</p>
        </div>
    );
}

export default GameDetails;
