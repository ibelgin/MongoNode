# MongoNode

A Simple API using MongoDB, NodeJS , Azure and Github Action's

## Functions

```js
checkAPIActive(res)
```

* Path - `GET` - **`api/`**
* Return's `{ "message": "API is Active" }` if the API is Active

```js
getDataByID (client ,req, res)
```

* Path - `GET` - **`api/userData/:id`**
* Return's the data of the _given ID_

```js
updateDataByID (client , req, res)
```

* Path - `PATCH` - **`api/updateData/:id`**
* Update's the data of the given ID from the one given in the `body` Tag


```js
deleteDataByID (client , req, res)
```

* Path - `DELETE` - **`api/deleteData/:id`**
* Delete the data of the given ID 

```js
addUser (client , req, res)
```

* Path - `POST` - **`api/addUser/`**
* Adds the data from the one given in the `body` Tag to the MongoDB Database

```js
getDataByName (client , req, res)
```

* Path - `GET` - **`api/nameData/:name`**
* Returns all the fields with the mentioned name

