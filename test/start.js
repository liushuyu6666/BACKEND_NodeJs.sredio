process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('test session !', () => {
    describe('start a session', () => {
        it('it should create a session', (done) => {
            chai.request(app)
            .get('/v1/sredio/start')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.cookie('connect.sid');
                res.body.should.have.property('credit').eql(10);
                done();
            })
        });
    });

    describe('end a session', () => {
        it('it should close a session', (done) => {
            chai.request(app)
            .get('/v1/sredio/end')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.not.have.cookie('connect.sid');
                done();
            })
        })
    });
    
    describe('retry', () => {
        it('it should test if a session closed via symbols endpoint', (done) => {
            chai.request(app)
            .get('/v1/sredio/symbols')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.not.have.cookie('connect.sid');
                done();
            })
        })
    })
})
