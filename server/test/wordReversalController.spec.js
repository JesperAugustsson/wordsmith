let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should()

chai.use(chaiHttp);

describe('reverse_words', () => {
    it('it should return 400 if body is empty', (done) => {
        chai.request(server)
            .post('/reverse')
            .set('content-type', 'text/plain')
            .send('')
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('should return 200 with reversed results', (done) => {
        chai.request(server)
            .post('/reverse')
            .set('content-type', 'text/plain')
            .send('Foo bar')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('original').eql('Foo bar');
                res.body.should.have.property('result').eql('ooF rab');
                res.body.should.have.property('timestamp');
                done();
            });
    });
});

