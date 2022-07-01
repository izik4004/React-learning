import {useState, useEffect} from "react"

const width = 8;
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]


const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const createBoard = () => {
    const colorArrangement = []

    for (let i = 0; i < width * width; i++) {
      // getting random color from 0 t- 5
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
        colorArrangement.push(randomColor)
    }

    setCurrentColorArrangement(colorArrangement)
  }

  useEffect(() => {
    createBoard()
  }, [])

 console.log(currentColorArrangement)

  return (
    <div className="App">
      <h1>izik</h1>
    </div>
  );
}

export default App;
