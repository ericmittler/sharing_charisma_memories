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

const bertConversationId = await CharismaSDK.createConversation(playthroughToken)
const kermitConversationId = await CharismaSDK.createConversation(playthroughToken)

const playthrough = new CharismaSDK.Playthrough(playthroughToken)
await playthrough.setMemory('kermit_count', '0')
await playthrough.setMemory('kermit_done', 'false')
await playthrough.setMemory('player_1_name', 'Miss Piggy')

await playthrough.setMemory('bert_count', '0')
await playthrough.setMemory('player_2_name', 'Oscar')
await playthrough.setMemory('bert_done', 'false')

const bertConversation = playthrough.joinConversation(bertConversationId)
console.log(`Joined bertConversation ${bertConversationId}`)
const kermitConversation = playthrough.joinConversation(kermitConversationId)
console.log(`Joined kermitConversation ${kermitConversationId}`)

bertConversation.on('message', event => processMessageEvent(event))
bertConversation.on('reply', reply => console.log(reply))
kermitConversation.on('message', event => processMessageEvent(event))
kermitConversation.on('reply', reply => console.log(reply))

let bertStarted = false
let kermitStarted = false
playthrough.on('connection-status', status => {
  console.log(`Bert connection status is now "${status}". Started is ${bertStarted}`)
  if (status === 'connected' && !bertStarted) {
    console.log(`Starting Bert conversation for ID ${bertConversationId} at subplot ${bertSubplot1RefID}`)
    bertConversation.start({ startGraphReferenceId: bertSubplot1RefID })
    bertStarted = true
    console.log(`Bert started is now ${bertStarted}`)
  }
  console.log(`Kermit connection status is now "${status}". Started is ${kermitStarted}`)
  if (status === 'connected' && !kermitStarted) {
    console.log(`Starting Kermit conversation for ID ${bertConversationId} at subplot ${kemitSubplot1RefID}`)
    kermitConversation.start({ startGraphReferenceId: kemitSubplot1RefID })
    kermitStarted = true
    console.log(`Kermit started is now ${kermitStarted}`)
  }
})
playthrough.connect()

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
