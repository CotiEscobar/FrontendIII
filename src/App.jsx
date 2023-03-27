import './App.css'
import './styles/Form.css'
import Header from './components/repaso/Header'
import Form from './components/repaso/Form'
import Pedido from './components/repaso/Pedido'
import FunComponent from './components/useEffect/FunComponent'
import RandomDog from './components/api/RandomDog'
import Home from './components/food/Home'

const pedidos = [
  {
    id: 1,
    name: 'hamburguesa',
  },
  {
    id: 2,
    name: 'pizza',
  },
  {
    id: 3,
    name: 'empanada',
  },
  {
    id: 4,
    name: 'papas fritas',
  },

]

let id = 0;

function App() {
/*   const [pedidos, setPedidos] = useState([])

  const handlePedido = (pedido) => {
    console.log(pedido);

    const newPedido = [...pedidos]
    newPedido.push({
      id: id++,
      name: pedido
    })

    console.log(newPedido);
    setPedidos(newPedido);
  }

  const handleDelete = () => {
    const newPedidos = pedidos.filter((pedido) => pedido.id !== id)
    setPedidos(newPedidos)
  } */

  return (
    <div className="App">
{/*       <Header title='Pedi Ya' />
      <Form 
      onSubmit = {handlePedido}/>
      <hr />

      {pedidos.map((pedido) => {
        return <Pedido key={pedido.id} orden={pedido} delete={handleDelete}></Pedido>
      })}
      
   */}
   <Home></Home>
    </div>
  ) 


  
}

export default App
