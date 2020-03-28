import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";

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
        <Col className="column">
            <Card border="danger">
                <Card.Title className="text-center">{detail.name}</Card.Title>
                <Card.Img className="image col-lg-5" src={detail.background_image_additional} alt={detail.background_image_additional}/>
                <Card.Text>{detail.description_raw}</Card.Text>
            <Card.Link className="bg-danger text-white button " href={detail.website}>Link to website</Card.Link>
        </Card>
        </Col>
    );
}

export default GameDetails;