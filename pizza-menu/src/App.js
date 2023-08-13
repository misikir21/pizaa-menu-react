
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
    <h1>react app</h1>
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
    <Pizza 
    name="Pizza Salamino"
    ingredeints="Tomato, mozarella, and pepperoni"
    photoname='pizzas/prosciutto.jpg'
    price='10'
    />

<Pizza 
    name="Pizza Fungi"
    ingredeints="Tomato, mozarella, and pepperoni"
    photoname='pizzas/funghi.jpg'
    price='15'
    />
    
    </main >
  )
}

function Pizza (props){
  return(
    <div className="pizza"> 
    <img src={props.photoname} alt={props.name}/>
    <div>
     <h1>{props.name}</h1>
    <p>{props.ingredeints}</p>
    <span>{props.price}</span>
    </div>

  </div>
  )
}
export default App;
