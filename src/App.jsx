
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card.jsx'
import lenguajes from './data/languages.js'
 function App() {
  const listLanguages = lenguajes.map((l) => {

    return <Card titulo={l.nombre} descripcion={l.informacion}/>

  });

  return (

    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>React Components with Vite</h1>
      <div className="container">
        {listLanguages}
      </div>
    </div>
  )
}
export default App
