import { Input } from '@/components/form/Input';
import { useSteps } from '@/hooks/useSteps';
import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const SchoolStep: React.FC = () => {
  const { changeStep, activeStep, steps } = useSteps();
  return (
    <Box
      background="gray.50"
      borderRadius="lg"
      padding="4"
      marginTop="4"
      display={activeStep === steps.school ? 'block' : 'none'}
      >
      <Box>
        <Text fontSize="2xl" fontWeight="bold" color="gray.800">
          Dados Institucionais
        </Text>
        <Text color="gray.400">
          Cadastre os dados instituicionais para prosseguir para o próximo passo
        </Text>
      </Box>
      <VStack as="form" spacing="4" flex="1" marginTop="4">
        <Input label="Nome da instituição" />
        <HStack spacing="4" w="100%">
          <Input label="Telefone" />
          <Input label="CEP" />
        </HStack>
        <HStack spacing="4" w="100%">
          <Input label="Rua" />
          <Input label="Número" />
        </HStack>
        <HStack spacing="4" w="100%">
          <Input label="Cidade" />
          <Input label="Bairro" />
        </HStack>
      </VStack>
      <Flex justify="flex-end" marginTop="8">
        <Button variant="link" color="gray.400" marginRight="4">
          Cancelar
        </Button>
        <Button
          variant="solid"
          colorScheme="green"
          onClick={() => changeStep('gestor')}
        >
          Próximo
        </Button>
      </Flex>
    </Box>
  );
};

export default SchoolStep;
