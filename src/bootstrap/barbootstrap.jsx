import React from "react";
import "./boots.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, } from "react-bootstrap";
export{Nav,Jumbotron,Formnlink};

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container nav">
                    <a className="navbar-brand" href="#">Naufal Adriel Fauzi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Biografi</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>  
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact Me</a>  
                        </li>
                    </ul>
                    </div>
                </div>
    </nav>
        )
    }
}
class Jumbotron extends React.Component{
    render(){
        return(
            <div className="bg-light mb-4 p-5 jumbotron">
                <div className="container-fluid py-5 text-center">
                    <h1 className="mt-5 text-dark">Hi Adriel Here!</h1>
                </div>
            </div>
        )
    }
}

class Formnlink extends React.Component{
    render(){
        return(
            <>
            <h1>Kirim Pesan</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="nama@email.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>   
            </> 
        )
    }
}
