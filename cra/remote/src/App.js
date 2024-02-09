import Footer from '../../sharedComponent/src/Footer';
import Header from '../../sharedComponent/src/Header';
import RemoteComponent from './remoteComponent';
import LocalButton from './Button';

const App = () => (
  <div>
    <Header />
    <RemoteComponent title="Hello Remote !"/>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <Footer />
  </div>
);

export default App;
