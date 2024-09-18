import { Container, Row } from "react-bootstrap"
import fantasy from "../../ass/fantasy.json"
import CardBook from "../CardBook/CardBook"
import SearchBook from "../SearchBook/SearchBook"


const sliceBook = fantasy.slice(0,30)
const Main = () =>{
    return(
        <Container>
            <Row>
                    <SearchBook/>
                    {sliceBook.map((book) => (
                        <CardBook
                            key={book.asin}
                            title={book.title}
                            category={book.category}
                            price={book.price}
                            img={book.img}
                        />
                    ))}
            </Row>
                
            
        </Container>

    )
}


export default Main