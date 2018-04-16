import app from '../src/app';
import * as request from 'supertest';

describe('user routes', () => {
  let req;
  beforeEach(() => req = request(app.callback()));

  test('index route', async () => {
    const resp = await(req.get('/user/'));
    expect(resp.status).toBe(200);
    expect(resp.body.msg).toMatch('wat')
  });
});
