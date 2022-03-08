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
        <Flex justifyContent="center" alignItems="center">
        <Text
          variant={isSameDay(currentDate, new Date()) ? 'solid' : 'ghost'}
          colorScheme={isSameDay(currentDate, new Date()) ? 'green' : 'ghost'}
          className={`day ${
            isSameMonth(currentDate, activeDate) ? '' : 'inactiveDay'
          } ${isSameDay(currentDate, selectedDate) ? 'selectedDay' : ''}
          ${isSameDay(currentDate, new Date()) ? 'today' : ''}`}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
        >
          {format(currentDate, 'd')}
        </Text></Flex>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getHeader = () => {
    return (
      <Flex>
        <Text>{format(activeDate, 'MMMM yyyy')}</Text>
        <Spacer />
        <IconButton
          icon={<RiArrowLeftLine />}
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        />
        <IconButton
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
        <Text className="day weekNames">
          {format(addDays(weekStartDate, day), 'E')}
        </Text>
      );
    }
    return (
      <SimpleGrid columns={7} spacing="6">
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
