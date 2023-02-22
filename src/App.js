import App_Toolbar from './App_Toolbar';
import Form from './Form';
import './index.css';
import Menu from './Menu';
import Test from './Test';
function App() {
  return (
    <div className="App">
       <h3>App Bar</h3>
      <App_Toolbar />

      <h3>Typography & Button </h3>
      <br></br>
      <Test />
      <h3>Form</h3>
      <Form />
     <h3>Menu</h3>
     <Menu />
    </div>
  );
}

export default App;
