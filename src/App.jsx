import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";
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
            <Route path="/task/:id" element={<TaskDetail />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter >

    </>
  )
}

export default App
