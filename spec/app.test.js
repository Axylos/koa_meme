const app = require('../app');
const request = require('supertest');

test('root route', async () => {
  const response = await request(app.callback()).get('/')

  expect(response.status).toBe(200);
  expect(response.body.msg).toMatch('fuck off');
});
