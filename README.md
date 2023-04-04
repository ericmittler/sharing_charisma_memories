# Sharing Memories in Charisma

This is an attempt at some example code that simulates two
players interacting with two subplots of the same story.
The goal is to have an event from one player interact
with the other player.

Thanks to bigwooshi at Charisma, I have corrected this and it should
work to demo how to share memories between two user experiences on
the same Charisa.ai story!

If you see the example output below, memories (set both by SDK
and by Charisa node) are shared between two user player experiences.

The example Charisma story (ID 13007) is only playable via this SDK example.
If you want to try it out yourself, it won't work without the API
key and an accessible version of the story. Since that does cost me
to run, I can help you make a copy of this for your experimentation.

## Set Up
```
git clone https://github.com/ericmittler/sharing_charisma_memories
cd sharing_charisma_memories
npm i
```

## Run the test

To run this example, you need the Story API key. 

```
node index.mjs <the-charisma-story-api-key>
```


## Example output

```
Joined bertConversation 388649
Joined kermitConversation 388650
Bert connection status is now "connected". Started is false
Starting Bert conversation for ID 388649 at subplot bert-question-1-subplot-id
Bert started is now true
Kermit connection status is now "connected". Started is false
Starting Kermit conversation for ID 388649 at subplot kermit-question-2-subplot-id
Kermit started is now true
Heard message from Bert: "Hello Miss Piggy and Oscar"
Heard message from Kermit: "Hi  Miss Piggy and Oscar"
Heard message from Bert: "what is my favorite number?"
Player reply to Bert asking "what is my favorite number?" is "4"
Heard message from Kermit: "what is my favorite food?"
Player reply to Kermit asking "what is my favorite food?" is "ice cream"
Heard message from Bert: "Try again. Kermit count is 0and Bert count is 0"
Heard message from Kermit: "Try again. Kermit count is 0 and Bert count is 0"
Heard message from Bert: "what is my favorite number?"
Player reply to Bert asking "what is my favorite number?" is "3"
Heard message from Kermit: "what is my favorite food?"
Player reply to Kermit asking "what is my favorite food?" is "chocolate"
Heard message from Bert: "that's right!  Bert count is 2. Kermit count is 1"
Heard message from Kermit: "Yes. Chocolate is great. Kermit count is 2 and Bert count is 1"
Heard message from Bert: "  Not done yet. Bert count is 2  and Kermit count is 1. Bert done is true.  Kermit done is false"
Heard message from Kermit: "Not done yet. Bert count is 2  and Kermit count is 2. Bert done is false.  Kermit done is true"
Heard message from Kermit: "Both are complete"
Heard message from Bert: "  Not done yet. Bert count is 2  and Kermit count is 2. Bert done is true.  Kermit done is false"
Heard message from Bert: "Yay! We are both done. Kermit count is 2and Bert count is 2"
```