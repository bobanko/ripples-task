# ripples-task

## my inverview test task for ripples

![preview](https://repository-images.githubusercontent.com/372591283/71c97800-c3c3-11eb-9bf2-84d5b2aff420)

## LIVE DEMO:

https://bobanko.github.io/ripples-task/frontend/build/index.html

---

(sic!)

please create a project which include FE and BE sides:
For the BE use NODE.JS and MongoDB
For the Client side use React

### Client:

A simple screen with a title and 3 buttons:

1. Reset counter
2. Inc counter +1
3. Dec counter -1

   And below that present an image (any image) duplicated times the counter. every row should include up to 5 images and a row should stretch to screen wide (no use with npm packages)

### Server Side:

CRUD API which writes to the DB
Some rolls:

1. Once a user presses a button there will be DB update action. In case the entry doesn’t exist the action will create it.
2. Each tab creates a different session.
3. For each session you need to write to the DB :
   CreatedAt, updateAt, Counter, sessionID.

The design should assume thousands of sessions.

Checking criteria:

1. Does the project works without further configuration,
2. Code level.
3. Code cleans and structure.

Once you have it ready push it to Git and send me the link.
If you can create an Azure/AWS account and run the servers there or use docker it would be the best.
