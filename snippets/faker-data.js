import { faker } from '@faker-js/faker'

const user = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password()
}

cy.log(JSON.stringify(user))
