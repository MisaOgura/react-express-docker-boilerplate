import request from 'supertest'

import server from '../server'

describe('Server', () => {
  it('renders HelloWorld component', () => {
    return request(server)
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.text).toContain('class="hello-world"')
      })
  })
})
