import {
  Box,
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react';
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React, { useState } from 'react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <Flex
          cursor="pointer"
          w="12"
          h="12"
          justifyContent="center"
          borderRadius="md"
          alignItems="center"
          bgColor={
            isSameDay(currentDate, new Date()) ? 'green.100' : 'transparent'
          }
          _hover={{
            bgColor: isSameDay(currentDate, new Date())
              ? 'green.200'
              : 'gray.100',
          }}
        >
          <Text
            color={
              isSameDay(currentDate, new Date()) ? 'green.600' : 'gray.600'
            }
            fontWeight={isSameDay(currentDate, new Date()) ? 'bold' : '400'}
            onClick={() => {
              setSelectedDate(cloneDate);
            }}
          >
            {format(currentDate, 'd')}
          </Text>
        </Flex>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getHeader = () => {
    return (
      <Flex justifyContent="center" align="center" mb="4">
        <Text color="green.600" fontWeight="bold">
          {format(activeDate, 'MMMM, yyyy',{ locale: ptBR})}
        </Text>
        <Spacer />
        <IconButton
          variant="outline"
          colorScheme="green"
          icon={<RiArrowLeftLine />}
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        />
        <IconButton
          ml="2"
          variant="outline"
          colorScheme="green"
          icon={<RiArrowRightLine />}
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        />
      </Flex>
    );
  };
  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <Text textAlign="center">
          {format(addDays(weekStartDate, day), 'EEEEEE', { locale: ptBR })}
        </Text>
      );
    }
    return (
      <SimpleGrid columns={7} spacing="2">
        {weekDays}
      </SimpleGrid>
    );
  };
  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }
    console.log(allWeeks);

    return (
      <SimpleGrid columns={7} spacing="2">
        {allWeeks}
      </SimpleGrid>
    );
  };

  return (
    <Box>
      {getHeader()}
      {getWeekDaysNames()}
      {getDates()}
    </Box>
  );
};

export default Calendar;
