import './MenuInfo.css'
import Meals from "./Meals";


function MenuInfo(props){
    return(
        <div>
            <Meals author={props.author}/>
        <div className="menuInfo">
             
        <p>{props.author.first}</p>
        <p>{props.author.second}</p>
           
        </div>
        </div>
    )
}
export default MenuInfo