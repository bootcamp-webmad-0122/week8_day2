import { useState, useContext } from "react"
import { Form, Button } from 'react-bootstrap'
import authService from "../../services/auth.service"
import { MessageContext } from './../../context/userMessage.context'
import { useNavigate } from 'react-router-dom'

function SignupForm() {

    const [signupForm, setSignupForm] = useState({
        username: "",
        password: "",
        email: ""
    })

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .signup(signupForm)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Éxito', desc: 'Te has registrado correctamente' })
                navigate('/')
            })
            .catch(err => console.log('OJO QUE AQUI VAN LOS ERRORES, MENDRUGO', err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" name="username" value={signupForm.username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={signupForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={signupForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Acceder</Button>

        </Form>
    )
}

export default SignupForm