import "./Menu.css";
function Menu(props) {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="Menu">
      <div>
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{day}</div>
          <div className="expense-date__year">{year}</div>
        </div>
      </div>
      <h2 className="menu-text">{props.text}</h2>
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
      <div className="menuInfo">
        <p>{props.author.first}</p>
        <p>{props.author.second}</p>
      </div>

     
    </div>
  );
}

export default Menu;
