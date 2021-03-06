import React from 'react';
import Card from 'react-bootstrap/Card';
import './TitleCard.css';

class TitleCard extends React.Component {
    render() {
        return  (
                <Card className="text-center text-white">
                    <Card.Body>
                        <Card.Title><em>S</em>WAPI</Card.Title>
                        <Card.Subtitle className="mb-2">Star Wars API</Card.Subtitle>
                        <Card.Text>WHO'S WHO IN THE STAR WARS UNIVERSE</Card.Text>
                    </Card.Body>
                </Card>
        )
    }
}

export default TitleCard;