import MainNavbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <MainNavbar />
              <div className='content'><Home /></div>
    </div>
  );
}

export default App;
