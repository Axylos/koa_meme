import app from '../src/app';
import * as request from 'supertest';

describe('', () => {
  let req;
  beforeEach(() => {
    req = request(app.callback());
  });

  test('root route', async () => {
    const response = await request(app.callback()).get('/')

    expect(response.status).toBe(200);
    expect(response.body.msg).toMatch('hey there');
  });
});
