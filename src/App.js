import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import BoothSequenceTest from './BoothSequenceTest'
import TimeSlots from './TimeSlots'
import Pairs from './Pairs'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <BoothSequenceTest />
            <TimeSlots />
            <Pairs />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
