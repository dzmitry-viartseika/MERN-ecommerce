import TheAnnouncement from '../components/Announcement/Announcement'
import TheNavBar from '../components/Menu/NavBar';
import TheSlider from '../components/Sliders/Slider';
import TheCategoryList from '../components/Categories/CategoryList';
import TheProducts from '../components/Products/Products';
import TheNewsLetter from "../components/NewsLetter/NewsLetter";
import TheFooter from "../components/Footer/Footer";

const HomePage = () => {
    return(
        <div>
            <TheAnnouncement />
            <TheNavBar />
            <TheSlider />
            <TheCategoryList />
            <TheProducts/>
            <TheNewsLetter/>
            <TheFooter/>
        </div>
    )
}

export default HomePage;