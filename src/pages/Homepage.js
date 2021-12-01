import '../assets/css/animate.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/jquery-ui.css'
import '../assets/css/meanmenu.css'
import '../assets/css/nice-select.css'
import '../assets/css/normalize.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slick.css'
import '../assets/css/style.css'
// import '../assets2/css/style.css'
import Loader from "../components/Loader"
import Header from "../components/Header"
import Basic from "../components/Basic"
import About from "../components/About"
import Upcoming from "../components/Upcoming"
import Galery from "../components/Galery"
import Footer from "../components/Footer"

function Homepage() {
    return (
        
        <div className="main-layout">
        <Basic />
        <Loader />
        <Header />
        <About />
        <Upcoming />
        <Galery />
        <Footer />
        <script src="js/jquery.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="js/jquery-3.0.0.min.js"></script>
          <script src="js/plugin.js"></script>
          <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
          <script src="js/custom.js"></script>
          <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
</div>

    )
}

export default Homepage