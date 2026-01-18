import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchProfessionById, deleteProfession } from '../../redux/profession/operationsProfessions';
import { selectUser } from '../../redux/auth/authSelectors';
import { selectCurrentProfession, selectIsLoading } from '../../redux/profession/professionSelectors';
import { BackButton } from '../../components/Buttons/BackButton/BackButton';
import { Loader } from '../../components/Loader/Loader';
import { DeleteButton } from '../../components/Buttons/Deletebutton/DeleteButton';
import { DivFlexbox, Container } from '../../components/common/divFlexbox.styled';
import { Text, Img } from './ProfessionAbout.styled';

const ProfessionAbout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentProfession = useSelector(selectCurrentProfession);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    if (id) {
      dispatch(fetchProfessionById(id));
    }
  }, [dispatch, id]);

  const handleDeleteProfession = () => {
    Confirm.show(
      'Видалення професії',
      'Ви впевнені, що хочете ПОВНІСТЮ видалити професію?',
      'Так',
      'Ні',
      async () => {
        try {
          const result = await dispatch(deleteProfession(id));

          if (deleteProfession.fulfilled.match(result)) {
            Notify.success('Професію успішно видалено');
            navigate('/', { replace: true });
          } else {
            Notify.failure('Не вдалося видалити професію');
          }
        } catch (error) {
          Notify.failure('Сталася помилка при видаленні');
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

  if (isLoading) return <Loader />;

  if (!currentProfession) {
    return (
      <Container>
        <Text>Професію не знайдено...</Text>
        <Link to="/">На головну</Link>
      </Container>
    );
  }

  return (
    <Container>
      <DivFlexbox>
        <BackButton />{' '}
        {isAdmin && (
          <DeleteButton onClick={handleDeleteProfession} title="Видалити професію">
            <DeleteOutlined />
          </DeleteButton>
        )}
      </DivFlexbox>

      <Img src={currentProfession.about?.image || 'via.placeholder.com'} alt={currentProfession.title} />

      <Text>{currentProfession.about?.text}</Text>
    </Container>
  );
};

export default ProfessionAbout;
