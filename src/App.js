import {
  Box,
  Button,
  Center,
  Code,
  Heading,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';

const repos = ['nint8835/withportcullis.com', 'nint8835/portcullis'];

function App() {
  return (
    <Center height="100%">
      <VStack textAlign="center">
        <Heading>Portcullis</Heading>
        <Box>
          This is a placeholder page, so this URL isn't a <Code>404</Code>.
          Actual site{' '}
          <Box as="span" color="purple.400">
            coming soon
          </Box>
          .
        </Box>
        <Box>
          In the mean time, why don't you check out some of the associated
          repos:
        </Box>
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
      </VStack>
    </Center>
  );
}

export default App;
