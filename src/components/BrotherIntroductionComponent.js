import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import OfficialEmployment from '../assets/OfficialEmployment.JPG';
import ShopWithACopEvent from '../assets/ShopWithACopEvent.JPG';
import RecievingBadge from '../assets/RecievingBadge.JPG';
import IvanGeared2 from '../assets/IvanGeared2.JPG';
import BadboysAudio from '../assets/BadBoys(ThemeFromCops).mp3';
import "animate.css"; 

export default function BrotherIntroductionComponent() {
    return (
        <div>
            <Container fluid className="p-0">
                <Row>
                    <Col md={12} className="horizontalLine">
                    </Col>
                </Row>
            </Container>
            <Carousel className="animate__animated animate__bounceInDown" interval={null}>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100"
                        src={ShopWithACopEvent}
                        alt="Shop with a cop event held at Walmart in Stockton to establish rapport with the community."
                    />
                    <Carousel.Caption>
                        <h3 className="carouselTitle">Shop With A Cop Event</h3>
                        <p className="carouselTxt">Event held at a Walmart to establish rapport with the community.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100"
                        src={OfficialEmployment}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="carouselTitle">Official Employment</h3>
                        <p className="carouselTxt">Announcing employment with former police chief Eric Jones.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100"
                        src={RecievingBadge}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="carouselTitle">Graduation</h3>
                        <p className="carouselTxt">Officers being sworn in.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row>
                <Col md={12} className="horizontalLine">
                </Col>
            </Row>
            <Container classame="p-0">
                <Row>
                    <Col className="d-flex justify-content-center" md={12}>
                        <h1 className="TitleTxt mt-3"><i>My Influence</i></h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="order-xs-2 order-sm-2 order-md-2 order-lg-2 order-xl-1 order-xxl-1" sm={12} md={12} lg={12} xl={6} xxl={4}>
                        <figure>
                            <img
                                className="photographs"
                                src={IvanGeared2}
                                width="100%"
                                height="100%"
                                alt="Graduation photo including my brother and his friends."
                            />
                            <figcaption className="paragraphTxt mt-1 d-flex justify-content-center">My brother</figcaption>
                        </figure>
                    </Col>
                    <Col className="order-xs-1 order-sm-1 order-md-1 order-lg-1 order-xl-2 order-xxl-2 mt-xs-4 mt-sm-4 mt-md-4 mt-md-0 mt-0-lg mt-0-xxl mt-5 d-flex justify-content-center" sm={12} md={12} lg={12} xl={6} xxl={8}>
                        <p className="paragraphTxt FirstP">
                            A person who has been influential to me is my older brother Ivan. From a young age he decided that he wanted to join the field of law enforcement and become a police officer. After obtaining his Associates in both Business and Criminology he proceeded to apply directly to the Stockton Police Department. His presence both online and offline were heavily scrutinized and inevitably the department decided to offer him a scholarship to pay for his academy training and was officially offered a position once his training was completed. Furthermore, the academy was no easy feat, he was challenged physically, emotionally and mentally, all while having little to no margin for error, my brother studied laboriously and deprived himself of his pastimes such as watching anime or going out, as my brother loves to say “no sacrifice no victory!” (Transformers, 2007). After completing his academy training, he would begin his career as an official officer for the Stockton Police Department.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-5 d-flex justify-content-center" md={12}>
                        {/* <audio controls autoplay
                            src={BadboysAudio}
                            type="audio/mpeg">
                        </audio> */}
                        <audio controls autoPlay>
                            <source src={BadboysAudio} type="audio/mpeg"></source>
                        </audio>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
