import AdminSidebar from '@/components/admin/sidebar';
import Stepper from '@/components/admin/stepper';
import DoneStep from '@/components/admin/stepper/steps/DoneStep';
import GestorsStep from '@/components/admin/stepper/steps/GestorsStep';
import SchoolStep from '@/components/admin/stepper/steps/SchoolStep';
import { StepsProvider } from '@/hooks/useSteps';
import { Container, Flex } from '@chakra-ui/react';
import React from 'react';

const NewSchool: React.FC = () => {
  return (
    <StepsProvider>
      <Flex direction="column">
        <AdminSidebar />
        <Container maxW="container.md" marginTop="8">
          <Stepper />
          <SchoolStep />
          <GestorsStep/>
          <DoneStep/>
        </Container>
      </Flex>
    </StepsProvider>
  );
};

export default NewSchool;
