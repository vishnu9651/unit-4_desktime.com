import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react"

function Login(){

    return <div>
    <Box w="40%" marginLeft="350px" marginBottom="200px">
        <Heading>Log in to DeskTime</Heading>
    <FormControl isRequired>
    <FormLabel>Email</FormLabel>
    <Input placeholder='enter your email' />
    <FormLabel>Password</FormLabel>
    <Input placeholder='Enter password' />
    <Button bg="green">LOGIN</Button>
  </FormControl>
  <Text>I forget my password</Text>
  Don't have an account yet? Sign up here !
  </Box>
  
    </div>
}
export default Login