import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AddButton } from '../../components/Buttons/AddButton/AddButton';
import { resendVerification } from '../../redux/auth/operationsAuth';
import { Container, Title, Input, ButWrapper, HelperText } from '../../components/common/Form.styled';

const ResendEmail = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!email.trim()) {
      Notify.warning('Будь ласка, введіть адресу електронної пошти');
      return;
    }

    dispatch(resendVerification(email));
    console.log(email);
    setEmail('');
  };

  return (
    <Container>
      <Title>Повторно відправити листа</Title>
      <HelperText>Якщо ви не отримали лист для верифікації, введіть вашу пошту нижче.</HelperText>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Введіть ваш Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <ButWrapper>
          <AddButton type="primary">Надіслати лист</AddButton>
        </ButWrapper>
      </form>
    </Container>
  );
};

export default ResendEmail;
