import Marketplace from './components/Marketplace';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import ProductView from './components/ProductView';
import CartView from './components/CartView';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
          <Link to="/"><div className="nav-link">Shoply</div></Link>
          <Link to="/cart"><div className="nav-link">Cart</div></Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Marketplace} />
          <Route exact path="/product/:id" component={ProductView} />
          <Route exact path="/cart" component={CartView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
