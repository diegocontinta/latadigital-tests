# Exercise 01 - APIREST express

Ejercicio de API rest para latadigital con express contiene un CRUD para el modelo `user` e implementa las siguentes especificaciones.

1. Implementa autenticación a traves de un middleware utilizando JWT (JSON Web Tokens)
2. Utilizar buenas prácticas de seguridad para proteger contra ataques de inyección SQL y XSS (Implementación de ORM)
3. Mantener una estructura de código clara y semántica en las rutas y controladores.

## Scaffolind y como correr la api de prueba

Trabaje sobre el paradigma MVC para lo cual se desarrollaron los siguentes folders

 `config:` agrega conexión para BD usand las variables del archivo `.env` 

 `controllers:` contiene el controlador para la autenticación y para la entidad usuario

`middlewares:` contiene el middleware para la validación del token JWT

`models:` contiene la definición del modelo user para el ORM sequelize

`routes:` contiene las rutas para el manejo limpio de los controlladores


La api puede ser desplegada usando los siguentes comandos y contando con una BD para funcionar basada en el ejercicio 05. Corre sobre la versión de node `21.6.1`
npm `10.2.4` se utiliza nodemon para revisar los cambios despues de `npm install` pueden usar `npm start` para correr la app con nodemon. 

### Endpoints `port:3002` 


 **Auth Endpoints prefix**  ``/auth/{route} ``


1. `post` `/login` si el usuario inicia sesion retorna token JWT


**User Endpoints prefix**  ``/users/{route} ``


1. `get` `/all` retorna todos los usuarios del la BD
2. `get` `/users/{id}` retorna el detalle de un usuario según su ID
3. `post` `/store` Inserta un usuario 
4. `post` `/update` Actualiza usuario basado en ID
5. `post` `/delete` Elimina usuario basado en ID


