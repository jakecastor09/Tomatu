import { useState, useEffect } from 'react';
import { storage } from '../../firebase/index';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { v4 } from 'uuid';
const FileUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const imageListRef = ref(storage, 'images/');

  const inputChangeHandler = event => {
    const imageFiles = event.target.files[0];

    if (imageFiles) {
      setImageUpload(imageFiles);
    }
  };
  const handleUpload = async () => {
    if (prevImage) {
      deleteObject(prevImage)
        .then(() => {
          console.log('File deleted Successfully');
        })
        .catch(error => {
          console.log(error);
        });
    }

    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload);
    setPrevImage(imageRef);

    listAll(imageListRef).then(response => {
      const fullPath = response.items[0];
      (async () => {
        const url = await getDownloadURL(fullPath);
        setAvatar(url);
      })();
    });
  };

  return (
    <div>
      <h3>File Upload</h3>
      <input type='file' onChange={inputChangeHandler} />
      <button onClick={handleUpload}>Upload</button>
      <img src={avatar} alt='' />
    </div>
  );
};
export default FileUpload;
