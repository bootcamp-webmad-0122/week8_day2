import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CoasterCard.css'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'


const CoasterCard = ({ title, imageUrl, _id, owner }) => {

    const { user } = useContext(AuthContext)

    const aCurrar = () => alert('TE LO CURRAS')

    return (
        <Card className="CoasterCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>

                <Card.Title>{title}</Card.Title>
                <Link to={`/detalles/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">Ver detalles</Button>
                        {user?._id === owner && <Button variant="warning" onClick={aCurrar}>Editar</Button>}
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default CoasterCard