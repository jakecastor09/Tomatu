import { useContext, useState } from 'react';
import styles from './menu-page.module.css';
import PageContainer from '../../components/page-container/page-container.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import MenuItems from '../../components/menu-item/menu-items.component';
import MenuFilter from './menu-filter.component';
import MenuFilterContext from '../../store/menu-filter-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

const MenuPage = () => {
  const menuFilterCtx = useContext(MenuFilterContext);

  const dummyData = [
    {
      item: 1,
      image: '../../images/burger.png',
      name: 'Chicken Sandwich',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 2,
      image: '../../images/burger.png',
      name: 'Chicken Grill',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 3,
      image: '../../images/burger.png',
      name: 'Hot Pizza',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 4,
      image: '../../images/burger.png',
      name: 'Dhokla',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 5,
      image: '../../images/burger.png',
      name: 'Hotdog',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 6,
      image: '../../images/burger.png',
      name: 'Chicken Grill',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 7,
      image: '../../images/burger.png',
      name: 'Hot Pizza',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 8,
      image: '../../images/burger.png',
      name: 'Dhokla',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 9,
      image: '../../images/burger.png',
      name: 'Hotdog',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 10,
      image: '../../images/burger.png',
      name: 'Dhokla',
      details: 'A small river Duden',
      price: 25.01,
    },
    {
      item: 11,
      image: '../../images/burger.png',
      name: 'Hotdog',
      details: 'A small river Duden',
      price: 25.01,
    },
  ];

  const [layout, setLayout] = useState(1);

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
                <li
                  className={styles['menu-page__layout--item']}
                  onClick={() => {
                    setLayout(1);
                  }}
                >
                  <FontAwesomeIcon icon={faList} />
                </li>
                <li
                  className={styles['menu-page__layout--item']}
                  onClick={() => {
                    setLayout(2);
                  }}
                >
                  <FontAwesomeIcon icon={faTableCellsLarge} />
                </li>
                <li
                  className={styles['menu-page__layout--item']}
                  onClick={() => {
                    setLayout(3);
                  }}
                >
                  <FontAwesomeIcon icon={faTableCells} />
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <div className={styles['menu-items']}>
                <MenuItems layout={layout} data={dummyData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default MenuPage;
