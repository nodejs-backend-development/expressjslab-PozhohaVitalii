const request = require('supertest');
const app = require('../app');
const Func1 = require('../controllers/TaskA.controller');
//const fetchMock = require( 'jest-fetch-mock');

fetchMock.enableMocks();

require('dotenv').config();

const obj = [
    {
      id: 189,
      user_id: 649,
      title: 'Cimentarius canto credo cornu alveus certe crapula angustus tenuis.',
      body: 'Quasi beatae unde. Acervus adsuesco et. Spargo strenuus defendo. Quod iusto pecco. Civitas bos atqui. Acceptus tolero ago. Studio vitae teneo. Cotidie curtus esse. Amissio brevis coadunatio. Avaritia sono suasoria. Curriculum coerceo quidem. Conventus altus canonicus. Tui canto cum. Atrox derideo pecco. Amita demonstro vitae. Delicate crastinus sequi. Desidero excepturi altus. Cupressus calco sint.'
    }
  ];

describe('GET /request_get/', () => {
   
    it('should return all post-s', async () => {
        fetch.mockResponseOnce(JSON.stringify([
            {
              id: 189,
              user_id: 649,
              title: 'Cimentarius canto credo cornu alveus certe crapula angustus tenuis.',
              body: 'Quasi beatae unde. Acervus adsuesco et. Spargo strenuus defendo. Quod iusto pecco. Civitas bos atqui. Acceptus tolero ago. Studio vitae teneo. Cotidie curtus esse. Amissio brevis coadunatio. Avaritia sono suasoria. Curriculum coerceo quidem. Conventus altus canonicus. Tui canto cum. Atrox derideo pecco. Amita demonstro vitae. Delicate crastinus sequi. Desidero excepturi altus. Cupressus calco sint.'
            }
          ]));
       // const res = await request(app).get('/get_request/');
    const res = await  Func1.getData(649,'0cff46ebd9516f3ad4d6c31661d99a80b41d93c0c24b62e0896b4962731c23a5').then(data =>{ console.log(data);
        expect(data).toStrictEqual(obj);
        expect(data[0].user_id).toBe(649);
        expect(data[0].body.length).toBeGreaterThan(3);

    });
    return res;
      //  expect(res.body.length).toBeGreaterThan(0);
    });
});


describe('POST /request_post/', () => {
   
    it('should return a succes string', async () => {
        
       // const res = await request(app).get('/get_request/');
    const res = await  Func1.putData(649,'0cff46ebd9516f3ad4d6c31661d99a80b41d93c0c24b62e0896b4962731c23a5',obj).then(data =>{ console.log(data);
        expect(data).toStrictEqual("success");
        
    });
    return res;
      //  expect(res.body.length).toBeGreaterThan(0);
    });
});