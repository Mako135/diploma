import { Route, Routes } from "react-router"
import Home from "./components/Home"
import Header from "./feautures/header/Header"

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
