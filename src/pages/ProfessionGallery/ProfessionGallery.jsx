import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { DeleteOutlined } from '@ant-design/icons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { fetchProfessionById, deletePhoto, addPhotosToGallery } from '../../redux/profession/operationsProfessions';
import { selectUser } from '../../redux/auth/authSelectors';
import { selectCurrentProfession, selectIsLoading } from '../../redux/profession/professionSelectors';
import { Loader } from '../../components/Loader/Loader';
import { BackButton } from '../../components/Buttons/BackButton/BackButton';
import { AddButton } from '../../components/Buttons/AddButton/AddButton';
import { DeleteButton } from '../../components/Buttons/Deletebutton/DeleteButton';
import { DivFlexbox, Container } from '../../components/common/divFlexbox.styled';
import { Gallery, Img, PhotoWrapper, UploadContainer, HiddenInput, UploadLabel } from './ProfessionGallery.styled';

const ProfessionGallery = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const user = useSelector(selectUser);
  const currentProfession = useSelector(selectCurrentProfession);
  const isLoading = useSelector(selectIsLoading);
  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    if (id) {
      dispatch(fetchProfessionById(id));
    }
  }, [dispatch, id]);

  const handleFileChange = async e => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('photos', file);
    });

    setIsUploading(true);

    const resultAction = await dispatch(addPhotosToGallery({ id, formData }));

    setIsUploading(false);

    if (addPhotosToGallery.fulfilled.match(resultAction)) {
      Notify.success('Фото успішно додано до галереї!');
      e.target.value = '';
    } else {
      Notify.failure(resultAction.payload || 'Помилка при завантаженні фото');
    }
  };

  const handleDeletePhoto = photoId => {
    Confirm.show(
      'Видалення фото',
      'Ви впевнені, що хочете видалити це зображення з галереї?',
      'Так, видалити',
      'Скасувати',
      async () => {
        try {
          await dispatch(deletePhoto({ professionId: id, photoId })).unwrap();
          Notify.success('Фото видалено');
        } catch (error) {
          Notify.failure('Не вдалося видалити фото');
        }
      },
      null,
      {
        titleColor: '#ef4444',
        okButtonBackground: '#ef4444',
        borderRadius: '12px',
        backOverlayColor: 'rgba(0,0,0,0.5)',
      },
    );
  };

  const images = currentProfession?.gallery || [];
  const slides = images.map(img => ({ src: img.url }));

  return (
    <Container>
      {(isLoading || isUploading) && <Loader />}

      <DivFlexbox>
        <BackButton />

        {isAdmin && (
          <UploadContainer>
            <HiddenInput
              type="file"
              multiple
              accept="image/*"
              id="upload-photo"
              onChange={handleFileChange}
              disabled={isUploading}
            />
            <UploadLabel htmlFor="upload-photo" $disabled={isUploading}>
              <AddButton as="span" disabled={isUploading}>
                Додати фото
              </AddButton>
            </UploadLabel>
          </UploadContainer>
        )}
      </DivFlexbox>

      <Gallery>
        {images.map((image, idx) => (
          <PhotoWrapper key={image._id || idx}>
            <Img
              src={image.url}
              alt="Gallery"
              loading="lazy"
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            />

            {isAdmin && (
              <DeleteButton
                isAbsolute
                onClick={e => {
                  e.stopPropagation();
                  handleDeletePhoto(image._id);
                }}
                title="Видалити фото"
              >
                <DeleteOutlined />
              </DeleteButton>
            )}
          </PhotoWrapper>
        ))}
      </Gallery>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
    </Container>
  );
};

export default ProfessionGallery;
