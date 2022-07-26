import { useState } from 'react';
import Item from '../sidebar/item.component';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import styles from './accordion.module.css';
import { Link } from 'react-router-dom';
const Accordion = ({ items = [], headerName }) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles['accordion-header']} onClick={clickHandler}>
        <Item name={headerName} icon={faIdBadge} />
      </div>
      {isClicked && items && (
        <div className={styles['accordion-items']}>
          {items.map(item => (
            <Link to={'/' + item.toLowerCase().replace(' ', '-')}>
              <p key={item} className={styles['accordion-item']}>
                {item}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
