import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined, CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Modal } from '../../components/Modal/Modal';
import { BackButton } from '../../components/Buttons/BackButton/BackButton';
import { AddButton } from '../../components/Buttons/AddButton/AddButton';
import { fetchProfessionById, addLecture, deleteLecture } from '../../redux/profession/operationsProfessions';
import { selectUser } from '../../redux/auth/authSelectors';
import { selectCurrentProfession, selectIsLoading } from '../../redux/profession/professionSelectors';
import { Loader } from '../../components/Loader/Loader';
import { DeleteButton } from '../../components/Buttons/Deletebutton/DeleteButton';
import { DivFlexbox, Container } from '../../components/common/divFlexbox.styled';
import {
  Button,
  StyledForm,
  FormInput,
  FormTextarea,
  LectureItem,
  LectureHeader,
  IconWrapper,
  LectureTitle,
  LectureContent,
  LectureText,
} from './ProfessionLecture.styled';

const ProfessionLecture = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector(selectUser);
  const currentProfession = useSelector(selectCurrentProfession);
  const isLoading = useSelector(selectIsLoading);

  const isAdmin = user?.role === 'admin';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newLecture, setNewLecture] = useState({ lectureTitle: '', content: '' });

  const [expandedLectures, setExpandedLectures] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(fetchProfessionById(id));
    }
  }, [dispatch, id]);

  const toggleLecture = lectureId => {
    setExpandedLectures(prev =>
      prev.includes(lectureId) ? prev.filter(item => item !== lectureId) : [...prev, lectureId],
    );
  };

  const handleDelete = lectureId => {
    Confirm.show(
      'Видалення лекції',
      'Ви впевнені, що хочете видалити цю лекцію? Цю дію неможливо скасувати.',
      'Так, видалити',
      'Скасувати',
      async () => {
        try {
          await dispatch(deleteLecture({ professionId: id, lectureId })).unwrap();
          Notify.success('Лекцію успішно видалено');
        } catch (error) {
          Notify.failure('Не вдалося видалити лекцію');
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

  const handleAddLecture = async e => {
    e.preventDefault();

    try {
      await dispatch(addLecture({ id, lectureData: newLecture })).unwrap();
      Notify.success('Лекцію додано успішно!');
      setNewLecture({ lectureTitle: '', content: '' });
    } catch (error) {
      Notify.failure(`${error}`);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <Container>
      <DivFlexbox>
        <BackButton />

        {isAdmin && <AddButton onClick={() => setIsModalOpen(true)}>Додати лекцію</AddButton>}
      </DivFlexbox>

      {currentProfession?.lectures?.length > 0 ? (
        currentProfession.lectures.map((lecture, index) => {
          const lectureKey = lecture._id || index;
          const isExpanded = expandedLectures.includes(lectureKey);

          return (
            <LectureItem key={lectureKey}>
              <LectureHeader $isExpanded={isExpanded} onClick={() => toggleLecture(lectureKey)}>
                <IconWrapper>{isExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}</IconWrapper>

                <LectureTitle>{lecture.lectureTitle}</LectureTitle>

                {isAdmin && (
                  <DeleteButton
                    onClick={e => {
                      e.stopPropagation();
                      handleDelete(lecture._id);
                    }}
                    title="Видалити лекцію"
                  >
                    <DeleteOutlined />
                  </DeleteButton>
                )}
              </LectureHeader>

              {isExpanded && (
                <LectureContent>
                  <LectureText>{lecture.content}</LectureText>
                </LectureContent>
              )}
            </LectureItem>
          );
        })
      ) : (
        <LectureTitle>Лекцій для цієї професії ще не додано.</LectureTitle>
      )}

      {isModalOpen && (
        <Modal title="Нова лекція" onClose={() => setIsModalOpen(false)}>
          <StyledForm onSubmit={handleAddLecture} noValidate>
            <FormInput
              type="text"
              placeholder="Заголовок лекції"
              value={newLecture.lectureTitle}
              onChange={e => setNewLecture({ ...newLecture, lectureTitle: e.target.value })}
              required
            />
            <FormTextarea
              placeholder="Зміст лекції..."
              value={newLecture.content}
              onChange={e => setNewLecture({ ...newLecture, content: e.target.value })}
              required
            />
            <Button type="submit">Опублікувати</Button>
          </StyledForm>
        </Modal>
      )}
    </Container>
  );
};

export default ProfessionLecture;
