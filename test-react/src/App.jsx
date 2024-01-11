import Layout from "./components/Layout";
import Navbar from "./components/navbar/navbar";
import Feed from "./components/feed";
import "./App.css";
import Login from "./components/login/login";
function App({setIsLogged, isLogged}) {
  return <Layout>
    { isLogged ? <Feed /> : <Login setIsLogged={setIsLogged}/> }
    </Layout>;
}

export default App;
