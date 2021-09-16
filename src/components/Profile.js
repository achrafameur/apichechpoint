import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './style.css'


const Profile = ({ match }) => {
    const [user, setUser] = useState({});
    const fetchUser = () => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`)
        .then((res) => setUser(res.data[0]))
        .catch((err) => console.log(err));
    };


    useEffect(() => {
        fetchUser();
    }, [match]);

    return (
        <section className="container-fluid">

        <div className='box'>
            <div className="row ">
                <div className="col-md-4 offset-md-4 row-img-profile  ">
                <img
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    alt="user "
                    width="180px"
                    height="180px"
                    className="img-profile"
                />
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4 ">
                <h3 className="name-label">{user.name}</h3>
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4 name-label">
                <span className="email-label"><b>Email :</b> :{user.email}</span>
                </div>
            </div>
            
            <div className="row my-3">
                <div className="col-md-4 offset-md-4 name-label">
                <span className="phone-label"><b>Phone : </b>{user.phone}</span>
                </div>
            </div>     
        <br/>
        <Link to="/">
                <Button className="btn btn-info">Back to home page</Button>
        </Link>
        </div>
        </section>
    );
};

export default Profile;