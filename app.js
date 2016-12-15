const Chance = require('chance')
const request = require('request')

const chance = new Chance()
const endpoint = 'http://localhost:8080/log'

setInterval(hammerTime, 1)

function hammerTime() {
  const database = chance.pickone(['DB1', 'DB2', 'DB3'])

  const payload = {
    name: chance.name(),
    birthDay: chance.birthday(),
    email: chance.email(),
    twitterHandle: chance.twitter(),
    bio: chance.paragraph(),
    bio1: chance.paragraph(),
    bio2: chance.paragraph(),
    bio3: chance.paragraph(),
    bio4: chance.paragraph(),
    bio5: chance.paragraph(),
    bio6: chance.paragraph(),
    bio7: chance.paragraph(),
    bio8: chance.paragraph(),
    bio9: chance.paragraph(),
    bio10: chance.paragraph(),
    tagline: chance.sentence(),
    website: chance.domain(),
    address: chance.address()
  }
      
  console.log(`\nSending payload for ${database}:\n${JSON.stringify(payload)}\n`)

  request.post(`${endpoint}/${database}`, (error, response, body) => {
    if (error != null) {
      console.error(error)
      return
    }

    console.log(`\nResponse status code: ${response.statusCode}\n`)
  }).json(payload)
}
