import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UpdateItem from './pages/admin/UpdateItem';
import CreateItem from './pages/admin/CreateItem';
import ManageItems from './pages/admin/ManageItems';
import Items from './pages/Items';

function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/items" exact component={Items} />
          <Route path="/manage-items" component={ManageItems} />
          <Route path="/update-item/:id" component={UpdateItem} />
          <Route path="/create-item" component={CreateItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
