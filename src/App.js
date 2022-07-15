import './App.css';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';
import Navbar from './components/navbar/navbar.component';
import Sidebar from './components/sidebar/sidebar.component';
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />;
    </>
  );
}

export default App;
