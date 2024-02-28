import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import _Routes from './Routes/Routes';
import Layout from './layout/layout';

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { LayoutProvider } from './layout/context/layoutcontext';

function App() {
  const value = {
    ripple: true,
  };
  return (
    <>
      <PrimeReactProvider value={value}>
        <LayoutProvider>
          <Router>
            <Layout>
              <_Routes/>
            </Layout>
          </Router>
        </LayoutProvider>



      </PrimeReactProvider>

    </>
  )
}

export default App
