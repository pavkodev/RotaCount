import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import TableComponent from "./components/TableComponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <HeaderComponent />
      <TableComponent />  
    </>
  );
}

export default App;
