process.env.NODE_ENV = 'test';

const { assert } = require('chai');
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var play = require('../helper/play');

describe('test the possibility', () => {
    var message = ['when credit is less than 40',
                    'when credit is larger than 40 but less than 60',
                    'when credit is larger than 60'];
    var Px = 1 /16;
    var actualValue = [Px, Px * 0.7 + Px* Px * 0.3, Px * 0.4 + Px * Px * 0.6];
    [20, 50, 70].map((item, i) => {
        describe(message[i], () => {
            it('', () => {
                var times = 10000, cnt = 0, ratio, delta = 0.01;
                while(times > 0){
                    if(play.playRoll(item)["isWin"]){
                        cnt++;
                    }
                    times--;
                }
                ratio = cnt / 10000;
                console.log(`actual value is ${actualValue[i]}, expected value is ${ratio}, delta is ${delta}`)
                assert.closeTo(actualValue[i], ratio, delta, `ratio ${ratio} is out of range`);
            })
        })
    })
})

// describe('test the max credit one could earn before breakout', () => {
//     it('start a session', (done) => {
//         chai.request(app)
//         .get('/v1/sredio/start')
//         .end((err, res) => {
//             // console.log(res.body.credit);
//             var maxCredit = 10;
//             var possCredit = gambling(maxCredit);
//             console.log(possCredit)
//             // res.should.have.status(200);
//             // res.should.have.cookie('connect.sid');
//             // res.body.should.have.property('credit').eql(10);
//             done();
//         })
//     });
// })

// const gambling = (maxCredit) => {
//     chai.request(app)
//     .get('/v1/sredio/symbols')
//     .end((err, res) => {
//         if(res.body.credit > 0){
//             maxCredit = Math.max(maxCredit, res.body.credit);
//             gambling();
//         }
//         else{
//             return maxCredit;
//         }
//     })
// }