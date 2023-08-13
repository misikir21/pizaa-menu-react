
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <h1>react app</h1>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza/>
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
export default App;
