import Layout from "./components/Layout";
import Navbar from "./components/navbar/navbar";
import Feed from "./components/feed";
import "./App.css";
import Login from "./components/login/login";
import { useState } from "react";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  return <Layout>
    { isLogged ? <Feed /> : <Login setIsLogged={setIsLogged}/> }
    </Layout>;
}

export default App;
