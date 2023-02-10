import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import Form from './components/Form';

const todoStart = [
  {
    id:0,
    title: "lager Middag",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  }
]

function App() {
  return (
    <>
    <Navbar />
    <Form />
    <Todos todoStart={todoStart}/>
    </>
  );
}

export default App;
