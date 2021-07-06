import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
