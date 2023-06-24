import HeaderWelcome from './HeaderAndFooter/HeaderWelcome';
import Header from './HeaderAndFooter/Header';
import Footer from './HeaderAndFooter/Footer';
import Welcome from './WelcomePage';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import HomePage from './HomePage';
import EditProfilePage from './UserPage/EditProfile';
import GeneralPage from './UserPage/General';
import PasswordPage from './UserPage/Password';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import Provider from './UseContext/Provider';
import { useEffect } from 'react';

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <Router>
       <ScrollToTop />
      <Provider>
        <div className="App">
          <Routes>
            <Route path='/' element={<><HeaderWelcome/><Welcome/></>} />
            <Route path='/signup/new' element={<Signup />}/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/home' element={<><Header/><HomePage/><Footer /></>}/>\
            <Route path='/account/edit-profile' element={<><Header/><EditProfilePage/><Footer /></>} />
            <Route path='/account/general' element={<><Header/><GeneralPage/><Footer /></>} />
            <Route path='/account/password' element={<><Header/><PasswordPage/><Footer /></>} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
