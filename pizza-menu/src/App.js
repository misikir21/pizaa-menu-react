
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
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
  return(
    <h1>Fusion Bites Pizza Co.</h1>
  )
}
function Footer(){
  return(
    <footer>{new Date().toLocaleTimeString()}we are currently open</footer>
  )
}

function Menu(){
  return (
    <div>
    <h2>our menu</h2>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    </div>
  )
}
export default App;
