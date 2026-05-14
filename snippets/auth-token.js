cy.request({
  method: 'POST',
  url: '/api/login',
  body: {
    email: 'qa@test.com',
    password: '123456'
  }
}).then((response) => {
  expect(response.status).to.eq(200)

  const token = response.body.token

  window.localStorage.setItem('authToken', token)
})
