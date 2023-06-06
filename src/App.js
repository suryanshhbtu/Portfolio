import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from './Component/Layout/Layout';
import Home from './Component/Pages/Home';
import SubHeading from './Component/Pages/Home/SubHeading';
import Achievements from './Component/Pages/Achievements';
import Projects from './Component/Pages/Projects';
import Resume from './Component/Pages/Resume';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/projects'>
        <SubHeading heading="Projects" />
          <Projects/>
        </Route>
        <Route path='/achievements'>
          <SubHeading heading="Achievements" />
          <Achievements />
        </Route>
        <Route path='/resume'>
          <Resume/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
