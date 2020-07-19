import React from 'react';
import { Container } from '@material-ui/core';
import ApplicationHeader from '../common/header';

const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <ApplicationHeader />
      </Container>
    </>
  );
};

export default App;
