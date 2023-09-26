
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './Pages/Header';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Login />
      <Register/>
      <Footer />
    </div>
  );
}

export default App;
