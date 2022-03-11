import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/form/Input';
import { useSteps } from '@/hooks/useSteps';
import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface SchoolData {
  schoolName: string;
  phone: string;
  cep: string;
  adress: string;
  number: string;
  city: string;
  district: string;
  state: string;
}

const schoolSchema = yup.object().shape({
  schoolName: yup
    .string()
    .min(5, 'O nome da instituição precisa conter no mínimo 5 dígitos')
    .required('O nome da instituição é obrigatório'),
  phone: yup
    .string()
    .length(11, 'O telefone precisa conter 11 dígitos')
    .required('O telefone é obrigatório'),
  CEP: yup
    .string()
    .length(8, 'O CEP precisa conter 8 dígitos')
    .required('O CEP é obrigatório'),
  adress: yup
    .string()
    .min(5, 'A rua no mínimo precisa conter 5 caracteres')
    .required('A rua ou avenida é obrigatório'),
  number: yup
    .string()
    .min(1, 'O número precisa ter pelo menos um dígito')
    .required('O número da escola é obrigatório'),
  city: yup
    .string()
    .min(3, 'A cidade precisa conter pelo menos 3 caracteres')
    .required('A cidade é obrigatório'),
  district: yup
    .string()
    .min(3, 'A cidade precisa conter pelo menos 3 caracteres')
    .required('O bairro é obrigatório'),
  state: yup
    .string()
    .length(2, 'O estado precisa conter 2 caracteres')
    .required('O estado é obrigatório'),
});

const SchoolStep: React.FC = () => {
  const { changeStep, activeStep, steps } = useSteps();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schoolSchema),
  });

  const handleNextStep = async (data: SchoolData) => {
    // await api.post('/api/school', data);
    changeStep(steps.gestor)
  };

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
      <VStack
        as="form"
        spacing="4"
        flex="1"
        marginTop="4"
        onSubmit={handleSubmit(handleNextStep)}
      >
        <Input
          label="Nome da instituição"
          name="schoolName"
          error={formState.errors.schoolName}
          {...register('schoolName')}
        />
        <HStack spacing="4" w="100%">
          <Input
            label="Telefone"
            name="phone"
            {...register('phone')}
            error={formState.errors.phone}
          />
          <Input
            label="CEP"
            name="CEP"
            {...register('CEP')}
            error={formState.errors.CEP}
          />
        </HStack>
        <HStack spacing="4" w="100%">
          <Input
            label="Rua"
            name="adress"
            {...register('adress')}
            error={formState.errors.adress}
          />
          <Input
            label="Número"
            name="number"
            {...register('number')}
            error={formState.errors.number}
          />
        </HStack>
        <HStack spacing="4" w="100%">
          <Input
            label="Cidade"
            name="city"
            {...register('city')}
            error={formState.errors.city}
          />
          <Input
            label="Bairro"
            name="district"
            {...register('district')}
            error={formState.errors.district}
          />
          <Input
            label="Estado"
            name="state"
            {...register('state')}
            error={formState.errors.state}
          />
        </HStack>
        <Flex justify="flex-end" marginTop="8" w="100%">
          <Button variant="link" color="gray.400" marginRight="4">
            Cancelar
          </Button>
          <Button type="submit" variant="solid" colorScheme="green">
            Próximo
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default SchoolStep;
