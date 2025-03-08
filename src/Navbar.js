import { Link, useMatch, useResolvedPath } from "react-router-dom"
import About from "./pages/About" 
import Img from "../src/images/h.png";
import { useState } from "react"
import Slider from "./comd/Slider";
import Logo from "../src/images/oi.jpg";
import "../src/comp/Navbar.css";
export default function Navbar() {
  const [Menu,SetMenu]=useState("menu");
  
  return (
    <div className="navbar">
    <div className="leftSide" >
      
    
      <img className="logo" src={Logo}/>
      
      <h1 className="p">BRAND</h1>
     
    </div>
    <div className="rightSide">
    <ul >
            <label> <CustomLink  to="/" onClick={()=>SetMenu("Home")} className={Menu==="home"?"actiive":""} >Home</CustomLink> </label>

            <label><CustomLink  to="/about" onClick={()=>SetMenu("contact")} className={Menu==="home"?"actiive":""}  >About Us</CustomLink></label>
            <label><CustomLink to="/contact"  onClick={()=>SetMenu("contact")} className={Menu==="home"?"actiive":""}>Contact Us</CustomLink></label>
      
           
       
      </ul>
     
    </div>
  </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
