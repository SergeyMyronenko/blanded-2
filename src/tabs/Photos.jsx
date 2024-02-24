import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery, Text } from 'components';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const hendleSearch = query => {
    setQuery(query);
  };
  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const findPhotos = async () => {
      setIsLoading(true);
      try {
        const { photos } = await getPhotos(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...photos]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    findPhotos();
  }, [query, page]);

  return (
    <>
      <Form onSubmit={hendleSearch} />
      {photos.length === 0 && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      <PhotosGallery gallery={photos} />

      {photos.length > 0 && (
        <Button onClick={handleClick} disabled={isLoading}>
          Load more
        </Button>
      )}
      {isLoading && <Loader />}
    </>
  );
};
