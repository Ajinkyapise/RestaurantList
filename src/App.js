import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./MainPage/Main";
import Edit from "./Edit/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VegetableProvider } from "./Context/VegetableContext";
import { MeatProvider } from "./Context/MeatContext";
import { PlasticProvider } from "./Context/PlasticContext";

function App() {
  return (
    <VegetableProvider>
      <MeatProvider>
        <PlasticProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} /> {/* Main/Home */}
            <Route path="/edit" element={<Edit />} /> {/* Edit page */}
          </Routes>
        </PlasticProvider>
      </MeatProvider>
    </VegetableProvider>
  );
}

export default App;
