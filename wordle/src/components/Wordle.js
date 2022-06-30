import React, {useEffect} from 'react'
import useWordle from "../hooks/useWordle"

export const Wordle = ({solution}) => {
    const {currentGuess, handleKeyup}= useWordle(solution)
  return (
    <div>Wordle</div>
  )
}
