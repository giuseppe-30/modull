import { Col, Container, Row } from "react-bootstrap"
import { LogoAmazon, LogoFacebook, LogoTwitch } from "react-ionicons"

const Footer = () =>{
    return(
        <footer className="bg-black text-white p-4 mt-5">
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                             <h2>
                                MY BOOK     
                            
                            </h2>               
                            <div className="d-flex gap-3 align-items-center justify-content-center">
                                   <LogoFacebook
                                        color="white"
                                        title="a"
                                        width="40px"
                                        height="40px"
                                   />

                                   <LogoTwitch
                                        color="white"
                                        title="b"
                                        width="40px"
                                        height="40px"

                                   />

                                   <LogoAmazon
                                        color="white"
                                        title="h"
                                        width="40px"
                                        height="40px"
                                   
                                   />
                                         
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    )

}


export default Footer