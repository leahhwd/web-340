//Author: Leah Harris
//Date: 04/27/24


const http = require('http');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const server = require('../src/server');

// TODO: Implement your tests here

describe('Server', () => {
  afterAll(() => {
    server.close();
  });
//Test for create Character POST request
  test('responds to /createcharacter POST request with query parameter', done =>{
    const options = {
      hostname: 'localhost',
      port: 3000,
      //Implement path with query parameters
      path: '/createcharacter?characterClass=Mage&gender=female&funFact=fast',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = "";
      //listen for data event on request object
      res.on('data', chunk => {
        data += chunk;
      });
      //listen for end event on request object
      res.on('end', ()=> {
        //expected behaviors
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Creating character');
        done();
      });
    });
    //end request
    req.end();
  });

  //test confirm character POST request
  test('responds to /confirmcharacter POST request', done=> {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirmcharacter',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = "";
      //listen for data event
      res.on('data', chunk => {
        data += chunk;
      });
      //listen for end event
      res.on('end', () => {
        //expected behaviors
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character created');
        done();
      });
    });
    //end request
    req.end();
  });

  //test the view Character request
  test('responds to /viewcharacter GET request', done => {
    http.get('http://localhost:3000/viewcharacter', res =>{
      //expected status code
        expect(res.statusCode).toBe(200);
        done();
    });
  });
})