import styles from './menu-page.module.css';
import PageContainer from '../../components/page-container/page-container.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import MenuItem from '../../components/menu-item/menu-item.component';
const MenuPage = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <HeadingBar pageName='Menu' />
        <div className={styles.content}>
          <div className={styles['menu-items']}>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default MenuPage;
