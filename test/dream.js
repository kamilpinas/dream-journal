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
const dream = {
    _id: '61df39ea3e2e8106c4ef83f1',
    userId: '5aa1c2c35ef7a4e97b5e995a',
    title: 'test dream',
    description: 'test dream test dream test dream test dream',
    startDate: new Date(),
    endDate: new Date(),
    category: {
        _id: '61df39ea3e2e8106c4ef83f2',
        name: 'Symboliczne'
    },
    analysis: {
        _id: '61df39ea3e2e8106c4ef83f3',
        sleepLevel: 1,
        rating: 3,
        isNightmare: true,
        isMoodAffecting: false,
        emotions: [{
            name: 'Zauroczenie',
            type: 'Miłosne'
        }],
        consciousness: {
            _id: '61df39ea3e2e8106c4ef83f5',
            isConsciousness: true,
            isControled: false,
            lucidityLevel: 2
        }
    }
}
const dream2 = {
    userId: '5aa1c2c35ef7a4e97b5e995a',
    title: 'test dream',
    description: 'test dream test dream test dream test dream',
    startDate: new Date(),
    endDate: new Date(),
    category: {
        _id: '61df39ea3e2e8106c4ef83f2',
        name: 'Symboliczne'
    },
    analysis: {
        _id: '61df39ea3e2e8106c4ef83f3',
        sleepLevel: 1,
        rating: 3,
        isNightmare: true,
        isMoodAffecting: false,
        emotions: [{
            name: 'Zauroczenie',
            type: 'Miłosne'
        }],
        consciousness: {
            _id: '61df39ea3e2e8106c4ef83f5',
            isConsciousness: true,
            isControled: false,
            lucidityLevel: 2
        }
    }
}
chai.use(chaiHttp)

describe('*********** DREAMS ***********', () => {
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
    describe('/GET dreams', () => {
        it('it should get User dreams', (done) => {
            chai
                .request(server)
                .get(`/dream/${loginDetails.admin.id}`)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)

                    res.body.should.be.a('array')
                    done()
                })
        })
    })
    describe('/POST dream', () => {
        it('it should create new dream', (done) => {
            chai
                .request(server)
                .post(`/dream`)
                .send(dream2)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    createdId = res.body._id
                    done()
                })
        })
    })
    describe('/PATCH dream', () => {
        it('it should update dream', (done) => {
            chai
                .request(server)
                .patch(`/dream/${createdId}`)
                .send(dream2)
                .set('Authorization', `Bearer ${tokens.admin}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    done()
                })
        })
    })
    describe('/DELETE/:id dream', () => {
        it('it should DELETE a dream given the id', (done) => {
            chai
                .request(server)
                .delete(`/dream/${createdId}`)
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