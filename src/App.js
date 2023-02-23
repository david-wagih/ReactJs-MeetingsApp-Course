import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "../src/pages/AllMeetups";
import NewMeetupPage from "../src/pages/NewMeetup";
import FavoritesPage from "../src/pages/Favorites";
import Layout from "../src/components/layout/Layout";

function App() {
  // localhost:3000
  // my-page.com

  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup" exact>
            <NewMeetupPage />
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
