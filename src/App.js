
import './App.css';
import Card from './components/cards/Card';
import Footer from './components/footer/Footer';
import Navabar from './components/navbar/Navabar'

function App() {
  return (
    <div className="App">
       <Navabar />
       <Card />
       <Footer />
    </div>
  );
}

export default App;
