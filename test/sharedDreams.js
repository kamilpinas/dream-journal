/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

// const Dream = require('../app/models/dream')
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
const sharedDream = {
    _id: '61df39ea3e2e8106c4ef83f1',
    sharedOn: new Date(),
    votes: 7,
    username: 'zenek1243',
    description: 'asd',
    category: { name: 'Zauroczenie' }
}
const sharedDream2 = {
    sharedOn: new Date(),
    votes: 7,
    username: 'zenek1243',
    description: 'nowy sen updated',
    category: { name: 'Zauroczenie' }
}
chai.use(chaiHttp)

describe('*********** SHARED DREAMS ***********', () => {
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
    describe('/POST shared-dream', () => {
        it('it should create new shared dream', (done) => {
            chai
                .request(server)
                .post(`/shared-dreams`)
                .send(sharedDream2)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    createdId = res.body._id
                    done()
                })
        })
    })
    describe('/GET shared dreams', () => {
        it('it should get random shared dream', (done) => {
            chai
                .request(server)
                .get(`/shared-dreams/random`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
        it('it should get random shared dream with category', (done) => {
            chai
                .request(server)
                .get(`/shared-dreams/category/${sharedDream.category.name}`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
        it('it should get all shared dreams', (done) => {
            chai
                .request(server)
                .get(`/shared-dreams`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.docs.should.be.a('array')
                    done()
                })
        })
    })

    describe('/PATCH shared-dream', () => {
        it('it should update shared-dream', (done) => {
            chai
                .request(server)
                .patch(`/shared-dreams/${createdId}`)
                .send(sharedDream2)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    done()
                })
        })
        it('it should vote up shared dream', (done) => {
            chai
                .request(server)
                .patch(`/shared-dreams/vote-up/${createdId}`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
        it('it should vote down shared-dream', (done) => {
            chai
                .request(server)
                .patch(`/shared-dreams/vote-down/${createdId}`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })

    describe('/DELETE/:id shared-dream', () => {
        it('it should DELETE a shared-dream given the id', (done) => {
            chai
                .request(server)
                .delete(`/shared-dreams/${createdId}`)
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