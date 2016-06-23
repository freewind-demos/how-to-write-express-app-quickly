How to write an express application quickly
===========================================

Steps
-----

### create directory, config files and download deps

```
mkdir myapp
cd myapp
npm init -y
npm install express --save
```

### use `nodemon` to auto-reload

```
npm install -g nodemon
```

### write code

The code is already in this project

### run code

```
node index.js
```

or

```
nodemon index.js
```

### visit

```
curl http://localhost:3000/products
curl http://localhost:3000/products/1
curl -X POST -d '{"name":"Apple","price":3.2}' -H "Content-Type: application/json" http://localhost:3000/products/1
curl http://localhost:3000/version
```

We can use `-v` to see the sending and receiving headers:

```
curl -v http://localhost:3000/version
```