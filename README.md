# TP2 - API REST

## Instalacion

* [ ] Asegurate de tener la ultima version de [node](https://nodejs.org/en)

* [ ] Instala las dependencias `npm install`

## Correr el proyecto

script `npm start` o `npm run watch`

## Probar

El proyecto corre en el puerto 8080: `http://localhost:8080`

### Rutas disponibles

- Ver todos los usuarios: GET "/users"

- Crear nuevo usuario: POST "/users"
```
  {
	  "nombre":  "Nombre", 
	  "apellido":  "Apellido", 
	  "email":  "nombre@mail.com", 
	  "estudiante":  false
  }
```

- Modificar parte de un usuario: PATCH "/users/update/`id`"
```
  {
	  "nombre":  "Nuevo Nombre"
  }
```
  
## Autora
** Laura Szmulewicz - Curso YA-21A **