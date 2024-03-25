import "./App.css";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";

function App() {
  return (
    <div className="App text-3xl text-gray-600 bg-orange-500">
      <AddTodos />
      <Todos />
    </div>
  );
}

export default App;
