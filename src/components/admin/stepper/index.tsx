import { useSteps } from '@/hooks/useSteps';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { RiBuilding2Line, RiCheckLine, RiUser2Line } from 'react-icons/ri';
import Step from './step';

const Stepper: React.FC = () => {
  const { steps } = useSteps();
  return (
    <Flex
      background="gray.50"
      padding="4"
      borderRadius="lg"
      justify="space-around"
    >
      <Step
        icon={RiBuilding2Line}
        label="Passo 1"
        title="Instituição"
        name={steps.school}
      />
      <Step
        icon={RiUser2Line}
        label="Passo 2"
        title="Gestores"
        name={steps.gestor}
      />
      <Step icon={RiCheckLine} name={steps.done} />
    </Flex>
  );
};

export default Stepper;
