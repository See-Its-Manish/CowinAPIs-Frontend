import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FormContainer from './components/FormContainer';
function App() {
  return (
    <>
    <Navbar/>
    
    <div className="center_container">
      <FormContainer/>
    </div>
    </>
  );
}

export default App;
