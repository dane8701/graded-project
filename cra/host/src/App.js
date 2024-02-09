import React from 'react';
import Footer from '../../sharedComponent/src/Footer';
import Header from '../../sharedComponent/src/Header';
import HostComponent from './hostComponent';
import Pokemon from './pokemon/pokemon';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Header/>
    <HostComponent text="Hello host !"/>
    <Pokemon/>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <Footer />
  </div>
);

export default App;
