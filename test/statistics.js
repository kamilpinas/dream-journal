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

chai.use(chaiHttp)

describe('*********** STATISTICS ***********', () => {
    describe('/GET login', () => {
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
    describe('/GET statistics', () => {
        it('it should get most common words in dreams', (done) => {
            chai
                .request(server)
                .get(`/statistics/${loginDetails.admin.id}`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)

                    res.body.should.be.a('array')
                    done()
                })
        })
        it('it should get list of counted dreams by categories', (done) => {
            chai
                .request(server)
                .get(`/statistics/categories/${loginDetails.admin.id}`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)

                    res.body.should.be.a('array')
                    done()
                })
        })
        it('it should get list of counted dreams by emotions', (done) => {
            chai
                .request(server)
                .get(`/statistics/emotions/${loginDetails.admin.id}`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)

                    res.body.should.be.a('array')
                    done()
                })
        })
    })
})