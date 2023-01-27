import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
