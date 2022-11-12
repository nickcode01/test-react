import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divisores from '../containers/Divisores';
import Palindrome from '../containers/Palindrome';
import Countries from '../containers/Countries';
import ListaDeTareas from '../components/ListaDeTareas';

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>;
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>;
<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"  crossorigin></script>;

<script>var Alert = ReactBootstrap.Alert;</script>



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/divisores" element={<Divisores />} />
          <Route path="/palindrome" element={<Palindrome />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/listadetareas"element={<ListaDeTareas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

// import React from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Layout from '../containers/Layout';
// import Login from '../containers/Login';
// import RecoveryPassword from '../containers/RecoveryPassword';
// import home from '../pages/home'; 
// import Notfound from '../pages/Notfound';
// import '../styles/global.css';

// const App = () => {
//     return (
//         // <h1> Hola Mundo, Welcome to course react</h1>
//         <BrowserRouter>
//         <switch>
//             <Layout>
//                 <Route exact path='/' component={home}/>
//                 <Route exact path='/login' component={Login} />
//                 <Route exact path='recovery-password' component={RecoveryPassword} />
//                 <Route component={NotFound} />
//             </Layout>
//         </switch>
//         {/* <Layout>
//             <Login /> 
//             <RecoveryPassword />
//         </Layout> */}
//         </BrowserRouter>

//     );
// }

// export default App; 