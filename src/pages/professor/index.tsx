import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Img,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
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
import { api } from '@/services/api';
import { format } from 'date-fns';

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  discipline: string;
  type: 'task' | 'presentation';
  class: {
    name: string;
    total: number;
    missingStudents: [{ avatar: string }];
  };
}

interface Exam {
  id: number;
  date: string;
  initialHour: string;
  endHour: string;
  discipline: string;
  class: {
    name: string;
  };
}

const ProfessorDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>(null);
  const [exams, setExams] = useState<Exam[]>([]);
  const taskRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getTasks = api.get('/tasks');
    const getExams = api.get('/exams');
    Promise.allSettled([getTasks, getExams]).then((results) => {
      if (results[0].status === 'fulfilled') setTasks(results[0].value.data);
      if (results[1].status === 'fulfilled') setExams(results[1].value.data);
    });
  }, []);

  return (
    <Flex flexDirection="column">
      <ProfessorSideBar />
      <SimpleGrid minChildWidth="300px" spacing="2">
        <Flex flex="1" flexDirection="column" p="8">
          <Text fontSize="3xl" fontWeight="bold" mb="4">
            Atividades
          </Text>
          <VStack spacing="4">
            {tasks.map((task: Task) => (
              <Flex
                cursor="pointer"
                ref={taskRef}
                colorScheme="teal"
                onClick={() => {setSelectedTask(task); onOpen()}}
                key={task.id}
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
                    <Text fontSize="x-small">{task.type.toUpperCase()}</Text>
                    <Text fontWeight="medium">{task.title}</Text>
                  </Box>
                  <Spacer />
                  <IconButton variant="ghost" icon={<RiMore2Line />} />
                </Flex>
                <Flex paddingTop="4" paddingBottom="4">
                  <Text>{task.description}</Text>
                </Flex>
                <Box>
                  <HStack>
                    <Flex justifyContent="center" align="center">
                      <Icon as={RiBookLine} color="green.600" mr="2" />
                      <Text>{task.discipline}</Text>
                    </Flex>
                    <Flex justifyContent="center" align="center">
                      <Icon as={RiTeamLine} color="green.600" mr="2" />
                      <Text>{task.class.name}</Text>
                    </Flex>
                  </HStack>
                  <Flex justifyContent="space-between" mt="2">
                    <Flex align="center" justifyContent="center">
                      <AvatarGroup size="sm" max={2} mr="2">
                        {task.class.missingStudents.map(
                          (student: { avatar: string }) => (
                            <Avatar name="Ryan Florence" src={student.avatar} />
                          )
                        )}
                      </AvatarGroup>
                      <Text fontSize="sm">{`${
                        task.class.total - task.class.missingStudents.length
                      }/${task.class.total} conclu??dos`}</Text>
                    </Flex>
                    <Button leftIcon={<RiCalendarLine />}>
                      <Text fontWeight="normal">N??o Iniciada</Text>
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Flex>
        <Flex flex="1" flexDirection="column" p="8" mr="-40">
          <Text fontSize="3xl" fontWeight="bold" mb="4">
            Avalia????es
          </Text>
          <VStack spacing="4">
            {exams.map((exam) => (
              <Flex
                key={exam.id}
                bg="gray.50"
                p="4"
                borderRadius="md"
                w="100%"
                justify="space-around"
                align="center"
              >
                <Box>
                  <Text fontWeight="bold" fontSize="lg">
                    {format(new Date(exam.date), 'MMMM, dd')}
                  </Text>
                  <Text fontSize="smaller">{`${exam.initialHour} - ${exam.endHour}`}</Text>
                </Box>
                <Text>{exam.discipline}</Text>
                <Text>{exam.class.name}</Text>
                <IconButton
                  variant="ghost"
                  colorScheme="green"
                  icon={<RiListCheck2 size={24} />}
                />
              </Flex>
            ))}
          </VStack>
        </Flex>
        <Flex w="100%" justifyContent="flex-end">
          <Flex bgColor="gray.50" flexDir="column" p="8">
            <Text fontSize="3xl" fontWeight="bold">
              Atividades
            </Text>
            <Calendar />
            <Text fontSize="3xl" fontWeight="bold">
              Aulas de Hoje
            </Text>
            <VStack spacing="4">
              {exams.map((exam: Exam) => (
                <Flex w="100%" p="4" borderRadius="md">
                  <Box mr="4" textAlign="center">
                    <Text fontWeight="bold" fontSize="lg">
                      {format(new Date(exam.date), 'MMMM, dd')}
                    </Text>
                    <Text fontSize="smaller">{`${exam.initialHour} - ${exam.endHour}`}</Text>
                  </Box>
                  <Box>
                    <Text>Aula Exemplo</Text>
                    <HStack spacing="4" w="100%">
                      <Icon as={RiBookLine} />
                      <Text fontSize="smaller">{exam.discipline}</Text>
                      <Icon as={RiTeamLine} />
                      <Text fontSize="smaller">{exam.class.name}</Text>
                    </HStack>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Flex>
        </Flex>
      </SimpleGrid>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={taskRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
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
                <Text fontSize="x-small">
                  {selectedTask?.type.toUpperCase()}
                </Text>
                <Text fontWeight="medium">{selectedTask?.title}</Text>
              </Box>
              <Spacer />
            </Flex>
          </DrawerHeader>

          <DrawerBody>{/* <Input placeholder='Type here...' /> */}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default ProfessorDashboard;
