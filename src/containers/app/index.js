import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import NewPage from '../newpage'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/newPage">More Charts</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/newPage" component={NewPage} />
    </main>
  </div>
)

export default App
