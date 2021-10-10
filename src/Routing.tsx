import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bookings from './Pages/Bookings';
const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Bookings} />
      </Switch>
    </Router>
  );
};

export default Routing;
