
import Advantages from "../feautures/advantages/Advantages";
import Banner from "../feautures/banner/Banner";
import SecondBanner from "../feautures/banner/SecondBanner";
import Contact from "../feautures/contact/Contact";
import Doctors from "../feautures/doctors/Doctors";
import Header from "../feautures/header/Header";


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Advantages  />
      <SecondBanner />
      <Doctors />
      <Contact />
    </>
  );
};

export default Home;
