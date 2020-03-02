import 'app/server/environment'
const pjson = require('../../../package.json')

export default {
  app: {
    app_name: pjson.name,
    app_version: pjson.version,
    app_port: parseInt(process.env.PORT as string),
    environment: process.env.NODE_ENV,
    enable_debug: process.env.ENABLE_DEBUG,
    enable_redis: process.env.REDIS_STATUS
  },
  database: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    logging: false
  },
  redis: {
    host: process.env.REDIS_HOST as string,
    port: parseInt(process.env.REDIS_PORT as string),
    auth_pass: process.env.REDIS_PASS as string,
    no_ready_check: true
  },
  elastic_search: {
    host: process.env.ELASTICSEARCH_HOST as string,
    username: process.env.ELASTICSEARCH_USERNAME as string,
    password: process.env.ELASTICSEARCH_PASSWORD as string
  },
  apm: {
    host: process.env.APM_SERVER_HOST
  }
}