import FeatureItem from '../feature-item/feature-item.component';

import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
const Showcase = () => {
  return (
    <>
      <div className='showcase'>
        <img src='' alt='' />
        <div className='grid'>
          <ul className='list'>
            <li>
              <FeatureItem
                icon={faTruckFast}
                title='Fast Delivery'
                message='A wonderful serenity has taken possession of my entire soul, like these sweet mornings my whole heart.'
              />
            </li>
            <li>
              <FeatureItem />
            </li>
            <li>
              <FeatureItem />
            </li>
            <li>
              <FeatureItem />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Showcase;
