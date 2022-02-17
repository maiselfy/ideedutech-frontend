import { useSteps } from '@/hooks/useSteps';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { IconType } from 'react-icons';

interface StepProps {
  icon: IconType;
  name: string;
  label: string;
  title: string;
}

const Step: React.FC<StepProps> = ({ icon, name, title, label }) => {
  const { activeStep, stepsDone } = useSteps();
  console.log(name, activeStep === name);
  console.log(name, stepsDone);

  const isActive = useMemo(() => activeStep === name, [activeStep]);
  const isDone = useMemo(
    () => !!stepsDone.find((step) => step === name),
    [stepsDone]
  );
  return (
    <Flex align="center">
      <Icon
        as={icon}
        w="12"
        h="12"
        color={isDone ? 'green.600' : isActive ? 'gray.800' : 'gray.400'}
      />
      {isActive && (
        <Box marginLeft="4">
          <Text fontSize="x-small">{label}</Text>
          <Text>{title}</Text>
        </Box>
      )}
    </Flex>
  );
};

export default Step;
