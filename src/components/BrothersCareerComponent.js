import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StocktonDepartmentSign from '../assets/StocktonDepartmentSign.jpeg';
import PassedFTOTraining from '../assets/PassedFTOTraining.JPG';
import PoliceLogo from '../assets/PoliceLogo.png';
import OfficerBadge from '../assets/OfficerBadge.png';
import WeMakeADifference from '../assets/WeMakeADifference.png';
//import photos you need!

export default function BrothersCareerComponent() {
  return (
    <Container fluid>
      <Row>
        <Col className="order-xs-2 order-sm-2 order-md-2 order-lg-2 order-xl-1 order-xxl-1 p-0" sm={12} md={12} lg={12} xl={12} xxl={12}>
          <img
            className="photographs animate__animated animate__fadeIn"
            src={PassedFTOTraining}
            width="100%"
            height="100%"
            alt="Picture of my brother recieving a certificate for passing his probation."
          />
        </Col>
      </Row>
      <Row>
        <Col className="paragraphTxt d-flex justify-content-center mt-4" md={12}>
          <h4 className="TitleTxt">Just Getting Started</h4>
        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col className=" justify-content-center" md={9}>
          <p className="paragraphTxt FirstP">
            One would believe that once my brother finished the academy things would be straightforward but it was actuality, it was only the beginning. My brother had just begun his field training officer program which included ride alongs with a variety of senior officers along with his probationary period in which he could get dismissed for any reason. A multiplicity of his seniors were personable and the others were not quite pleasant to say the least. Although some of his senior officers had given him a hard time and along the way attempted to discourage him from this line of work due to his smaller frame, my brother did not lose heart despite the fact that he would face different adversities all the time. In the photo above my brother recieved a certificate for passing his probation period.
          </p>
          <Col md={2}></Col>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mt-3">
        {/* <Col md={2}></Col> */}
        <Col md={3} className="d-flex justify-content-center">
          <img
            className=""
            src={PoliceLogo}
            height="200px"
            width="370px"
            alt="Stockton police department badge."
          />
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <img
            className=""
            src={OfficerBadge}
            height="200px"
            width="150px"
            alt="Another variation of the Stockton Police Badge."
          />
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <img
            className="mt-1"
            src={WeMakeADifference}
            height="200px"
            width="200px"
            alt="We make a difference, Stockton Police Department."
          />
        </Col>
        {/* <Col md={2}></Col> */}

      </Row>
    </Container>
  );
}
