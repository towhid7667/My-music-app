import './App.css';
import Feature from './Components/Feature';
import Header from './Components/Header';
import MainBanner from './Components/MainBanner';

function App() {
  return (
    <div className="App text-white">
      <Header></Header>
      <MainBanner></MainBanner>
      <Feature></Feature>
      
    </div>
  );
}

export default App;
