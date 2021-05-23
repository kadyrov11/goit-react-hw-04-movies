import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from '../../client/Movies/pages/HomePage'
// import MoviesPage from '../../client/Movies/pages/MoviesPage'
// import SingleMoviePage from '../../client/Movies/pages/SingleMoviePage/Components/SingleMoviePage'
import Navbar from '../../client/Navbar/Components/Navbar';

const HomePage = lazy(() => import('../../client/Movies/pages/HomePage'))
const MoviesPage = lazy(() => import('../../client/Movies/pages/MoviesPage'))
const SingleMoviePage = lazy(() => import('../../client/Movies/pages/SingleMoviePage/Components/SingleMoviePage'))

function App() {
  return (
    <Router>
      <Navbar />
          <Suspense fallback={<p>LOADING...</p>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movie" exact component={MoviesPage} />
            <Route path="/movie/:movieId" component={SingleMoviePage} /> 
            <Route component={HomePage} />
          </Switch>
          </Suspense>
    </Router>
  );
}

export default App;
