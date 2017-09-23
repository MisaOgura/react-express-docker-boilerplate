import request from 'supertest'

import server from '../app'

describe('Server', () => {
  it('renders HelloWorld component', async () => {
    const res = await request(server).get('/')

    expect(res.statusCode).toBe(200)
    expect(res.text).toContain('class="hello-world"')
  })
})
