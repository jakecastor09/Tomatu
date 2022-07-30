import './App.css';
import ProfilePage from './pages/profile-page/profile-page.component';
import Register from './pages/register-page/register-page.component';
import Login from './pages/login-page/login-page.component';
import EditProfile from './pages/edit-profile/edit-profile.component';
import HomePage from './pages/home-page/home-page.component';
import { Route, Routes } from 'react-router-dom';
import MenuItem from './components/menu-item/menu-item.component';
import MenuPage from './pages/menu-page/menu-page.component';
import MenuFilter from './pages/menu-page/menu-filter.component';
import PriceRange from './pages/menu-page/price-range.component';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/register-now' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profile-page' element={<ProfilePage />} />
        <Route exact path='/edit-profile' element={<EditProfile />} />
        <Route exact path='/menu' element={<MenuPage />} />
      </Routes>
    </>
  );
}

export default App;
