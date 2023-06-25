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
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from './UseContext/ThemeContext';
import axios from 'axios';

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  const [currentUser, setCurrentUser] = useState()
  const user = JSON.parse(localStorage.getItem('current-user'))
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const res = await axios.get('https://uwd-node-js.vercel.app/v1/user/current-user', { headers: { token: `Bearer ${user.token}` } });
        if (res.data.code === 200) {
          setCurrentUser(res.data.currentUser._doc);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
       <ScrollToTop />
      <Provider>
        <div className="App"> 
            <Routes>
              <Route path='/' element={<><HeaderWelcome/><Welcome/></>} />
              {currentUser ? 
                <>
                  <Route path='/signup/new' element={<Signup />}/>
                  <Route path='/signin' element={<Signin />}/>
                  <Route path='/home' element={<><Header user={currentUser}/><HomePage user={currentUser}/><Footer /></>}/>
                  <Route path='/account/edit-profile' element={<><Header user={currentUser}/><EditProfilePage user={currentUser}/><Footer /></>} />
                  <Route path='/account/general' element={<><Header user={currentUser}/><GeneralPage user={currentUser}/><Footer /></>} />
                  <Route path='/account/password' element={<><Header user={currentUser}/><PasswordPage user={currentUser}/><Footer /></>} />
                </> : <></>
              }
            </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
