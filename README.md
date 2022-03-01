# Logged user server retrieve
- A través de [los interceptores de Axios](https://axios-http.com/docs/interceptors) aseguramos que cada petición adjunta la cabecera de autorización con el token:
  ````javascript
   this.api.interceptors.request.use((config) => {

      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
          config.headers = { Authorization: `Bearer ${storedToken}` }
      }

      return config
  })
  ````
- En servidor, el Middleware de JWT verifica el token y genera la propiedad `req.payload` con los datos del usuario logueado:
  ````javascript
  router.post('/whatever', isAuthenticated, (req, res) => {
      console.log('ID usuario logueado:', req.payload._id)
  })
  ````

# Client owned conditional rendering
- A través del contexto de autorización disponemos de acceso para el ID del usuario logueado
- A través de los datos de la API disponemos del ID del creador de un item:
  ````jsx
  {
    elm.owner === user._id && <p>Is owned</p>
  }
  ````
