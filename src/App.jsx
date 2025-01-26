import './App.css'
import Sidebar from './components/Sidebar'
import Editing from './components/Editing'
import Preview from './components/Preview'

function App() {


  return (
    
      <main className='main-container'>
        <Sidebar />
        <Editing />
        <Preview />
      </main>

  )
}

export default App
