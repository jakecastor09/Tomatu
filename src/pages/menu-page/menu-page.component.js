import styles from './menu-page.module.css';
import PageContainer from '../../components/page-container/page-container.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
const MenuPage = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <HeadingBar pageName='Menu' />
      </div>
    </PageContainer>
  );
};
export default MenuPage;
