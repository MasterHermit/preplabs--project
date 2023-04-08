import NavbarBeforeLogin from "../components/NavbarBeforeLogin"
import ImageCarousel from "../components/ImageCarousel";
import MultiItemCarousel from "../components/MultiItemCarousel";
import TextEditor from "../text_editor/TextEditor";
import "./home.css";


const Home = () => {
    return (
        <div className="home__background">
            <NavbarBeforeLogin />
            <ImageCarousel />
            <MultiItemCarousel />
        </div>
    )
}

export default Home;