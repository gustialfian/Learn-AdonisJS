# Learning Adonis API application

This repo is me trying to learn basic API server in Adonis and it turns out good.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds
6. Routing
7. Controller
8. Middleware
9. Logger
10. Test suit

## Setup
```bash
npm install
adonis migration:run
adonis serve --dev
```

## Test
```bas
adonis test
```

## Endpoint
* **POST** `/register`
  * body
  ```json
  {
    "username": "admin",
    "password": "admin",
    "email": "admin@mail.com"
  }
  ```
* **GET** `/todo` 
  * Header: `Authorization: Bearer <token>`
* **GET** `/todo/:id`
  * Header: `Authorization: Bearer <token>`
* **POST** `/todo` 
  * Header: `Authorization: Bearer <token>`
  * body 
  ```json
  {
    "name": "Learning AdonisJS",
    "status": false,
    "try": 3
  }
  ```
* **PUT** `/todo/:id`
  * Header: `Authorization: Bearer <token>`
  * body
  ```json
  {
    "name": "Learning AdonisJS",
    "status": false,
    "try": 3
  }
  ```
* **DELETE** `/todo/:id`
  * Header: `Authorization: Bearer <token>`