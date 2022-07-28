import './App.css';
import ProfilePage from './pages/profile-page/profile-page.component';
import Register from './pages/register-page/register-page.component';
import Login from './pages/login-page/login-page.component';
import EditProfile from './pages/edit-profile/edit-profile.component';
import ProfileDetails from './pages/profile-page/profile-details.component';
import HomePage from './pages/home-page/home-page.component';
import { Route, Routes, Redirect } from 'react-router-dom';
import Review from './components/review/review.component';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/register-now' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profile-page' element={<ProfilePage />} />
        <Route exact path='/edit-profile' element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
