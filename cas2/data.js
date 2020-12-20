const players = []
const faker = require('faker')

for(let i = 0; i < 24; i++) {
  players.push({
    name: faker.name.title() + ' ' + faker.name.firstName() + ' ' + faker.name.lastName(),
    age: faker.random.number(15, 90),
    goalsScored: faker.random.number(300),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
  })
}

module.exports = players
