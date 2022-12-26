# Tienda E-commerce "Fashion"
Este proyecto es personal en el cual se vuelca todo lo aprendido hasta el momento.
Esta desarrollado desde el lado del Front End con React.js y desde el Back End trabajando bajo la arquitectura REST con Node.js, Express y MongoDB para la base de datos.
Actualmente se encuentra en desarrollo.

## Deployment
##### _Cliente_
- Deploy en Vercel : [Link](https://e-commercer-fashion.vercel.app/)
- Deploy en Render : [Link](https://api-eccomerce.onrender.com)

## Descarga del proyecto:
El proyecto esta estructurado de la siguiente forma:
##### _/Client_
Esta carpeta contiene el Front End.
##### _/src_
Esta carpeta contiene la API 
### API de E-commerce 
API E-commerce es el servidor principal para el uso de la aplicacion web construido en react, esta contiene la logica de negocio general

### _Elementos necesarios_

- Email y [contraseña de aplicaciones](https://support.google.com/accounts/answer/185833?hl=es) para el uso de Nodemailer
- [URI](https://www.mongodb.com/docs/manual/reference/connection-string/) para la conexion a la base de datos

### _Tecnologias_

Api E-commerce utiliza una serie de proyectos de código abierto para funcionar correctamente: 

- [node.js] - 
- [Express] -
- [Nodemailer] - envios de email
- [JWT] - token de seguridad
- [MongoDB] - Base de dato no relacional
- [Mongoose] - [ORM de MongoDB](https://mongoosejs.com/docs/guide.html)

### _Installation_

La api requires [Node.js](https://nodejs.org/) v10+ to run.

Instale las dependencias y devDependencies e inicie el servidor.

```sh
cd s3-06-m-reactnative-node/server
npm i
node app
```

Para entornos de producción…

```sh
URI_DB=Conexion con MongoAtlas
JWT_SECRET=palabra secreta
EMAIL=
KEY_MAIL=contraseña de aplicacion del email

```

