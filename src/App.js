import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  const onAdd = (cantidad) => {
    console.log(`Se agrego ${cantidad} al carrito`)
  }

  return (
    <>
      <NavBar brand={"https://cdn.discordapp.com/attachments/852685565316825148/1011984326390452264/OmochaArg.gif"} />
      <ItemListContainer greeting={"Bienvenidos a OmochaARG"} />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  );
}

export default App;
