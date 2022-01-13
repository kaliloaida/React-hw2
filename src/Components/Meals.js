import './Meals.css'
function Meals(props) {
  return (
    <div>
      <img
        className="mealsImg"
        src={props.author.firstURl}
        alt="props.author.first"
      />
      
      <img
        className="mealsImg"
        src={props.author.secondURL}
        alt="props.author.second"
      />
      
    </div>
  );
}
export default Meals;
