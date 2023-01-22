import "./App.css";
import NavBar from "./composants/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CardItem from "./composants/card";
import Footer from "./composants/Footer";

function App() {
  return (
    <>
      <NavBar />
      <CardItem name="Hatem" address="tunis" />
      <Footer phone ="27249537"/>
    </>
  );
}

export default App;
