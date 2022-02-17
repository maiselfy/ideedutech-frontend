import { useSteps } from '@/hooks/useSteps';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const DoneStep: React.FC = () => {
  const { activeStep, steps } = useSteps();
  return (
    <Flex
      direction="column"
      bg="gray.50"
      borderRadius="lg"
      marginTop="4"
      padding="4"
      justifyContent="center"
      alignItems="center"
      display={activeStep === steps.done ? 'flex' : 'none'}
    >
      <Image
        src="https://user-images.githubusercontent.com/49327985/154379385-e746714c-dd89-4c0a-bd9e-e6b4d60d50b6.png"
        w="56"
        h="56"
      />
      <Text fontSize="32" fontWeight="bold" color="gray.800" marginTop="8">Instituição criada</Text>
      <Text textAlign="center" marginTop="4">
        Perfeito! Esta instituição acaba de ser criada! para mais detalhes,
        clique no botão abaixo para visualizá-la
      </Text>
      <Button marginTop="8" colorScheme="green" size="lg" >VISUALIZAR INSTITUIÇÃO CRIADA</Button>
    </Flex>
  );
};

export default DoneStep;
