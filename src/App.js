import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

fetch("../api.json")
  .then(data => console.log(data))


function App() {
  return (
    <>
      <NavBar brand={"https://cdn.discordapp.com/attachments/852685565316825148/1011984326390452264/OmochaArg.gif"} />
      <ItemListContainer greeting={"Bienvenidos a OmochaARG"} />
    </>
  );
}

export default App;
