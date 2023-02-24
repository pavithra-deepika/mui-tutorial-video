import App_Toolbar from "./App_Toolbar";
import Form from "./Form";
import "./index.css";
import Menu from "./Menu";
import Test from "./Test";
import Card from "./Card";
import Dialogs from "./Dialog";
import Modal from "./Modal";
import Lists from "./List";
import NestedLists from "./NestedLists";
import Ac from "./Ac";
import Part from "./Part";
import ImageLists from "./ImageList";
import Lays from "./Lays";
import Colour from "./colour";
import Design from "./Styles";

function App() {
  return (
    <div>
      <Ac />
      <Part />
      <ImageLists />
      <Lays />
      {/* <Colour /> */}
<Design />
    </div>
      // <AutoCom />
    
    // <div className="App">
    //   <h1> MUI </h1>
    //   <br></br>
    // <div>
    //     <h3>Tabs</h3>
    //     <TabsMui />
    //   </div>
    //   <h3>App Bar</h3>
    //   <App_Toolbar />
    //   <div>
    //     <h3>Typography & Button </h3>
    //     <br></br>
    //     <Test />
    //     <h3>Form</h3>
    //     <Form />
    //     <h3>Menu</h3>
    //     <Menu />
    //   </div>
    //   <div>
    //     <h1>card</h1>
    //     <Card />
    //   </div>
    //   <br></br>
    //   <Dialogs />
    //   <br></br>
    //   <Modal />
    //   <br></br>
    //   <Lists />
    //   <NestedLists /> 
    // </div>
  );
}

export default App;
