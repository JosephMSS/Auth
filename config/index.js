require("dotenv").config()
const { JWT_SECRET } = process.env
const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT,
    engine: process.env.DB_ENGINE,

  },
  libs: {
    jwt: {
      secret: JWT_SECRET
    },
    authCS: {
      host: "localhost",
      method: {
        login: "login"
      }
    }
  }
}
module.exports = { config, };
