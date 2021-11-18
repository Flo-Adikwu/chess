import { useEffect, useState } from 'react';
import * as Chess from "chess.js";
import './App.css';


const App = () => {
  const [, setBoard] = useState();
  const [status, setStatus] = useState("White to start");
  const [fen, setFen] = useState("");
  const [pgn, setPgn] = useState("");

  useEffect(() => {
    let game = new Chess()// eslint-disable-line no-undef
    const onDragStart = (source, piece, position, orientation) => {
      // do not pick up pieces if the game is over
      if (game.game_over()) return false

      // only pick up pieces for the side to move
      if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false
      }
    }

    //On drop chess piece
    const onDrop = (source, target) => {
      // see if the move is legal
      let move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      })
      // illegal move?
      if (move === null) return 'snapback'
      updateStatus()
    }

    // update the board position after the piece snap
    const onSnapEnd = () => {
      board1.position(game.fen())
    }


    //update status of game
    const updateStatus = () => {
      //moveColor set to white by default
      let moveColor = 'White'
      if (game.turn() === 'b') {
        moveColor = 'Black'
      }

      // checkmate?
      if (game.in_checkmate()) {
        setStatus('Game over, ' + moveColor + ' is in checkmate.')
      }

      // draw?
      else if (game.in_draw()) {
        setStatus('Game over, drawn position')
      }

      // game still on
      else {
        setStatus(moveColor + ' to move')

        // check?
        if (game.in_check()) {
          setStatus(', ' + moveColor + ' is in check')
        }
      }
      //update the fen and pgn states
      setFen(game.fen());
      setPgn(game.pgn());
    }

    //let's configure our board
    // eslint-disable-next-line no-undef
    let board1 = Chessboard('board1', {
      pieceTheme: 'assets/images/{piece}.png',
      position: 'start',
      draggable: true,
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd,
      //after we move a piece, reset highlighted squares
      onMouseoutSquare: (square) => {
        let selectedSquares = document.querySelectorAll(".valid");
        for (const selectedSquare of selectedSquares) {
          selectedSquare.classList.remove('valid')
        }
      },
      //when we hover on a piece, highlight available square moves
      onMouseoverSquare: (square, piece) => {
        const moves = game.moves({
          square: square,
          verbose: true
        });
        if (0 === moves.length) {
          return;
        }
        const classes = [...moves.map(({ to }) => to), square].map(ref => `.square-${ref}`);
        console.log(classes);
        let selectedSquares = document.querySelectorAll(classes.join(","));
        for (const selectedSquare of selectedSquares) {
          selectedSquare.classList.add('valid')
        }
      },
    });
    setBoard(board1);
  }, []);

  return (
    <div className="boardContainer">
      <div className="myBoard">
        <h1>My Chess Game ♘</h1>
        <div id="board1" className="board"></div>
        <p className="stat">Status: {status}</p>
        <p className="fen">FEN: {fen}</p>
        <p className="pgn">PGN: {pgn}</p>
      </div>
    </div>
  );
}

export default App;
