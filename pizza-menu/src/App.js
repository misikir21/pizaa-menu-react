
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
function Pizza (){
  return(
    <div>
    <img src="pizzas/prosciutto.jpg" class="img-fluid rounded-top" alt="focaccia."/>
    <h1>Pizza Salamino</h1>
    <p>Tomato, mozarella, and pepperoni</p>
  </div>
  )
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
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    </main >
  )
}
export default App;
