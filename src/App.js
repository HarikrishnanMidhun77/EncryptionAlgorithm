
import CryptHome from './pages/home/crypt-home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <CryptHome {...props} />} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
