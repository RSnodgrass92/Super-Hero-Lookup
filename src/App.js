import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main"

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 vertical-center">
          <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
