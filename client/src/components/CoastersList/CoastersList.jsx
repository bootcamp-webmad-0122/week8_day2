import { Row, Col } from 'react-bootstrap'
import CoasterCard from '../CoasterCard/CoasterCard'

const CoastersList = ({ coasters }) => {

    return (
        <Row>
            {coasters.map(coaster => {
                return <Col md={4} key={coaster._id}> <CoasterCard {...coaster} /> </Col>
            })}
        </Row>
    )
}

export default CoastersList