import {useState} from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setCurrentGuesses] = useState([]) 
    const[history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)  
   
   
    const formatGuess = () => {

    }

    const addNewGuess = () => {

    }

    const handleKeyup = ({key}) => {
        if
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
 
  
}

export default useWordle
