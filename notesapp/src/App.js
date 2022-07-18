import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Main />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
