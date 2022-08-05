import { useContext } from 'react';
import styles from './menu-page.module.css';
import PageContainer from '../../components/page-container/page-container.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import MenuItem from '../../components/menu-item/menu-item.component';
import MenuFilter from './menu-filter.component';
import MenuFilterContext from '../../store/menu-filter-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuPage = () => {
  const menuFilterCtx = useContext(MenuFilterContext);
  console.log(menuFilterCtx.allItemsSelected);

  return (
    <PageContainer>
      <div className={styles['header']}>
        <HeadingBar pageName='Menu' />
        <div className={styles['menu-page']}>
          <MenuFilter />
          <div className={styles.container}>
            <div className={styles['menu-page__layout']}>
              <h3>Menu Layout</h3>
              <ul className={styles['menu-page__layout--items']}>
                <li className={styles['menu-page__layout--item']}>
                  <FontAwesomeIcon icon={faBars} />
                </li>
                <li className={styles['menu-page__layout--item']}>
                  <FontAwesomeIcon icon={faTableCellsLarge} />
                </li>
                <li className={styles['menu-page__layout--item']}>
                  <FontAwesomeIcon icon={faTableCells} />
                </li>
              </ul>
            </div>
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
        </div>
      </div>
    </PageContainer>
  );
};
export default MenuPage;
