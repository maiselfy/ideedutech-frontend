import { Flex } from '@chakra-ui/react';
import React from 'react';
import ProfessorSideBar from '@/components/professor/ProfessorSideBar';

const ProfessorDashboard: React.FC = () => {
  return (
    <Flex>
      <ProfessorSideBar />
    </Flex>
  );
};

export default ProfessorDashboard;
