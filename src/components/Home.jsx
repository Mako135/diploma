import back1 from "../assets/back1.png";
import back2 from "../assets/back2.png";
import { Box } from "@chakra-ui/react";
import Card from "../feautures/card/Card";
import logoWhite from "../assets/logo_white.png";
import CardDoctor from "../feautures/card/CardDoctor";
import Contact from "../feautures/contact/Contact";

const Home = () => {
  return (
    <>
      <div id="tekst_sverhu_kartinki">
        <img
          src={back1}
          alt="Текст сверху картинки"
          style={{
            width: "100%",
            objectFit: "cover",
            height: "90vh",
          }}
        />

        <div className="tekst_sverhu_kartinki">
          <div className="title">
            <h1>Your healthy life is our first priority</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </p>
          </div>
        </div>
      </div>

      <Box align="center" mt={100} mb={100}>
        <h3
          style={{
            fontSize: "20px",
          }}
        >
          ABOUT US
        </h3>
        <h2
          style={{
            fontSize: "48px",
          }}
        >
          Quality Healthcare Accessible to Everyone.
        </h2>
        <Card />
      </Box>
      <div id="tekst_sverhu_kartinki">
        <img
          src={back2}
          alt="Текст сверху картинки"
          style={{
            width: "100%",
            objectFit: "cover",
            height: "90vh",
          }}
        />

        <div className="tekst_sverhu_kartinki">
          <div className="title">
            <img src={logoWhite} />
            <h1>New Clinic</h1>
            <p>
              Lorem insum dolor amet consec tetur adiriscin elit eiusmod temsor
              incididunt dolore masna alirua enim minim veniam nostrud exerci
              tation ullamco aliruis commodo conseruat irure dolor renrehen
              derit volustate.
            </p>
          </div>
        </div>

        <Box align={"center"} m={"150px 0"}>
          <h3
            style={{
              fontSize: "20px",
            }}
          >
            OUR DOCTORS
          </h3>

          <CardDoctor />
        </Box>
        <Box m={"100px 0"}>
        <h3
            style={{
              marginLeft: "400px",
              marginBottom: "40px",
              fontSize: "20px",
            }}
          >
            OUR CONTACTS
          </h3>
          <Contact />
        </Box>
      </div>
    </>
  );
};

export default Home;
