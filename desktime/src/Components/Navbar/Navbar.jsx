import { Link } from "react-router-dom"
import { ImEarth } from "react-icons/im";
const links=[
    {Title:"Demo",path:"/demo"},{Title:"Features",path:"features"},
{Title:"Pricing",path:"/pricing"},{Title:"About us",path:"/aboutus"},
{Title:"FAQ",path:"/faq"},{Title:"Blog",path:"/blog"},
]


function Navbar(){
    return( 
    <div style={{display:"flex",justifyContent:"space-between",margin:"30px",fontWeight:"550",lineHeight:"1.5rem",fontSize:"1.125rem",color:"black"}}>
        <div><img src="https://desktime.com/assets/new-styles/dist/assets/Logo-Dark-Text-Without-Padding.svg"/></div>
        <div style={{justifyContent:"space-around",width:"65%",display:"flex"}}> {links.map((link)=>(<Link key={link.path} to={link.path} style={{color:"#475056",textDecoration: 'none',paddingTop:".6rem"}}>{link.Title} </Link> ))} 
        <div style={{display:"flex"}}>

        <Link to="login"><button style={{fontWeight:"600",color:"#475056",border:".5px solid #475056",
        height:"2.5rem",backgroundColor:"white",fontSize:".875rem",padding:".7rem",borderRadius:".1875rem"}}>LOGIN</button>
        </Link> <Link to="/signup"><button style={{marginLeft:"2%",backgroundColor:"#4EA819",fontWeight:"600",height:"2.5rem",fontSize:".875rem",borderRadius:".1875rem",color:"white",border:".5px solid green",width:"5.9rem"}}>SIGN UP</button>
        </Link>
        <div style={{display:"flex",padding:"1rem",fontWeight:"600",color:"#475056"}}><ImEarth /><select>
            <option >EN</option>
        </select>
        </div>
        </div>
        </div>
        
    </div>
)}
export default Navbar