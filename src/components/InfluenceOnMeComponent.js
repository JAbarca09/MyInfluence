import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IvanGeared from '../assets/IvanGeared.JPG';

export default function InfluenceOnMeComponent() {
  return (
    <Container fluid className="p-0 animate__animated animate__flipInY">
      <Row>
        <Col md={12} className="horizontalLine">
        </Col>
      </Row>
      <Row>
        <Col className="mt-2 d-flex justify-content-center" md={12}>
          <h4 className="TitleTxt">My Brother's Impact On Me</h4>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={6} xxl={3}>
          <img
            className="photographs"
            src={IvanGeared}
            height="100%"
            width="100%"
            alt=""
          />
        </Col>
        <Col sm={12} md={12} lg={6} xxl={8}>
          <p className="mt-3 paragraphTxt FirstP">
          Despite being discouraged by both his instructors and senior officers and challenged by the streets of Stockton, my brother faced these challenges head on. He never had given up on himself nor his dream and because of this he has accomplished his objective. Although he has accomplished his goal, he's had a revelation. It's not over yet, he is just getting started and is concurrently deciding what his next goal in life is going to be. His influence has led me to instead follow my dreams, instead of going to college to learn something I probably would have disliked, to pursuing computer programming at CodeStack Academy. His accomplishments are like a torch of courage being passed on to me,  a reminder to be courageous, to face hardships head on, and to make the sacrifices necessary to accomplish my goals because everything that is difficult is worthwhile doing. Ultimately, once my goals are achieved, I will remember that there is always room for improvement.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
