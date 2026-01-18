import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operationsAuth';
import { AddButton } from '../../components/Buttons/AddButton/AddButton';
import { Input, Container, Title, ButWrapper } from '../../components/common/Form.styled';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Реєстрація</Title>
      <form onSubmit={handleSubmit} noValidate>
        <Input type="text" name="name" value={name} placeholder="Name" onChange={handleChange} />
        <Input type="email" name="email" value={email} placeholder="Email" onChange={handleChange} />
        <Input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />

        <ButWrapper>
          <AddButton type="primary">Зареєструватись</AddButton>
        </ButWrapper>
      </form>
    </Container>
  );
};

export default Register;
