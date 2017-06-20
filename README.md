## Objetivo

Generar una vista que muestre los usuarios en una lista. Si se clicka encima de un usuario, deberá aparecer una galería/lista con todas las fotos asociadas a ese usuario.

## Funcionalidad

He creado un componente único para la vista en la que añado una función que ejecuta la API y recibe por parámetro las diferentes rutas necesitadas. Luego genero funciones para los Usuarios, Fotos y Álbumes que me permiten añadir una lista con la respuesta recibida. Para los dos últimos concateno el ID correspondiente a través de un parámentro con la ruta deseada de la API.

## Instalación

Además de ReactJS he instalado un framework que me sirve como server para renderizar las vistas de ReactJS. Tan sólo se debe ejecutarse "run dev" en la terminal para iniciar el server.

## API Referencias

Tenemos un par de servicios desarrollados por nuestro departamento back-end, que nos dan la información necesaria para poder mostrar estos datos.

La dirección del servicio es: http://jsonplaceholder.typicode.com

Listado de usuarios GET http://jsonplaceholder.typicode.com/users
Albumes de un usuario GET http://jsonplaceholder.typicode.com/albums
Fotos de un album GET http://jsonplaceholder.typicode.com/photos
