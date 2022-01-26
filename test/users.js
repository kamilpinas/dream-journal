/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

const User = require('../app/models/user')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
// eslint-disable-next-line no-unused-vars
const should = chai.should()
const loginDetails = {
  admin: {
    id: '5aa1c2c35ef7a4e97b5e995a',
    email: 'admin@admin.com',
    password: '12345'
  },
  user: {
    id: '5aa1c2c35ef7a4e97b5e995b',
    email: 'user@user.com',
    password: '12345'
  }
}
const tokens = {
  admin: '',
  user: ''
}

const createdID = []

chai.use(chaiHttp)

describe('*********** USERS ***********', () => {
  describe('/POST login', () => {
    it('it should GET token as admin', (done) => {
      chai
        .request(server)
        .post('/auth/login')
        .send(loginDetails.admin)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.should.have.property('token')
          tokens.admin = res.body.token
          done()
        })
    })
    it('it should GET token as user', (done) => {
      chai
        .request(server)
        .post('/auth/login')
        .send(loginDetails.user)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.should.have.property('token')
          tokens.user = res.body.token
          done()
        })
    })
  })
  describe('/GET users', () => {
    it('it should NOT be able to consume the route since no token was sent', (done) => {
      chai
        .request(server)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
    })
    it('it should GET all the users', (done) => {
      chai
        .request(server)
        .get('/users')
        .set('Authorization', `Bearer ${tokens.admin}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.docs.should.be.a('array')
          done()
        })
    })
    it('it should GET the users with filters', (done) => {
      chai
        .request(server)
        .get('/users?filter=admin&fields=name,email,city,country,phone')
        .set('Authorization', `Bearer ${tokens.admin}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.docs.should.be.a('array')
          res.body.docs.should.have.lengthOf(1)
          res.body.docs[0].should.have.property('email').eql('admin@admin.com')
          done()
        })
    })
  })
  describe('/DELETE/:id user', () => {
    it('it should DELETE a user given the id', (done) => {
      chai
        .request(server)
        .delete(`/users/${loginDetails.user.id}`)
        .set('Authorization', `Bearer ${tokens.user}`)
        .end((error, result) => {
          result.should.have.status(200)
          result.body.should.be.a('object')
          result.body.should.have.property('msg').eql('DELETED')
          done()
        })
    })
  })

  after(() => {
    createdID.forEach((id) => {
      User.findByIdAndRemove(id, (err) => {
        if (err) {
          console.log(err)
        }
      })
    })
  })
})
