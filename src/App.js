import './App.css';
import Feature from './Components/Feature';
import Header from './Components/Header';
import MainBanner from './Components/MainBanner';
import SearchComp from './Components/SearchComp';

function App() {
  return (
    <div className="App text-white">
      <Header></Header>
      <MainBanner></MainBanner>
      <Feature></Feature>
      <SearchComp></SearchComp>
      
    </div>
  );
}

export default App;
