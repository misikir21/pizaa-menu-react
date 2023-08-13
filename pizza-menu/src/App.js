
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
  const openHour=10;
  const closeHour=22;
  const isopen=hour >= openHour && hour <=closeHour;
  console.log(isopen)
  return(
    <footer className='footer'>
      {isopen ?(
        <div className='order'>
          <p>we are open until {closeHour}:00,come visit use or order online</p>
         <button className='btn'>Order</button>
          
        </div>
      ):
        <p>we are happy to welcome you between {openHour} and {closeHour}</p>
    }
    </footer>
  )
 }

function Menu(Pizzaobj){
  const pizzas=pizzaData;
  const numpizzas=pizzas.length;
  return (
    <>
      
    <p>
      this is the palce where you eat well and healthe  without breaking the bank and actual cost affodablity is out mantra
    </p>
    <main className='menu'>
    <h2>our menu</h2>
    {numpizzas >0? (<ul className='pizzas'>
      {pizzaData.map((pizza)=>(
        <Pizza Pizzaobj={pizza} key={pizza.name}/>
        ))}
    </ul>):(
      <p>we are still building the menu please come back</p>
      )
}
    {/* <Pizza 
    name="Pizza Salamino"
    ingredeints="Tomato, mozarella, and pepperoni"
    photoname='pizzas/prosciutto.jpg'
    price={10}
  /> */}
 </main >
  </>
  )
}

function Pizza ({Pizzaobj}){
  return(
    <li className="pizza"> 
    <img src={Pizzaobj.photoName} alt={Pizzaobj.name}/>
    <div>
     <h1>{Pizzaobj.name}</h1>
    <p>{Pizzaobj.ingredients}</p>
    <span>{Pizzaobj.price}</span>
    </div>
 
  </li>
  )
}
export default App;
