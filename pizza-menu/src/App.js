
import logo from './logo.svg';
import './App.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  );
}

function Header(){
  // const style={color:'red',fontSize:'48px',textTransform:'uppercase'}
  const style={}
  return(
    <header className='header'>

    <h1 style={style}>Fusion Bites Pizza Co.</h1>
    </header>
  )
}
function Footer(){
  const hour=new Date().getHours();
  const openHour=8;
  const closeHour=18;
  const isopen=hour >= openHour && hour <=closeHour;
  console.log(isopen)
  return(
    <footer className='footer'>{new Date().toLocaleTimeString()}we are currently open</footer>
  )
}

function Menu(){
  return (
    <main className='menu'>
    <h2>our menu</h2>
    <ul className='pizzas'>
      {pizzaData.map((pizza)=>(
        <Pizza Pizzaobj={pizza} key={pizza.name}/>
      ))}
    </ul>
    {/* <Pizza 
    name="Pizza Salamino"
    ingredeints="Tomato, mozarella, and pepperoni"
    photoname='pizzas/prosciutto.jpg'
    price={10}
    /> */}
 </main >
  )
}

function Pizza (props){
  return(
    <li className="pizza"> 
    <img src={props.Pizzaobj.photoName} alt={props.Pizzaobj.name}/>
    <div>
     <h1>{props.Pizzaobj.name}</h1>
    <p>{props.Pizzaobj.ingredients}</p>
    <span>{props.Pizzaobj.price}</span>
    </div>
 
  </li>
  )
}
export default App;
