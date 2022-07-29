import styles from './info-container.module.css';
import Card from '../../components/card/card.component';
const InfoContainer = ({ title, children }) => {
  return (
    <Card>
      <div className={styles['info-container']}>
        <div className={styles.heading}>
          <h1>{title}</h1>
        </div>
        {children}
      </div>
    </Card>
  );
};
export default InfoContainer;
