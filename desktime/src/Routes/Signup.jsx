import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react"



function Signup(){

    return <div>
           <Box w="40%" marginLeft="350px" marginBottom="200px">
        <Heading>Sign up for a FREE DeskTime Trial</Heading>
    <FormControl isRequired>
    <FormLabel>First and last name</FormLabel>
    <Input placeholder='type your first and last name' />
    <FormLabel>Email</FormLabel>
    <Input placeholder='enter your email' />
    <FormLabel>Password</FormLabel>
    <Input placeholder='Create password' />
    <Button bg="green">SIGN UP FOR FREE</Button>
  </FormControl>
  <Text>Try free for 14 days. No credit card required.

By signing up, you agree to our terms and privacy policy.</Text>
  </Box>

    </div>
}
export default Signup