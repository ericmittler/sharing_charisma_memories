# Sharing Memories in Charisma

This is an attempt at some example code that simulates two
players interacting with two subplots of the same story.
The goal is to have an event from one player interact
with the other player.

This code, at present, does not work! That's the point. I'm using
this to see if I can either fix this JavaScript or the Charisma
story so that the memories are shared.

If you see the example output below, you can see the playthough
memories for one player do not match the other player. 

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
Joined conversation 371757
Bert connection status is now "connected". Started is false
Starting Bert conversation for ID 371757 at subplot bert-question-1-subplot-id
Bert started is now true
Kermit connection status is now "connected". Started is false
Starting Kermit conversation for ID 371757 at subplot kermit-question-2-subplot-id
Kermit started is now true
Heard message from Bert: "Hello Miss Piggy and Oscar"
Heard message from Kermit: "Hi  Miss Piggy and Oscar"
Heard message from Bert: "what is my favorite number?"
Player reply to Bert asking "what is my favorite number?" is "3"
Heard message from Kermit: "what is my favorite food?"
Player reply to Kermit asking "what is my favorite food?" is "ice cream"
Heard message from Bert: "that's right!  Bert count is 1. Kermit count is 0"
Heard message from Kermit: "Try again. Kermit count is 0 and Bert count is 0"
Heard message from Kermit: "what is my favorite food?"
Player reply to Kermit asking "what is my favorite food?" is "cake"
Heard message from Kermit: "No and Bert count is 0"
Heard message from Bert: "  Not done yet. Bert count is 1  and Kermit count is 0. Bert done is true.  Kermit done is false"
Heard message from Kermit: "what is my favorite food?"
Player reply to Kermit asking "what is my favorite food?" is "chocolate"
Heard message from Kermit: "Yes. Chocolate is great. Kermit count is 3 and Bert count is 0"
Heard message from Bert: "  Not done yet. Bert count is 1  and Kermit count is 0. Bert done is true.  Kermit done is false"
Heard message from Kermit: "Not done yet. Bert count is 0  and Kermit count is 3. Bert done is false.  Kermit done is true"
Heard message from Bert: "  Not done yet. Bert count is 1  and Kermit count is 0. Bert done is true.  Kermit done is false"
Heard message from Kermit: "Not done yet. Bert count is 0  and Kermit count is 3. Bert done is false.  Kermit done is true"
Heard message from Bert: "  Not done yet. Bert count is 1  and Kermit count is 0. Bert done is true.  Kermit done is false"
Heard message from Kermit: "Not done yet. Bert count is 0  and Kermit count is 3. Bert done is false.  Kermit done is true"
Heard message from Bert: "  Not done yet. Bert count is 1  and Kermit count is 0. Bert done is true.  Kermit done is false"
Heard message from Kermit: "Not done yet. Bert count is 0  and Kermit count is 3. Bert done is false.  Kermit done is true"
```