import { Input } from '@/components/form/Input';
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

export default function Home() {
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
          <VStack spacing="4">
            <Input label="E-mail/Matrícula" />
            <Box w="100%">
              <InputPassword label="Senha" />
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
              <Button colorScheme="green" w="100%" marginBottom="2">
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
