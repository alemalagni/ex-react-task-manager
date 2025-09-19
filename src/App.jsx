import { GlobalProvider } from "./components/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";
import NavBar from "./components/NavBar";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter >
        <GlobalProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/addTask" element={<AddTask />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter >

    </>
  )
}

export default App
