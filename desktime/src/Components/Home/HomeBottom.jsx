import { Box, Heading, Input, Text } from "@chakra-ui/react"

function HomeBottom(){
 return (<div>
        <div>
            <Box backgroundColor="rgb(78,168,25)">
                <Heading color="white">Want to get the most out of your time?</Heading>
                <Heading color="white" >Try DeskTime for free!</Heading>
                <form>
            <Input backgroundColor="white" 
             size="lg" br="0px" placeholder='Your work Email' w="25%" />
            <Input borderColor='white'  
            color="white" 
            type="submit" size="lg" 
            marginLeft="5px" 
            fontWeight="600"
            value="START FREE TRIAL" 
             w="20%"/>
               
            </form>
            <Text color="white">Try free for 14 days. No credit card required.</Text>
            <Text color="white" >By signing up, you agree to our terms and privacy policy.</Text>
          </Box>
        </div>
    </div>)
}
export default HomeBottom