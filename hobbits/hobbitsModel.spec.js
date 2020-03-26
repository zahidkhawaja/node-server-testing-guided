const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig.js');

beforeEach(async () => {
  await db('hobbits').truncate()
})
// afterEach
// beforeAll
// afterAll

it('is running with the correct db', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

describe('hobbitsModel', () => {

  describe('insert function', () => {

    it('inserts', async () => {
      // 1- read the db
      // 2- assert there is nothing in hobbits table
      // 3- insert something
      // 4- read the db
      // 5- assert there is one record
      let hobbits

      hobbits = await db('hobbits')
      expect(hobbits).toHaveLength(0)
      await Hobbits.insert({ name: 'Christina'})

      hobbits = await db('hobbits')
      expect(hobbits).toHaveLength(1)

      await Hobbits.insert({ name: 'Alison' })

      hobbits = await db('hobbits')
      expect(hobbits).toHaveLength(2)
    })

    it('resolves to the newly inserted hobbit', () => {
      
    })
  })
})