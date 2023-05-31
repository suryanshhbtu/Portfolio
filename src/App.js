import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from './Component/Layout/Layout';
import Home from './Component/Pages/Home';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/projects'>
          <p>Project PAGE</p>
        </Route>
        <Route path='/achievements'>
          <p>Achievements PAGE</p>
        </Route>
        <Route path='/resume'>
          <p>Resume PAGE</p>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
