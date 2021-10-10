import {
  Box,
  Button,
  Center,
  Code,
  Heading,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import { GoMarkGithub, GoBook } from 'react-icons/go';

const repos = [
  'nint8835/withportcullis.com',
  'nint8835/portcullis',
  'nint8835/docs.withportcullis.com',
];

function App() {
  return (
    <Center height="100%">
      <VStack textAlign="center">
        <Heading>Portcullis</Heading>
        <Text>
          This is a placeholder page, so this URL isn't a <Code>404</Code>.
          Actual site{' '}
          <Box as="span" color="purple.400">
            coming soon
          </Box>
          .
        </Text>
        <Text>
          In the mean time, why don't you check out some of the associated
          repos:
        </Text>
        <Stack direction={['column', 'row']}>
          {repos.map((repo) => (
            <Button
              leftIcon={<GoMarkGithub />}
              as="a"
              href={`https://github.com/${repo}`}
              colorScheme="purple"
            >
              {repo}
            </Button>
          ))}
        </Stack>
        <Box>
          <Text>Or, check out the docs:</Text>
        </Box>
        <Box>
          <Button
            leftIcon={<GoBook />}
            as="a"
            href="https://docs.withportcullis.com"
            colorScheme="purple"
            variant="outline"
          >
            Docs
          </Button>
        </Box>
      </VStack>
    </Center>
  );
}

export default App;
