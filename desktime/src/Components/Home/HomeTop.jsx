import { Heading, Input, Text } from "@chakra-ui/react"

function HomeTop(){

    return(<div style={{backgroundImage:`url(https://desktime.com/assets/img/intro_background.png)`,backgroundRepeat:"no-repeat",border:"1px solid red",color:"black"}}>
        HomeTop
        <div style={{display:"flex",justifyContent:"space-between" }}>
            <div style={{width:"50%",marginRight:"10%",border:"1px solid red",padding:"80px",textAlign:"start" }}>
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
        <div></div>
    </div>)
}export default HomeTop