import CharismaSDK from '@charisma-ai/sdk'

const bertSubplot1RefID = 'bert-question-1-subplot-id'
const kemitSubplot1RefID = 'kermit-question-2-subplot-id'
const foods = ['ice cream', 'cake', 'chocolate']

const apiKey = process.argv[2]
if (!apiKey) {
  throw new Error('Enter the Charisma Story API key as the second argument.')
}

const playthroughToken = await CharismaSDK.createPlaythroughToken({
  storyId: 13007,
  version: -1,
  apiKey,
  languageCode: 'en',
})

const conversationId = await CharismaSDK.createConversation(playthroughToken)
const bertPlaythrough = new CharismaSDK.Playthrough(playthroughToken)
// await bertPlaythrough.setMemory('kermit_count', '0')
await bertPlaythrough.setMemory('kermit_count', '0')
await bertPlaythrough.setMemory('kermit_done', 'false')
await bertPlaythrough.setMemory('player_1_name', 'Miss Piggy')
const kermitPlaythrough = new CharismaSDK.Playthrough(playthroughToken)
await kermitPlaythrough.setMemory('bert_count', '0')
await kermitPlaythrough.setMemory('player_2_name', 'Oscar')
await kermitPlaythrough.setMemory('bert_done', 'false')

const bertConversation = bertPlaythrough.joinConversation(conversationId)
const kermitConversation = kermitPlaythrough.joinConversation(conversationId)
console.log(`Joined conversation ${conversationId}`)

bertConversation.on('message', event => processMessageEvent(event))
bertConversation.on('reply', reply => console.log(reply))
kermitConversation.on('message', event => processMessageEvent(event))
kermitConversation.on('reply', reply => console.log(reply))

let bertStarted = false
bertPlaythrough.on('connection-status', status => {
  console.log(`Bert connection status is now "${status}". Started is ${bertStarted}`)
  if (status === 'connected' && !bertStarted) {
    console.log(`Starting Bert conversation for ID ${conversationId} at subplot ${bertSubplot1RefID}`)
    bertConversation.start({ startGraphReferenceId: bertSubplot1RefID })
    bertStarted = true
    console.log(`Bert started is now ${bertStarted}`)
  }
})
let kermitStarted = false
kermitPlaythrough.on('connection-status', status => {
  console.log(`Kermit connection status is now "${status}". Started is ${kermitStarted}`)
  if (status === 'connected' && !kermitStarted) {
    console.log(`Starting Kermit conversation for ID ${conversationId} at subplot ${kemitSubplot1RefID}`)
    kermitConversation.start({ startGraphReferenceId: kemitSubplot1RefID })
    kermitStarted = true
    console.log(`Kermit started is now ${kermitStarted}`)
  }
})

bertPlaythrough.connect()
kermitPlaythrough.connect()

const processMessageEvent = event => {
  const characterName = event.message.character.name
  const msgText = event.message.text
  console.log(`Heard message from ${characterName}: "${msgText}"`)
  if (characterName === 'Bert' && msgText === 'what is my favorite number?') {
    const randomNum = Math.floor(Math.random() * 4) + 1
    console.log(`Player reply to Bert asking "${msgText}" is "${randomNum}"`)
    bertConversation.reply({ text: `${randomNum}` })
  }
  if (characterName === 'Kermit' && msgText === 'what is my favorite food?') {
    const foodGuess = foods[Math.floor(Math.random() * 3)]
    console.log(`Player reply to Kermit asking "${msgText}" is "${foodGuess}"`)
    kermitConversation.reply({ text: foodGuess })
  }
} 
