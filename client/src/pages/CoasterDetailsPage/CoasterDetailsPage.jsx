import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import coastersService from '../../services/coasters.service'
import { Container, Row, Col, Button } from 'react-bootstrap'

function CoasterDetailsPage() {

    const [coasterDetails, setCoasterDetails] = useState({})
    const { coaster_id } = useParams()

    useEffect(() => {
        coastersService
            .getOneCoaster(coaster_id)
            .then(({ data }) => setCoasterDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Detalles de {coasterDetails.title}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Información</h3>
                    <p>{coasterDetails.description}</p>
                    <h3>Especificaciones</h3>
                    <p>Longitud: {coasterDetails.length} metros</p>
                    <p>Inversiones: {coasterDetails.inversions}</p>
                </Col>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={coasterDetails.imageUrl} alt={coasterDetails.title} />
                </Col>
                <Link to="/galeria">
                    <Button variant="dark">Volver</Button>
                </Link>
            </Row>

        </Container>
    )
}

export default CoasterDetailsPage