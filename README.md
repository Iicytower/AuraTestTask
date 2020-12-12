# AuraTestTask

This application is for a cinema manager to manage cinema halls and cinema screenings. It has ten endpoints
1. **POST** /register
  ⋅⋅*It resives in request a JSON object with e-mail and password, for example:
  ```JSON
  {
    "email": "example@mail.com",
    "password": "ExamplePassword1!"
  }
  ```
2. **POST** /login
  ⋅⋅*It resives in request a JSON object with e-mail and password, for example:
  ```JSON
  {
    "email": "example@mail.com",
    "password": "ExamplePassword1!"
  }
  ```
#### All other endpoints require authentication, so you must register and login.

3. **POST** /authrequired/addCinemaHall
  ⋅⋅*It resives in request a JSON object with hall capacity and hall name, for example:
  ```JSON
  {
    "capacity": 140,
    "name": "Terra"
  }
  ```
4. **POST** /authrequired/addCinemaScreening
  ⋅⋅*It resives in request a JSON object with id of the room where the film will take place, screening start time, screening duration and film title, for example:
  ```JSON
  {
    "hallID": "5750e416-a15e-449c-b289-364f549bfcf8",
    "startTime": "2020-12-12T14:35",
    "duration": 103,
    "filmTitle": "The Expendables"
  }
  ```
5. **PUT
