import MainNavbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="content">
        {/* <h1>{ <Home />}</h1> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
