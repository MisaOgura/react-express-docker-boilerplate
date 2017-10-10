import request from 'supertest'

import app from '../app'

describe('App', () => {
  it('renders HelloWorld component', async () => {
    const res = await request(app).get('/')

    expect(res.statusCode).toBe(200)
    expect(res.text).toContain('class="hello-world"')
  })
})
