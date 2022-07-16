import { useState } from 'react';
import styles from './checkbox-group.module.css';
import CheckBox from '../checkbox/checkbox.component';
const CheckBoxGroup = ({ list = [] }) => {
  const [selectedByIndex, setSelectedByIndex] = useState(undefined);
  const checkBoxHandler = event => {
    const id = event.target.id;
    if (selectedByIndex === id) {
      setSelectedByIndex(undefined);
      return;
    }
    setSelectedByIndex(id);
  };

  const renderAllCheckBox = list.map((item, index) => {
    return (
      <CheckBox
        key={index}
        id={index}
        name={item}
        onChange={checkBoxHandler}
        isChecked={selectedByIndex === index ? true : false}
      />
    );
  });
  return <div className={styles['checkbox-group']}>{renderAllCheckBox}</div>;
};
export default CheckBoxGroup;
