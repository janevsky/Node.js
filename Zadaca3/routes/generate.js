const listGenerate = [];
const faker = require('faker');

for (let i = 0; i < 24; i++) {
    listGenerate.push({
        name: faker.name.title() + ' ' + faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
    })
};

module.exports = listGenerate;