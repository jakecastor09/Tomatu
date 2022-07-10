import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

const FeatureItem = ({ icon, title, message }) => {
  return (
    <>
      <div className='feature__icons'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className='feature__heading'>{title}</h3>
      <p>{message}</p>
    </>
  );
};
export default FeatureItem;
