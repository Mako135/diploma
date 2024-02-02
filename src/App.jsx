import { Route, Routes } from "react-router"
import Home from "./components/Home"
import Header from "./feautures/header/Header"
import Footer from "./feautures/footer/Footer"

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
