import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col } from "react-bootstrap"
import SearchBook from "../SearchBook/SearchBook"
import { useState } from "react"
 import 'bootstrap/dist/css/bootstrap.min.css';



const CardBook = ({price, img, category, title}) =>{
    
    const [isSelet, setIsSelet] = useState(false)
    
    const toggeleSelet = () =>{
        setIsSelet(!isSelet)
        console.log(isSelet)
    }
    return (
        
        <Col sm={12} md={4} lg={3}>
                
            <Card className ={`h-100${isSelet? "border-5 border-danger":""}`} onClick={toggeleSelet}>
                <CardImg  
                    variant="top"
                    src={img}
                    className="h-100 w-100 object-fit-cover"
                />  
                <CardBody>
                    <CardTitle>
                       {category} 
                    </CardTitle>
                    <CardText className="text-truncate">
                        {title}
                    </CardText>
                    <CardText>
                        {price}
                    </CardText>
                    <Button variant="warning">
                        Compra
                    </Button>
                </CardBody>

            </Card>
        
        </Col>
    )
}


export default CardBook