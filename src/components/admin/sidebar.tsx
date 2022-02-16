import { Avatar, Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const AdminSidebar: React.FC = () => {
  return (
    <Flex background="gray.50" padding="4" justify="center">
      <Image src="https://user-images.githubusercontent.com/49327985/154309877-cd022fe2-feb8-4193-b61a-baea24104eec.svg" />
      <Spacer />
      <Flex>
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
    </Flex>
  );
};

export default AdminSidebar;
