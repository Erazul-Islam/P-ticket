import Banner from "../component/Banner";
import Content from "../component/Content";
import Navbar from "../component/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Content></Content>
        </div>
    );
};

export default Home;