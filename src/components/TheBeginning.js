import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SwearOathVideo from '../assets/SwearOathVideo.MOV';



function TheBeginning() {
    return (
        <Container fluid>
            <Row>
                <Col md={12} className="horizontalLine p-0">
                </Col>
            </Row>
            <Row className="p-0 animate__animated animate__zoomIn">
                <video className="p-0 " width="100%" height="auto" controls src={SwearOathVideo}></video>
                <Col md={12} className="horizontalLine">
                </Col>
            </Row>
            <Row>
                <Col className="paragraphTxt d-flex justify-content-center mt-3" md={12}>
                    <h4 className="TitleTxt">Officer's Oath</h4>
                </Col>
            </Row>
            <Row>
                <Col md={2}></Col>
                <Col className="d-flex justify-content-center" md={8}>
                   <p className="paragraphTxt FirstP">I (state your name) do solemnly swear, that I will support and defend the Constitution of the United States, and the Constitution of the State of California, against all enemies, foreign and domestic, that I will bear true faith and allegiance, to the Constitution of the United States and the Constitution of the state of California, that I take this obligation freely, without any mental reservation or purpose of evasion, that I will well and faithfully discharge the duties upon which I am about to enter.</p>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default TheBeginning