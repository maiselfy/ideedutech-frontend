import { Input } from '@/components/form/Input';
import { useSteps } from '@/hooks/useSteps';
import { Box, Button, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiMailUnreadLine } from 'react-icons/ri';

export default function GestorsStep() {
  const { activeStep, steps, changeStep } = useSteps();
  const [emails, setEmails] = useState<string[]>([]);
  const { register, getValues } = useForm();

  function addEmailInWaitlist() {
    setEmails([...emails, getValues('email')]);
  }

  return (
    <Box
      background="gray.50"
      borderRadius="lg"
      padding="4"
      marginTop="4"
      display={activeStep === steps.gestor ? 'block' : 'none'}
    >
      <Box>
        <Text fontSize="2xl" fontWeight="bold" color="gray.800">
          Gestores
        </Text>
        <Text color="gray.400">
          Cadastre uma lista de emails dos gestores da instituição
        </Text>
      </Box>
      <Box marginTop="4">
        <Flex>
          <Input placeholder="Email" name="email" {...register('email')} />
          <Button
            colorScheme="green"
            marginLeft="4"
            onClick={addEmailInWaitlist}
          >
            Adicionar
          </Button>
        </Flex>
        <VStack align="flex-start" padding="4">
          {emails.length === 0 ? (
            <Text>Sem emails adicionados</Text>
          ) : (
            emails.map((email) => (
              <Flex key={email} align="center">
                <Icon
                  as={RiMailUnreadLine}
                  w="4"
                  h="4"
                  color="green.600"
                  marginRight="4"
                />
                <Text>{email}</Text>
              </Flex>
            ))
          )}
        </VStack>
      </Box>
      <Flex justify="flex-end" marginTop="8">
        <Button
          variant="link"
          color="gray.400"
          marginRight="4"
          onClick={() => changeStep(steps.school)}
        >
          ANTERIOR
        </Button>
        <Button
          variant="solid"
          colorScheme="green"
          onClick={() => changeStep(steps.done)}
        >
          CONCLUIR
        </Button>
      </Flex>
    </Box>
  );
}
