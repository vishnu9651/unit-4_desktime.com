import {Routes,Route} from "react-router-dom"
import AboutUs from "./AboutUs"
import Blog from "./Blog"
import Demo from "./Demo"
import Faq from "./Faq"
import Features from "./Features"
import Home from "./Home"
import Icon from "./Icon"
import Language from "./Language"
import Login from "./Login"
import Pricing from "./Pricing"
import Signup from "./Signup"
function AllRoutes(){

    return <div>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/demo" element={<Demo />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/icon" element={<Icon />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/language" element={<Language />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/features" element={<Features />}/>
    </Routes>
    </div>
}
export default AllRoutes