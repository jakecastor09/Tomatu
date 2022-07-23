import styles from './page-container.module.css';
import Navbar from '../navbar/navbar.component';
import Sidebar from '../sidebar/sidebar.component';
const PageContainer = ({ children }) => {
  return (
    <div className={styles['page-container']}>
      <Navbar />
      <div className={styles.flex}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
export default PageContainer;
