import React, { useState } from 'react';
import * as yup from 'yup';
import { Input } from '@/components/form/Input';
import { useSteps } from '@/hooks/useSteps';
import { Box, Button, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RiMailUnreadLine } from 'react-icons/ri';

export default function GestorsStep() {
  const { activeStep, steps, changeStep } = useSteps();
  const [emails, setEmails] = useState<string[]>([]);
  const { register, getValues, handleSubmit, formState } = useForm({
    resolver: yupResolver(
      yup.object().shape({ email: yup.string().email('Não é um email').required('Email obrigatório') })
    ),
  });

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
        <Flex as="form" onSubmit={handleSubmit(addEmailInWaitlist)}>
          <Input
            placeholder="Email"
            name="email"
            error={formState?.errors?.email}
            {...register('email')}
          />
          <Button colorScheme="green" marginLeft="4" type="submit">
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
