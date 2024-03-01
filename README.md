# Project Name

This repository is a [json-server](https://github.com/fraestgue/modulo2server) created to feed data into the React Application below.

#### [Client Repo here](https://github.com/fraestgue/project-modulo2)

# Server Structure

## Collections

### sales

```javascript
{
  price,
  condition,
  platform,
  name,
  background_image,
  gameApiId,
  seller
}
```



## Used API Endpoints in the App

Methods | URL                                     |  BODY REQUEST | DESCRIPTION                   | 
 -------| --------------------------------------- | ------------- | ----------------------------- |
 GET    | `/games`                                | n/a           | Listar juegos                 | 
 GET    | `/platforms`                            | n/a           | Listar plataformas            | 
 GET    | `/api/games?key=KEY&platform=platformId`| n/a           | Listar juegos por plataformas | 
 GET    | `/games/:gameId`                        | n/a           | Listar detalles del juego     | 


## Used JSON Endpoints in the App 

Methods | URL                      |  BODY REQUEST                                                          | DESCRIPTION                        | 
 -------| ------------------------- | ---------------------------------------------------------------------- | ---------------------------------- |
 POST   | `/sales`                  | {Price, condition,platform, name, background_image, gameApiId, seller} | Añadir venta                       | 
 GET    | `/sales`                  | n/a                                                                    | Listar juegos en venta             | 
 GET    | `/sales?gameApiId=gameId` | n/a                                                                    | Listar si el juego esta a la venta | 
 PUT    | `/sales/:salesId`         | {Price, condition,platform, name, background_image, gameApiId, seller} | Modificar venta                    | 
 GET    | `/sales/:salesId`         | n/a                                                                    | Listar detalles venta              | 
 DEL    | `/sales/:salesId`         | n/a                                                                    | Eliminar venta                     | 


 ## Links

### Collaborators
- Fran Estepa
[Github](https://github.com/fraestgue)
[Linkedin](https://www.linkedin.com/in/francisco-estepa-guerra-400417163/)

- Pablo Sánchez
[Github](https://github.com/PabloSanchezCamara)
[Linkedin](https://www.linkedin.com/in/pablo-sanchez-camara-b143892b4/)

### Project

[Repository Link Client](https://github.com/fraestgue/project-modulo2)

[Repository Link Server](https://github.com/fraestgue/modulo2server/blob/main/server.js)

[Deploy Link](https://game-hype.netlify.app/)

### Excalidraw

[Link](https://excalidraw.com/#json=DUK8iYyh_iC9USCW0xwNu,F2yriPEAfDA5N5nRXMxIqg)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1YvOv6LuQWPMx6dTJjLq3FJRZkD_5auRBuORS2cd7pPc/edit#slide=id.g2be6dd33bb5_0_29)





