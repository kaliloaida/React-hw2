import "./Menu.css"
import MenuInfo from "./MenuInfo"
import Date from "./Date"
function Menu(props){
    return(
        <div className="Menu">
            < Date date={props.date}/>
           <h2 className="menu-text">{props.text}</h2>
            
           <MenuInfo author={props.author}/>
            
            
        </div>
    )
}




export default Menu