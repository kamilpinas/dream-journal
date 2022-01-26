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
const category = {
    name: 'NowaTestowa'
}
chai.use(chaiHttp)

describe('*********** CATEGORIES ***********', () => {
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
    describe('/GET categories', () => {
        it('it should get categories', (done) => {
            chai
                .request(server)
                .get(`/categories`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)

                    res.body.docs.should.be.a('array')
                    done()
                })
        })
    })
    describe('/POST category', () => {
        it('it should create new category', (done) => {
            chai
                .request(server)
                .post(`/categories`)
                .send(category)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    createdId = res.body._id
                    done()
                })
        })
    })
    describe('/DELETE/:id category', () => {
        it('it should DELETE a category given the id', (done) => {
            chai
                .request(server)
                .delete(`/categories/${createdId}`)
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