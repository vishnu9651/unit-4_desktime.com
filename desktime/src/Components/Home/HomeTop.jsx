import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react"
import { AiFillStar,AiFillClockCircle } from "react-icons/ai";
import {BsFillShieldFill,BsCalendarEventFill} from "react-icons/bs"
function HomeTop(){

    return(<div style={{backgroundImage:`url(https://desktime.com/assets/img/intro_background.png)`,backgroundRepeat:"no-repeat",color:"black"}}>
        
        <div style={{display:"flex",justifyContent:"space-between" }}>
            <div style={{width:"50%",marginRight:"10%",padding:"80px",textAlign:"start" }}>
                <Heading>The ultimate all-in-one automatic time tracker</Heading>
                <br />
            
            <Text>A time tracker and workforce management system that will help you develop a high-performing team that smashes goals every time. </Text>
            <br />
            <form>
            <Input borderColor='gray' size="lg" placeholder='Your work Email' w="50%" />
            <Input borderColor='gray' color="white" type="submit" size="lg" marginLeft="5px" value="START FREE TRIAL" backgroundColor="rgb(78,168,25)" w="45%"/>
               
            </form>
            <Text>Try free for 14 days. No credit card required.</Text>
            <Text>By signing up, you agree to our terms and privacy policy.</Text>
            </div>
            <div style={{marginRight:"30px"}} >
                 <iframe
                  src="https://www.youtube.com/embed/sgmDvqlSMF4?playlist=sgmDvqlSMF4&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdesktime.com" 
         
                frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen="" data-gtm-yt-inspected-12860828_60="true" id="281139538" 
                data-gtm-yt-inspected-38="true" data-gtm-yt-inspected-43="true" width="450px"  height="450px">

                </iframe>                
                
                </div> 
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <img src="https://desktime.com/static/web/clients/customer-sixt-logo-white.svg" alt="img" />
            <img src="https://desktime.com/static/web/clients/customer-mapon-logo-white.svg" alt="img" />
            <img src="https://desktime.com/static/web/clients/customer-montway-logo-white.svg" alt="img" />
            <img src="https://desktime.com/static/web/clients/customer-onthemap-logo-white.svg" alt="img" />
            <img src="https://desktime.com/static/web/clients/customer-printful-logo-white.svg" alt="img" />

        </div>

<div style={{margin:"20px",marginTop:"60px"}}>
    <Flex>
    <div style={{padding:"20px",width:"60%",textAlign:"left"}}>
        <div >
             <Heading>Use time tracking software to boost productivity by 30%</Heading>
             <br />
             <Text>A time tracker and workforce management system that will help you develop a high-performing team that smashes goals every time.</Text>
             </div>
        <br />
        <Flex >
            <Box>

                
                <Flex><Box margin="2px">
                    <AiFillStar color="green"  size="20px"  /> </Box><Box><Heading size="md"> Skyrocket effectiveness</Heading>
                    <Text w="80%">Know who's doing what and how it's going all the while eliminating distractions.</Text>
                </Box>
                </Flex>
                <br />
                
                
                    <Flex>
                <AiFillClockCircle 
                color="green"  size="40px"  />
                <Box margin="5px"><Heading size="md">Automate team management</Heading>
                    <Text w="80%">Organize shifts, absences, and booking-related questions all in one place.</Text>
                    </Box>
                    </Flex>
            </Box>
            
<Box>

<Flex>
<BsFillShieldFill color="green"  size="40px"  /><Box margin="5px">
                    <Heading size="md">Skyrocket effectiveness</Heading>
                    <Text w="80%">Know who's doing what and how it's going all the while eliminating distractions.</Text>
                </Box>
                </Flex>
<br />
                <Flex><BsCalendarEventFill color="green" margin="5px" size="40px"  /><Box margin="5px">
                    
                    <Heading size="md">Automate team management</Heading>
                    <Text w="80%">Organize shifts, absences, and booking-related questions all in one place.</Text>
                </Box>
                </Flex>
</Box>
            
        </Flex>
    </div>
    <div style={{marginLeft:"20px", margin:"10px"}}>
        <Image src="https://desktime.com/static/web/new-homepage/boost-productivity/boost-productivity.webp" />
    </div>
    </Flex>
</div>


    </div>)
}export default HomeTop