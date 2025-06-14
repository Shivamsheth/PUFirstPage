import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
//import MyName from './MyName';
function App() {
  return (

    <>
      <div className="App">
        <Navbar/>
        <div className='container'>
          <div className="container-image">
            <img src="https://mbahelpstation.com/wp-content/uploads/2023/04/Parul1.jpg" className='image' />
          </div>
          <Card />

        </div>
      </div>
      <div className='container-footer'>

        <Footer />

      </div>
    </>




  );
}

export default App;
