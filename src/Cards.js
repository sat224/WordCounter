import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards({c_count, w_count}) {

  return (
    <Container style={{
        display:'flex',
        justifyContent:'center',
        marginBottom:15,
        borderRadius:'50%'
    }}>
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>W_Count <br></br>{ w_count }</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>C_Count <br></br>{ c_count }</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

  );
}

export default Cards;
