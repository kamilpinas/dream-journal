/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

const faker = require('faker')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
// eslint-disable-next-line no-unused-vars
const should = chai.should()
const loginDetails = {
  email: 'admin@admin.com',
  password: '12345'
}
let token = ''
const createdID = []
const email = faker.internet.email()
chai.use(chaiHttp)

describe('*********** AUTH ***********', () => {
  describe('/POST login', () => {
    it('it should GET token', (done) => {
      chai
        .request(server)
        .post('/auth/login')
        .send(loginDetails)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.should.have.property('token')
          token = res.body.token
          done()
        })
    })
  })

  describe('/POST register', () => {
    it('it should POST register', (done) => {
      const user = {
        name: faker.random.words(),
        email,
        password: faker.random.words()
      }
      chai
        .request(server)
        .post('/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.an('object')
          res.body.should.include.keys('token', 'user')
          createdID.push(res.body.user._id)

          done()
        })
    })
    it('it should NOT POST a register if email already exists', (done) => {
      const user = {
        name: faker.random.words(),
        email,
        password: faker.random.words()
      }
      chai
        .request(server)
        .post('/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(422)
          res.body.should.be.a('object')
          res.body.should.have.property('errors')
          done()
        })
    })
  })

  describe('/GET token', () => {
    it('it should NOT be able to consume the route since no token was sent', (done) => {
      chai
        .request(server)
        .get('/auth/token')
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
    })
    it('it should GET a fresh token', (done) => {
      chai
        .request(server)
        .get('/auth/token')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.should.have.property('token')
          done()
        })
    })
  })
})
