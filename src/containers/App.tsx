import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Sidebar, Header } from '../components';

const Home = lazy(() => import('../pages/Home'));
const Documents = lazy(() => import('../pages/Documents'));
const DeletedDocuments = lazy(() => import('../pages/DeletedDocuments'));
const DocumentLibrary = lazy(() => import('../pages/Library'));
const Sharing = lazy(() => import('../pages/Sharing'));

const App = () => {
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <main className="main">
          <Header />
          <Suspense fallback={null}>
            <Switch>
              <Route path="/home" name="Home" component={Home} />
              <Route path="/documents" name="Documents" component={Documents} />
              <Route path="/deleted" name="DeletedDocuments" component={DeletedDocuments} />
              <Route path="/library" name="DocumentLibrary" component={DocumentLibrary} />
              <Route path="/sharing" name="Sharing" component={Sharing} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
