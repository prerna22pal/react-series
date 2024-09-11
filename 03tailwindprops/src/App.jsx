import './App.css'
import Card from './components/card'

function App() {
  let myObj={
    name:'prerna',
    age:'21'
  }

  return (
    <>
      <h1 className='bg-green-900 text-blue-400 m-5 p-20'>prerna</h1>
      <Card username="chaiaurreact" btntext="click me"/>
      <Card username="prerna" />
    </>
  )
}

export default App
