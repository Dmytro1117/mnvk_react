import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfessionById } from '../../redux/profession/operationsProfessions';
import { selectCurrentProfession, selectIsLoading } from '../../redux/profession/professionSelectors';
import { Loader } from '../../components/Loader/Loader';
import { Img, Section, Title, ButtonContainer, HomeLink } from './ProfessionStartingPage.styled';

const ProfessionStartingPage = () => {
  const { category, id } = useParams();
  const dispatch = useDispatch();
  const currentProfession = useSelector(selectCurrentProfession);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchProfessionById(id));
  }, [dispatch, id]);

  if (isLoading || !currentProfession) {
    return <Loader />;
  }

  return (
    <Section>
      <Title>{currentProfession.title}</Title>
      <ButtonContainer>
        <HomeLink to={`/${category}/${id}/about`}>Про професію</HomeLink>
        <HomeLink to={`/${category}/${id}/gallery`}>Галерея</HomeLink>
        <HomeLink to={`/${category}/${id}/lec`}>Лекційний матеріал</HomeLink>
      </ButtonContainer>

      <Img src={currentProfession.poster} alt={currentProfession.title} />
    </Section>
  );
};

export default ProfessionStartingPage;
