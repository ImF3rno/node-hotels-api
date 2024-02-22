# HOTEL API
## GET ALL HOTELS
```
http://localhost:8888/api/v1/hotels
```
## PROTECTED WITH BEARER TOKEN ^^^

## GET ALL BY ID
```
http://localhost:8888/api/v1/hotel/2
```
## UPDATE HOTEL BY ID
```
http://localhost:8888/api/v1/hotels/22
```
## CREATE HOTEL
```
http://localhost:8888/api/v1/hotels
```
### CREATE HOTEL FORM
```
{
    "name": "Urban Elegance Hotel",
    "address": "222 Downtown Avenue, Cityscape Central",
    "ranking_average": 4.5,
    "room_price": 190,
    "comfort": "2",
    "summary": "Experience urban elegance in the heart of the city.",
    "description": "Indulge in luxury and sophistication at Urban Elegance Hotel.",
    "image_cover": "urban_elegance.jpg"
}
```
## DELETE HOTEL BY ID
```
http://localhost:8888/api/v1/hotels/65cdcc171472d8bbb1be4a89
```
## FILTERING/PAGE
```
http://localhost:8888/api/v1/hotels?page=2&sort=room_price&limit=4&fields=name, description,room_price
```
## PROTECTED WITH BEARER TOKEN ^^^

## TOP 5 BY SELECTED FIELDS
```
http://localhost:8888/api/v1/hotels/top-5-hotels
```

# SIGNUP

## SIGNUP
```
http://localhost:8888/api/v1/users/signup
```
### FORM
```
{
    "name":"example",
    "email":"example@gmail.com",
    "password":"(password)",
    "passwordConfirm":"(password)"
}
```

# LOGIN

## LOGIN
```
http://localhost:8888/api/v1/users/login
```
### FORM
```
{
    "name":"example",
    "email":"example@gmail.com",
    "password":"(password)",
    "passwordConfirm":"(password)"
}
```
