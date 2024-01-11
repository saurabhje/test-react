import Layout from "./Layout"
import Login from "./login/login"
const Profile = ({isLogged}) =>{
    return(
       <Layout>
        // checks if the user is logged in then shows username, or else renders login page
        {isLogged? localStorage.getItem('username'): <Login /> }
       </Layout>
    )
}

export default Profile