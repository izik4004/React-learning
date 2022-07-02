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

  const checkColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnThree = [1, i + width, i + width * 2]
      const decidedColor = currentColorArrangement[i]

      if ( columnThree.every(square => currentColorArrangement[square] === decidedColor)) {
        columnThree.forEach(square => currentColorArrangement[square] = '')
      }
    }
  }

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

  useEffect(() => {
    const timer = setInterval(() => {
      checkColumnOfThree()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)
    return () => clearInterval(timer)
   
  }, [checkColumnOfThree,currentColorArrangement ])

 console.log(currentColorArrangement)



  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img src="" alt={candyColor} key={index}
            style={{backgroundColor:candyColor}}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
