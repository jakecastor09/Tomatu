import { useState } from 'react';
import styles from './checkbox-group.module.css';
import CheckBox from '../checkbox/checkbox.component';
const CheckBoxGroup = ({ list = [], innerRef }) => {
  const [selectedByName, setSelectedByName] = useState('');
  const checkBoxHandler = event => {
    const name = event.checked;

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
        value={selectedByName}
        onChange={checkBoxHandler}
        isChecked={selectedByName === item ? true : false}
        innerRef={innerRef}
      />
    );
  });
  return <div className={styles['checkbox-group']}>{renderAllCheckBox}</div>;
};
export default CheckBoxGroup;
