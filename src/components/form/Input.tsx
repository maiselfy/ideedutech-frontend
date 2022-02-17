import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  FormControl,
  Input as ChakraInput,
  FormLabel,
  InputProps as ChackraInputProps,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  mask?: string;
  maskChar?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref,
) => (
  <FormControl isInvalid={!!error}>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      id={name}
      name={name}
      focusBorderColor="green.600"
      bg="gray.100"
      variant="filled"
      _hover={{ bgColor: 'gray.200' }}
      ref={ref}
      {...rest}
    />
    {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
  </FormControl>
);
export const Input = forwardRef(InputBase);
