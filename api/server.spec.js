const server = require('./server')
const request = require('supertest')

it('is running with the correct db', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

describe('server.js', () => {
  describe('[GET] /', () => {
    it('runs correctly', () => {
      return request(server).get('/')
    })
  })

  describe('[GET] /hobbits', () => {

  })
})