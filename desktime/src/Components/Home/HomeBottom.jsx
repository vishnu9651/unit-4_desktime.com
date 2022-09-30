import { Box, Input, Text } from "@chakra-ui/react"

function HomeBottom(){
 return (<div>
        <div>
            <Box backgroundColor="rgb(78,168,25)">
                <Text>Want to get the most out of your time?</Text>
                <Text>Try DeskTime for free!</Text>
                <form>
            <Input borderColor='gray' size="lg" placeholder='Your work Email' w="50%" />
            <Input borderColor='gray' color="white" type="submit" size="lg" marginLeft="5px" value="START FREE TRIAL" backgroundColor="rgb(78,168,25)" w="45%"/>
               
            </form>
            <Text>Try free for 14 days. No credit card required.</Text>
            <Text>By signing up, you agree to our terms and privacy policy.</Text>
          
            </Box>
        </div>
    </div>)
}
export default HomeBottom