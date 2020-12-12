# AuraTestTask

## Endpoints

This application is for a cinema manager to manage cinema halls and cinema screenings. It has ten endpoints.
1. **POST** /register
    - It receives in request a JSON object with e-mail and password, for example:
  ```JSON
  {
    "email": "example@mail.com",
    "password": "ExamplePassword1!"
  }
  ```
2. **POST** /login
    - It receives in request a JSON object with e-mail and password, for example:
  ```JSON
  {
    "email": "example@mail.com",
    "password": "ExamplePassword1!"
  }
  ```
#### All other endpoints require authentication, so you must register and login.

3. **POST** /authrequired/addCinemaHall
    - It receives in request a JSON object with hall capacity and hall name, for example:
  ```JSON
  {
    "capacity": 140,
    "name": "Terra"
  }
  ```
4. **POST** /authrequired/addCinemaScreening
    - It receives in request a JSON object with ID of the room where the film will take place, screening start time, screening duration and film title, for example:
  ```JSON
  {
    "hallID": "5750e416-a15e-449c-b289-364f549bfcf8",
    "startTime": "2020-12-12T14:35",
    "duration": 103,
    "filmTitle": "The Expendables"
  }
  ```
5. **PUT** /authrequired/editCinemaScreening
    - It receives in request a JSON object with ID of the screening and optional new screening start time, new screening duration and new film title, for example:
  ```JSON
  {
    "id": "139f32f2-5fb9-43b1-adb3-224c89dd58fe",
    "startTime": "Wed Dec 18 2020 14:35",
    "duration": 200,
    "filmTitle": "The Expendables"
  }
  ```
6. **PUT** /authrequired/editCinemaHall
    - It receives in request a JSON object with ID of the hall and optional new hall name and new hall capacity, for example:
  ```JSON
  {
    "id": "5750e416-a15e-449c-b289-364f549bfcf8",
    "name": "Aqua",
    "capacity": 125
  }
  ```
7. **PUT** /authrequired/moveCinemaScreening
    - It receives in request a JSON object with ID of the new hall and ID of the screening that must be moved to another hall, for example:
  ```JSON
  {
    "newHallID": "731b426c-bd7c-4a15-8e9f-52cb8a321c32",
    "screeningID": "139f32f2-5fb9-43b1-adb3-224c89dd58fe"
  }
  ```
8. **DELETE** /authrequired/deleteCinemaScreening
    - It receives in request a JSON object with screening ID to be removed, for example:
  ```JSON
  {
    "cinemaScreeningID": "d61d6028-8cd9-4428-8383-f9125e37d79d"
  }
  ```
9. **DELETE** /authrequired/deleteCinemaHall
    - It receives in request a JSON object with hall ID to be removed, for example:
  ```JSON
  {
    "hallID": "731b426c-bd7c-4a15-8e9f-52cb8a321c32"
  }
  ```
10. **GET** /authrequired/listCinemaScreening
    - It receives in request a JSON object with hall ID whose screening schedule we want to download, for example
  ```JSON
  {
    "hallID": "731b426c-bd7c-4a15-8e9f-52cb8a321c32"
  }
  ```

## Start the application

 To begin, run in your terminal:
    ``` git clone https://github.com/Iicytower/AuraTestTask.git```
    ``` cd AuraTestTask```
  Now you have application code on your device. To start this application you must have docker and docker-compose installed on your device. To start the application just run ```docker-compose up``` in application root folder.
