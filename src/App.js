import './App.css';
import ProfilePage from './pages/profile-page/profile-page.component';
import Register from './pages/register-page/register-page.component';
import Login from './pages/login-page/login-page.component';
import EditProfile from './pages/edit-profile/edit-profile.component';
import HomePage from './pages/home-page/home-page.component';
import { Route, Routes } from 'react-router-dom';
import MenuPage from './pages/menu-page/menu-page.component';
import MenuFilter from './pages/menu-page/menu-filter.component';
import PriceRange from './pages/menu-page/price-range.component';
import MenuFilterProvider from './store/MenuFilterProvider';
import FavouritePage from './pages/favourite-page/favourite-page.component';
import OrderHistoryPage from './pages/order-history-page/order-history-page.component';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/register-now' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profile-page' element={<ProfilePage />} />
        <Route exact path='/edit-profile' element={<EditProfile />} />
        <Route
          exact
          path='/menu'
          element={
            <MenuFilterProvider>
              <MenuPage />
            </MenuFilterProvider>
          }
        />
        <Route exact path='/favourite' element={<FavouritePage />}></Route>
        <Route
          exact
          path='/order-history'
          element={<OrderHistoryPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
