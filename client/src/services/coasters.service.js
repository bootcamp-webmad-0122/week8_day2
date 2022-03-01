import axios from 'axios'

class CoastersService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/coasters` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllCoasters = () => {
        return this.api.get('/getAllCoasters')
    }

    getOneCoaster = id => {
        return this.api.get(`/getOneCoaster/${id}`)
    }

    saveCoaster = coaster => {
        return this.api.post(`/saveCoaster`, coaster)
    }
}

const coastersService = new CoastersService()

export default coastersService