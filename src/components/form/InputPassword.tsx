import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import {
  FormControl,
  Input as ChakraInput,
  FormLabel,
  InputProps as ChackraInputProps,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  mask?: string;
  maskChar?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  const [show, setShow] = useState(false);
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        <ChakraInput
          id={name}
          name={name}
          focusBorderColor="green.600"
          bg="gray.100"
          variant="filled"
          type={show ? 'text' : 'password'}
          _hover={{ bgColor: 'gray.200' }}
          ref={ref}
          {...rest}
        />
        <InputRightElement>
          <IconButton
            variant="ghost"
            _hover={{ bgColor: 'trasparent' }}
            icon={show ? <RiEyeLine /> : <RiEyeCloseLine />}
            onClick={() => setShow(!show)}
          />
        </InputRightElement>
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
export const InputPassword = forwardRef(InputBase);
