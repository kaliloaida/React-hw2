import "./App.css";
import Menu from "./Components/Menu";
function App() {
  const menuDate = {
    date: new Date(),
    text: "MENU",
    author: {
      first: "Chicken soup",
      firstURl:
        "https://amindfullmom.com/wp-content/uploads/2016/09/The-Best-Chicken-Soup.jpg",
      second: "Spaghetti",
      secondURL:
        "https://www.maggi.ru/data/images/recept/img564x436/recept_6998_joy7.jpg",
    },
  };
  return (
  <div className="App">
   <Menu author={menuDate.author} date={menuDate.date} text={menuDate.text}/>
  </div>);
}

export default App;
