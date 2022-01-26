/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

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
    }
}
const tokens = {
    admin: ''
}
let createdId = ''
const emotion = {
    name: 'Zdziwienie',
    type: 'Dziwne'
}
chai.use(chaiHttp)

describe('*********** EMOTIONS ***********', () => {
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
    })
    describe('/GET emotions', () => {
        it('it should get emotions', (done) => {
            chai
                .request(server)
                .get(`/emotions`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)

                    res.body.docs.should.be.a('array')
                    done()
                })
        })
    })
    describe('/POST emotions', () => {
        it('it should create new emotion', (done) => {
            chai
                .request(server)
                .post(`/emotions`)
                .send(emotion)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    createdId = res.body.name
                    done()
                })
        })
    })
    describe('/DELETE/:names emotion', () => {
        it('it should DELETE a emotions given the names', (done) => {
            chai
                .request(server)
                .delete(`/emotions/${createdId}`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((error, result) => {
                    result.should.have.status(200)
                    result.body.should.be.a('object')
                    result.body.should.have.property('msg').eql('DELETED')
                    done()
                })
        })
    })
})