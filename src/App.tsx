import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Books from './pages/Books'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
