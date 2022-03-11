import { Input } from '@/components/form/Input';
import * as yup from 'yup';
import { InputPassword } from '@/components/form/InputPassword';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
interface UserData {
  email: string;
  password: string;
}

const userSchema = yup.object().shape({
  email: yup.string().email('Não é um email').required('Email obrigatório'),

  password: yup
    .string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatório'),
});

export default function Home() {
  const { register, getValues, handleSubmit, formState } = useForm({
    resolver: yupResolver(userSchema),
  });

  const handleSignIn = async (data: UserData) => {
    console.log({ ...data });
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      background="gray.100"
      alignItems="center"
      justifyContent="center"
    >
      <Flex h="700">
        <Box h="100%" w="800px" borderLeftRadius="md" bg="green.600" p="8">
          <Heading color="gray.50" paddingTop="8">
            Gerencie suas escolas e aulas da melhor forma possível
          </Heading>
        </Box>
        <Flex
          flexDir="column"
          bg="gray.50"
          p="8"
          minWidth="400px"
          borderRightRadius="md"
        >
          <Image
            w="90"
            h="90"
            marginBottom="12"
            marginTop="8"
            src="https://user-images.githubusercontent.com/49327985/154309877-cd022fe2-feb8-4193-b61a-baea24104eec.svg"
          />
          <VStack spacing="4" as="form" onSubmit={handleSubmit(handleSignIn)}>
            <Input
              label="E-mail"
              name="email"
              error={formState.errors.email}
              {...register('email')}
            />
            <Box w="100%">
              <InputPassword
                label="Senha"
                name="password"
                error={formState.errors.password}
                {...register('password')}
              />
              <Link fontSize="x-small" color="green.600">
                Esqueci minha senha
              </Link>
            </Box>
            <Flex
              flexDir="column"
              w="100%"
              justify="center"
              alignItems="center"
            >
              <Button
                colorScheme="green"
                w="100%"
                marginBottom="2"
                type="submit"
              >
                Entrar
              </Button>
              <Link fontSize="sm" color="gray.400">
                Cadastre-se
              </Link>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
