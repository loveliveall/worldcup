import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Container,
} from '@chakra-ui/react';

import Index from '@/pages';
import Quiz from '@/pages/quiz';

function App() {
  return (
    <Container maxW="container.md" py={8}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Container>
  );
}

export default App;
