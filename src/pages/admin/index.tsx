import React from 'react';
import AdminSidebar from '@/components/admin/sidebar';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { RiBuilding2Line } from 'react-icons/ri';
import { useRouter } from 'next/router';

const AdminDashboard: React.FC = () => {
  const router = useRouter();

  return (
    <Flex direction="column">
      <AdminSidebar />
      <Container maxW="container.xl" marginTop="4">
        <Flex align="center" flexDir={['column', 'column', 'row']}>
          <Flex
            align="center"
            justifyContent={['space-around', 'space-around', 'flex-start']}
            marginBottom={['8', '8', '0']}
            w="100%"
          >
            <Box
              w="20"
              h="20"
              background="green.100"
              borderRadius="2xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                w="16"
                h="16"
                src="https://user-images.githubusercontent.com/49327985/154339630-7a77024d-ed54-4100-a7b8-ca3f15dcd082.png"
              />
            </Box>
            <Box marginLeft="4">
              <Text color="gray.400">Escolas cadastradas</Text>
              <Text fontSize="3xl" fontWeight="bold" color="gray.800">
                04 ESCOLAS
              </Text>
            </Box>
          </Flex>
          <Spacer />
          <Button
            size="lg"
            variant="solid"
            colorScheme="green"
            onClick={() => router.push('/admin/new-school')}
            w={{ base: '100%', md: '200px' }}
          >
            Novo Gestor
          </Button>
        </Flex>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
          marginTop="8"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <GridItem
              key={i}
              w="100%"
              bg="gray.50"
              padding="4"
              borderRadius="xl"
            >
              <Flex>
                <Icon as={RiBuilding2Line} w="8" h="8" color="green.600" />
                <Box direction="column" marginLeft="4">
                  <Text>EEEF José Eduardo De Sousa</Text>
                  <Text fontSize="x-small" color="gray.400">
                    Criado à 2 semanas
                  </Text>
                </Box>
              </Flex>
              <Text marginTop="4" fontSize="sm" color="gray.400">
                Rua Antonio joaquim de Andrade, 121
              </Text>
              <Text marginTop="4">
                4 gestores・12 professores ・ 324 alunos
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Flex>
  );
};

export default AdminDashboard;
