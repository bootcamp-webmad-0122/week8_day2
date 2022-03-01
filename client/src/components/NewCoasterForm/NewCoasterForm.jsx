import { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { MessageContext } from '../../context/userMessage.context'
import { AuthContext } from '../../context/auth.context'
import coastersService from '../../services/coasters.service'


const NewCoasterForm = ({ closeModal, refreshCoasters }) => {

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { user } = useContext(AuthContext)

    const [coasterData, setCoasterData] = useState({
        title: '',
        description: '',
        length: 0,
        inversions: 0,
        imageUrl: ''
    })

    const { title, description, length, inversions, imageUrl } = coasterData


    const handleInputChange = e => {

        const { value, name } = e.target

        setCoasterData({
            ...coasterData,
            [name]: value           // computed propery names
        })
    }


    const handleSubmit = e => {

        e.preventDefault()

        coastersService
            .saveCoaster(coasterData)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Completado', desc: 'Nueva montaña rusa creada' })
                refreshCoasters()
                closeModal()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
                <Form.Label>Longitud (m)</Form.Label>
                <Form.Control type="number" value={length} onChange={handleInputChange} name="length" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inversions">
                <Form.Label>Inversiones</Form.Label>
                <Form.Control type="number" value={inversions} onChange={handleInputChange} name="inversions" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (pega la URL)</Form.Label>
                <Form.Control type="url" value={imageUrl} onChange={handleInputChange} name="imageUrl" />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">Crear montaña rusa</Button>
            </div>

        </Form >
    )

}

export default NewCoasterForm