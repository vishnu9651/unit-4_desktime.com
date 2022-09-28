import { Link } from "react-router-dom"

const links=[
    {Title:"Demo",path:"/demo"},{Title:"Features",path:"features"},
{Title:"Pricing",path:"/pricing"},{Title:"About us",path:"/aboutus"},
{Title:"FAQ",path:"/faq"},{Title:"Blog",path:"/blog"},
]


function Navbar(){
    return( 
    <div style={{justifyContent:"space-between",display:"flex",margin:"10px",fontWeight:"600",lineHeight:"1.5rem",fontSize:"1.125rem",color:"black"}}>
        <div>DeskTime</div>
        <div style={{justifyContent:"space-around"}}> {links.map((link)=>(<Link key={link.path} to={link.path} style={{color:"#475056",marginLeft:"15px",textDecoration: 'none'}}>{link.Title} </Link> ))} 
        
        <button style={{fontWeight:"600",lineHeight:"1.5rem",color:"#475056",border:".5px solid #475056",backgroundColor:"white",fontSize:".875rem",padding:".55rem .9rem",minHeight:"2.5rem",borderRadius:".1875rem",}}>LOGIN</button>
        <button style={{marginLeft:"1.3%",backgroundColor:"#4EA819",fontWeight:"600",lineHeight:"1.5rem",fontSize:".875rem",padding:".55rem .9rem",minHeight:"2.5rem",borderRadius:".1875rem",color:"white",border:".5px solid green"}}>SIGN UP</button>
        <select>EN
            <option>EN</option>
        </select>
        </div>
        
    </div>
)}
export default Navbar