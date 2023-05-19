import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/Login')
    }

    function handleRegister() {
        navigate('/Register')
    }

    function handleAbout() {
        navigate('/About')
    }

    return (
        <div className='App'>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleAbout}>About</button>
        </div>
    );
}

export default App;

