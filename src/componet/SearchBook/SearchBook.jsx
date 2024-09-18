import { Col, Container, Row } from "react-bootstrap"



const SearchBook = ({}) =>{

    return(

        
            <Row>
                <Col>
                    <input 
                        placeholder="searchBook"
                        type="text" />
                        <button className="btn btn-primary">cerca</button>
                </Col>
            </Row>
        
    )
}



export default SearchBook