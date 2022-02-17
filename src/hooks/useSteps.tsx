import { createContext, useContext, useEffect, useState } from 'react';

interface StepsContextData {
  activeStep: string;
  changeStep: (step: '') => void;
  stepsDone: string[];
  finishStep: (step: string) => void;
  steps: { school: 'school'; gestor: 'gestor'; done: 'done' };
}

const StepsContext = createContext({} as StepsContextData);

export const StepsProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState('school');
  const [stepsDone, setStepsDone] = useState([]);

  function changeStep(step: string) {
    const findStep = stepsDone.find((stepItem) => stepItem === step);
    if (findStep) {
      setStepsDone([]);
    } else {
      finishStep(activeStep);
    }
    setActiveStep(step);
  }

  function finishStep(step: string) {
    setStepsDone([...stepsDone, step]);
  }

  return (
    <StepsContext.Provider
      value={{
        activeStep,
        changeStep,
        finishStep,
        stepsDone,
        steps: { school: 'school', gestor: 'gestor', done: 'done' },
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export const useSteps = () => useContext(StepsContext);
