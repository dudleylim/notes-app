import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Main />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
