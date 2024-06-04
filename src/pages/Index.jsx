import { Container, Text, VStack, Image, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box boxSize="sm">
          <Image src="/images/stopwatch.png" alt="Stopwatch" />
        </Box>
        <Text fontSize="2xl">Digital Stopwatch</Text>
        <Text>Track your time with precision.</Text>
      </VStack>
    </Container>
  );
};

export default Index;