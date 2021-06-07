### API

- GET `http://localhost:5000/v1/sredio/start` will start a session, initialize a `req.session` object and set `req.session.credit` to 10 if this is a new session. Return a `responseObject` to show the new session has been created or session has been existed
- GET `http://localhost:5000/v1/sredio/symbols` will play the game once if session has been created, return a `responseObject` to show the new token combination, message and remain credits. if no session, `responseObject` will be returned but the message will prompt user. If credit decrease to 0 or other illegal situation occurs, it will close the session and return `responseObject`.
- GET `http://localhost:5000/v1/sredio/end` will close the session and return a `responseObject`.

### `responseObject`

format: `{symbols : ["?","?","?"], msg: "", credit: 10}`

- symbols: a three-element array, show the latest tokens that the slot machine generate, cheated has been made.
- msg: show the message from the server
- credit: record in `req.session.credit`, store the user's credit. This value can't be modified from the client side.

### Architecture

- `controllers` API controllers
  - `start.js`: start the session
  - `end.js`: close the session
  - `index.js`: retain
  - `slot_machine.js` play one roll
- `helper` helper function
- `route` routes request to different controller
- `test` test the application
  - `play.js` business logic
  - `start.js` start and end a session
- `app.js` application entry.

### Test

- Test three endpoints to mock the create and close process. all cases pass.
- Test the probability of three cases (credit < 40, 40 <= credit < 60, 60 <= credit). All expected probabilities fall into the actual confidence interval with delta = 0.01.

### Dependencies

- "chai": "^4.3.4",
- "chai-http": "^4.3.0",
- "cookie-parser": "~1.4.4",
- "debug": "~2.6.9",
- "express": "~4.16.1",
- "express-session": "^1.17.2",
- "http-errors": "~1.6.3",
- "mocha": "^8.4.0",