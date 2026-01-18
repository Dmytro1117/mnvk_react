import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginization } from '../../redux/auth/operationsAuth';
import { AddButton } from '../../components/Buttons/AddButton/AddButton';
import { Input, Container, Title, ButWrapper, HelperText, AccentLink } from '../../components/common/Form.styled';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginization({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Увійти</Title>
      <form onSubmit={handleSubmit} noValidate>
        <Input type="email" name="email" value={email} placeholder="Email" onChange={handleChange} />
        <Input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
        <ButWrapper>
          <AddButton type="primary">Увійти</AddButton>
        </ButWrapper>
      </form>
      <HelperText>
        Не отримали лист підтвердження?
        <AccentLink to="/resend-email">Надіслати знову</AccentLink>
      </HelperText>
    </Container>
  );
};

export default Login;
