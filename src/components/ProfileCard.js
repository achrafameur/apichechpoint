import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from "react-router-dom"

const ProfileCard = ({user}) => {
    return (
        <div>
            <Card style={{ width: '25rem',marginTop:'50px' }}>
                <Card.Img variant="top" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text >
                        <p style={{marginLeft:'30px'}}>
                        Email : {user.email} <br/>
                        Phone : {user.phone}
                        </p>
                    </Card.Text>
                    <Link to={`/users/${user.id}`}>
                    <Button variant="success" className="btn btn_success"> Visit Profile</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}


export default ProfileCard

