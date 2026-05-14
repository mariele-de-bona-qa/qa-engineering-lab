const query = `
  SELECT id, email, status
  FROM users
  WHERE email = 'qa@test.com'
`

cy.task('queryDatabase', query).then((result) => {
  expect(result[0].email).to.eq('qa@test.com')
  expect(result[0].status).to.eq('ACTIVE')
})
