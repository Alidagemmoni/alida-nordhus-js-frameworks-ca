import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import {
    Link
  } from "react-router-dom";

function GameDetails() {
    const [detail, setDetail] = useState({});

    const { id } = useParams();

    const url = BASE_URL+ "/" + id;

    useEffect(() => {
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
            <img src={detail.background_image_additional} alt={detail.background_image_additional}/>
            <p>Description: {detail.description_raw}</p>
            <a href={detail.website}>Link to website</a>
            <br></br><Link to="/">Go back to home</Link>
        </div>
    );
}

export default GameDetails;
