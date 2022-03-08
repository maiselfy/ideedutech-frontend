import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Img,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import ProfessorSideBar from '@/components/professor/ProfessorSideBar';
import {
  RiBookLine,
  RiCalendarLine,
  RiListCheck,
  RiListCheck2,
  RiMore2Line,
  RiTeamLine,
} from 'react-icons/ri';
import Calendar from '@/components/calendar';

const ProfessorDashboard: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <ProfessorSideBar />
      <SimpleGrid columns={3} spacing="4">
        <Flex flex="1" flexDirection="column" p="4">
          <Text fontSize="3xl" fontWeight="bold">
            Atividades
          </Text>
          <VStack spacing="4">
            {[1, 2, 3, 4, 5, 6].map((x) => (
              <Flex
                bgColor="gray.50"
                w="100%"
                flexDirection="column"
                p="4"
                borderRadius="lg"
              >
                <Flex justifyContent="center" align="center">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="12"
                    h="12"
                    bg="green.100"
                    mr="2"
                    borderRadius="md"
                  >
                    <Img
                      w="8"
                      h="8"
                      src="https://user-images.githubusercontent.com/49327985/157252598-251b1303-680c-456f-9ff1-6dfe380750ce.png"
                    />
                  </Box>
                  <Box>
                    <Text fontSize="x-small">APRESENTAÇÃO</Text>
                    <Text fontWeight="medium">Conflito na síria</Text>
                  </Box>
                  <Spacer />
                  <IconButton variant="ghost" icon={<RiMore2Line />} />
                </Flex>
                <Flex paddingTop="4" paddingBottom="4">
                  <Text>
                    Apresentação sobre os conflitos da síria, com no mínimo 10
                    slides, em grupo de 3 alunos.
                  </Text>
                </Flex>
                <Box>
                  <HStack>
                    <Flex justifyContent="center" align="center">
                      <Icon as={RiBookLine} color="green.600" mr="2" />
                      <Text>Geografia</Text>
                    </Flex>
                    <Flex justifyContent="center" align="center">
                      <Icon as={RiTeamLine} color="green.600" mr="2" />
                      <Text>3 ano C</Text>
                    </Flex>
                  </HStack>
                  <Flex justifyContent="space-between" mt="2">
                    <Flex align="center" justifyContent="center">
                      <AvatarGroup size="sm" max={2} mr="2">
                        <Avatar
                          name="Ryan Florence"
                          src="https://bit.ly/ryan-florence"
                        />
                        <Avatar
                          name="Segun Adebayo"
                          src="https://bit.ly/sage-adebayo"
                        />
                        <Avatar
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        <Avatar
                          name="Prosper Otemuyiwa"
                          src="https://bit.ly/prosper-baba"
                        />
                        <Avatar
                          name="Christian Nwamba"
                          src="https://bit.ly/code-beast"
                        />
                      </AvatarGroup>
                      <Text fontSize="sm">12/45 concluídos</Text>
                    </Flex>
                    <Button leftIcon={<RiCalendarLine />}>
                      <Text fontWeight="normal">Não Iniciada</Text>
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Flex>
        <Flex flex="1" flexDirection="column" p="4">
          <Text fontSize="3xl" fontWeight="bold">
            Avaliações
          </Text>
          <VStack spacing="4">
            {[1, 2, 3].map((x) => (
              <Flex
                bg="gray.50"
                p="4"
                borderRadius="md"
                w="100%"
                justify="space-around"
                align="center"
              >
                <Box>
                  <Text fontWeight="bold" fontSize="lg">
                    Mar, 25
                  </Text>
                  <Text fontSize="smaller">7:30 - 9:30</Text>
                </Box>
                <Text>Geografia</Text>
                <Text>3 ano A</Text>
                <IconButton
                  variant="ghost"
                  colorScheme="green"
                  icon={<RiListCheck2 size={24} />}
                />
              </Flex>
            ))}
          </VStack>
        </Flex>
        <Flex bgColor="gray.50" height="100vh">
          <Calendar/>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default ProfessorDashboard;
