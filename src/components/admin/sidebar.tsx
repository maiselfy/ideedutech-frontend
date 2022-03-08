import {
  Avatar,
  Box,
  Flex,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

const AdminSidebar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Flex background="gray.50" justify="center">
      <Image
        padding="4"
        src="https://user-images.githubusercontent.com/49327985/154309877-cd022fe2-feb8-4193-b61a-baea24104eec.svg"
      />
      <Spacer />

      <Popover>
        <PopoverTrigger>
          <Flex cursor="pointer" _hover={{ bgColor: 'gray.100' }} padding="4">
            <Flex
              flexDirection="column"
              justify="center"
              marginRight="4"
              textAlign="right"
            >
              <Text color="text" fontWeight="medium">
                Marcos Gênesis
              </Text>
              <Text color="gray.500" fontSize="xx-small">
                ADMINISTRADOR
              </Text>
            </Flex>
            <Avatar />
          </Flex>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Opções</PopoverHeader>
          <PopoverBody>
            <VStack spacing="4">
              <Flex
                w="100%"
                borderRadius="4"
                p="2"
                _hover={{ bgColor: 'gray.100'}}
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
              >
                <Icon as={RiLogoutCircleLine} marginRight="4" />
                <Text>Sair</Text>
              </Flex>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default AdminSidebar;
