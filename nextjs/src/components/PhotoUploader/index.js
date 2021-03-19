import React from 'react';
import {IKContext, IKUpload} from 'imagekitio-react';

import styles from './PhotoUploader.module.css';

const PhotoUploader = ({setPhoto}) => {
  const publicKey = 'public_6pr648IxC9UjibZ8nnjNtChLPnc=';
  const urlEndpoint = 'https://ik.imagekit.io/jzi56985gkt';
  const authenticationEndpoint = '/api/auth';

  const onSuccess = (res) => {
    setPhoto(res.url);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticationEndpoint={authenticationEndpoint}
      >
        <label htmlFor="file-upload" className={styles.custom_file_upload}>
          Upload image
        </label>
        <IKUpload
          id="file-upload"
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          style={{
            display: 'none',
          }}
        />
      </IKContext>
    </div>
  );
};

export default PhotoUploader;
