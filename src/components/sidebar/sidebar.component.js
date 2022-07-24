import styles from './sidebar.module.css';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import SocialNetwork from '../social-network/social-network.component';
import Accordion from '../accordion/accordion.component';
import Item from './item.component';
const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.main}>
        <h1 className={styles.title}>Main</h1>
        <div className={styles.content}>
          <ul className={styles.list}>
            <Item name='Dashboard' icon={faBorderAll} />
            <Item name='Menu' icon={faBurger} />
            <Item name='Favourite' icon={faBookmark} />
            <Item name='Order History' icon={faList} />
            <Item name='Booking System' icon={faBook} />
            <Accordion
              items={['Profile Page', 'Edit Page']}
              headerName='Profile Page'
            />
          </ul>
        </div>
      </div>
      <div className={styles.authentication}>
        <h1 className={styles.title}>Authentication Pages</h1>
        <div className={styles.content}>
          <ul className={styles.list}>
            <Item name='Login' icon={faArrowAltCircleRight} />
            <Item name='Register Now' icon={faFileLines} />
            <Item name='Lock Screen' icon={faLock} />
            <Item name='Recover Password' icon={faKey} />
          </ul>
        </div>
      </div>

      <div className={styles['sidebar-footer']}>
        <div className={styles['social-media']}>
          <SocialNetwork />
        </div>
        <p>
          &copy; 2018 <span className={styles['primary-color']}>Tomatos</span>{' '}
          All Right Reserved
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
