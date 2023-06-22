import { toast } from 'react-toastify';

function useMedia() {
  const uploadMedia = async (media, setPostData) => {
    const mediaType = media.type.split('/')[0];
    if (mediaType === 'video' && Math.round(media.size / 1024000) > 10)
      toast.error('Video size should be less than 10MB');
    else if (Math.round(media.size / 1024000) > 4)
      toast.error('Image size should be less than 4MB');
    else {
      const data = new FormData();
      data.append('file', media);
      data.append(
        'upload_preset',
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      data.append('folder', 'social-media');
      const requestOptions = {
        method: 'POST',
        body: data,
      };
      const url =
        mediaType === 'video'
          ? `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/video/upload`
          : `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;
      await fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => {
          setPostData(prev => ({ ...prev, mediaURL: json.url }));
          return [json.secure_url];
        })
        .catch(error => {
          console.error(error);
          toast.error('Media Uploading failed');
        });
    }
  };

  const deleteMedia = async (deleteToken, setPostData, setDeleteToken) => {
    try {
      const formData = new FormData();
      formData.append('upload_preset', 'gb4ejp8y');
      formData.append('token', deleteToken);
      await fetch('https://api.cloudinary.com/v1_1/dbiyvbal5/delete_by_token', {
        method: 'POST',
        body: formData,
      });

      if (setDeleteToken) {
        setDeleteToken(null);
        setPostData(prev => ({ ...prev, mediaURL: '' }));
      }
    } catch (error) {
      console.error('deleteMedia: Error In deleting Media', error);
      if (setDeleteToken) {
        setDeleteToken(null);
        setPostData(prev => ({ ...prev, mediaURL: '' }));
      }
    }
  };

  return { uploadMedia, deleteMedia };
}

export { useMedia };
