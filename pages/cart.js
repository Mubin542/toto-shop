import Copyright from "../components/Copyright"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

function cart() {
    return (
        <div>
            <Header />
            <Navbar />
            <h1>This is cart page</h1>
            <Footer />
            <Copyright />
        </div>
    )
}

export default cart