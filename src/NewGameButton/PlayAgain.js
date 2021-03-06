import { Button } from "./Style"
import DisplayOfTheFinalMessage from "../Message/Index"
import { useDispatch } from "react-redux"

export const ButtonPlayAgain = ({ gameState }) => {
  const dispatch = useDispatch()
  const boardNumber = gameState.boardNumber
  const boardSize = gameState.boardSize
  const gameResult = gameState.gameResult
  return (
    <div>
      <DisplayOfTheFinalMessage gameResult={gameResult} />
      <Button
        onClick={() =>
          dispatch({
            type: "newGameBoard",
            payload: {
              boardNumber: boardNumber,
              boardSize: boardSize,
            },
          })
        }
      >
        PLAY AGAIN
      </Button>
    </div>
  )
}
