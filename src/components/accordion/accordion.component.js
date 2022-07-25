import { useState } from 'react';
import Item from '../sidebar/item.component';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import styles from './accordion.module.css';
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
            <p key={item} className={styles['accordion-item']}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
