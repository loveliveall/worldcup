import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Container,
} from '@chakra-ui/react';

import Index from '@/pages';

function App() {
  return (
    <Container maxW="container.md" py={8}>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Container>
  );
}

export default App;
