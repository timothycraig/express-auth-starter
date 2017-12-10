
# Express Auth API
JWT based authentication strategy with MongoDB

- bcrypt-nodejs
- body-parser
- cors
- express
- jwt-simple
- mongoose
- morgan
- nodemon
- passport
- passport-jwt
- passport-local

### DB
- MongoDB

### Installation

```bash
$ yarn install
$ mongod
$ yarn run dev
```

### Config

__/config/dev.js__
```js
module.exports = {
  jwtSecret: 'make up your own secret',
  mongoURI: 'mongodb://localhost:auth/auth'
}
```
