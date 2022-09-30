
import '//css/Nav_style.css';



const Navbar = ( props) => {
const nav_style = props.nav_style ? 'nav_sytyle' :""
  return (
    
       
            <div id=  "">
             <ul id= "ul_list">
             <li>
               <div id = "home"></div> 
             </li>
             <li>
                <div id = "about"></div>
             </li>
             <li>
                <div id = "contact"></div>
            </li>
              
             </ul>
            </div>
     
       
   
  )
}

export default Navbar;
