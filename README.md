# chess-game
---

This is the codebase for the chess-game Domain Challenge



## Getting Started
---

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Local Setup
---

A step by step series of examples that tell you how to get a development environment running
Clone the repo from github and install dependencies through npm or yarn.

```
git clone https://github.com/Flo-Adikwu/chess
cd chess
npm install
npm start

```

## Branches
---

- master 

## Contributing

1. Follow the local setup instructions above.
2. Initialize git flow with `git flow init`
3. Create your feature branch (`git flow feature start feature/new_branch`)
4. Commit your changes (`git commit -m 'Add some new features'`)
5. Push to the remote branch (`git push origin feature/new_branch`)
6. Create a new Pull Request

## Built With
---

- [React](https://reactjs.org/) - The front-end library used.
- [create-react-app](https://github.com/facebook/create-react-app) - The command line utility tool for setting up React project.
- [chessboardjs]https://chessboardjs.com/
- [chess.js]https://www.npmjs.com/package/chess

## Developer
Florence Adikwu


## Hosting link
https://clever-einstein-c9530d.netlify.app/


## Unit Tests
- Testing library
  [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


## Running Unit Tests
---
To ensure proper functionality, I would be testing for the following:

- white chess piece is to start,
- on drag chess piece, box color of possible moves highlights,
- on drop, box color is not highlighted,
- status, fen and pgn states change as chess piece moves

To run unit tests only use the command below

```
npm test
```

## Generating Coverage Report
---

To generate coverage report for unit tests, use the command below

```
npm run coverage:local
```


```
Cheers!


