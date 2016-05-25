/*

var assert = require('assert');

describe('Cows in my field', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});

*/

var expect = require('expect');
var server = require('../src/server.js');
var request = require('supertest');

describe('API', function () {
    
    var server;
    
    beforeEach(function ()  {
        server = require('../src/server.js');
        
        
    });
    
    afterEach(function () {
        server.close();
        
    });
    
    it('/ should return specified object.', function testHealth(done){
        request(server)
            .get('/api/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, { hello: "world"} , done);
  
    });

    it('/ status should return healthy: true.', function testHealth(done){
        request(server)
            .get('/api/status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, { healthy: true } , done);

    });
    
});