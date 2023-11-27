import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
