import Button from "./Button"

const onClick = (e) => {
    console.log('click')
}

const Header = ({title}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='green' text='Add'
            onClick={onClick}
        />
    </header>
  )
}

export default Header