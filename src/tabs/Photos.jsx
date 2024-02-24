import { getPhotos } from 'apiService/photos';
import { Form, PhotosGallery, Text } from 'components';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const hendleSearch = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const findPhotos = async () => {
      const { photos } = await getPhotos(query, 1);
      setPhotos(photos);
    };
    findPhotos();
  }, [query]);

  return (
    <>
      {/* <Text textAlign="center">Let`s begin search 🔎</Text> */}
      <Form onSubmit={hendleSearch} />
      <PhotosGallery gallery={photos} />
    </>
  );
};
