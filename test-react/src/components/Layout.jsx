import Footer from "./footer/footer.jsx";
import Navbar from "./navbar/navbar.jsx"
const Layout = ({children}) => {
    return(
        <div className="Layout">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;