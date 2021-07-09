import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';

export default function Fotos() {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          <input type="file" id="foto" />
        </label>
      </Form>
    </Container>
  );
}
