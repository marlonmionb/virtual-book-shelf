import { Fragment } from "react/jsx-runtime"
import Button from "./components/Button/Button"

function App() {

const consoleLog = () => {
  console.log('The button has being created ')
}

  return (
    <Fragment>
        <Button onClick={consoleLog}>+ New Book</Button>
    </Fragment>
  )
}

export default App
