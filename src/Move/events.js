import findCordinateCharacter from "./findCordinateCharacter"
import moveWolves from "./moveWolves"
import globalObject from "../Global/globals"
import getDirectionCoord from "./getDirection"
import rabbitGoTo from "./moveRabbit"
import DisplayOfTheFinalMessage from "../Message/message"

const eventKeysFunctions = (gameState, eventKey) => {
  console.log(gameState, "gameState")
  const rabbitIndex = findCordinateCharacter(
    gameState.gameMatrix,
    globalObject.RABBIT
  )[0]
  const [x, y] = rabbitIndex
  const [newX, newY] = getDirectionCoord(
    gameState.gameMatrix,
    rabbitIndex,
    eventKey
  )
  rabbitGoTo(gameState, rabbitIndex, newX, newY)

  if (gameState.gameOver) {
    DisplayOfTheFinalMessage(gameState)
    return
  }

  moveWolves(gameState, rabbitIndex)
  if (gameState.gameOver) {
    DisplayOfTheFinalMessage(gameState)
    return
  }

  return gameState
}

export default eventKeysFunctions
