# Logged user server retrieve
- A través de [los interceptores de Axios](https://axios-http.com/docs/interceptors) aseguramos que cada petición adjunta la cabecera de autorización con el token
- En servidor, el Middleware de JWT verifica el token y genera la propiedad `req.payload` con los datos del usuario logueado

# Client owned conditional rendering
- A través del contexto de autorización disponemos de acceso para el ID del usuario logueado
- A través del servidor disponemos del ID del usuario que ha creado un item
