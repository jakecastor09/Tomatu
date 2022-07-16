import { useState } from 'react';
import styles from './checkbox-group.module.css';
import CheckBox from '../checkbox/checkbox.component';
const CheckBoxGroup = ({ list = [] }) => {
  const [selectedByName, setSelectedByName] = useState('');
  const checkBoxHandler = event => {
    const name = event.target.name;
    if (selectedByName === name) {
      setSelectedByName('');
      return;
    }
    setSelectedByName(name);
  };

  const renderAllCheckBox = list.map((item, index) => {
    return (
      <CheckBox
        key={index}
        name={item}
        onChange={checkBoxHandler}
        isChecked={selectedByName === item ? true : false}
      />
    );
  });
  return <div className={styles['checkbox-group']}>{renderAllCheckBox}</div>;
};
export default CheckBoxGroup;
