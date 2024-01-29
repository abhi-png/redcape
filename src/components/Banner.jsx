import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Banner = () => {
    return (
        <div>
            <div className="items-center p-10 flex bg-slate-800">
                <h1>Create Your Own Genuine Web Masterpiece</h1>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <Container>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner