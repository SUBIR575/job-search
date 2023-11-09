import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import Jobs from "./Components/JobSection/Jobs"
import Search from "./Components/SearchSection/Search"
import Value from "./Components/ValueSection/Value"

const App = () => {
  return (
    <>
      <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
      </div>
    </>
  )
}

export default App