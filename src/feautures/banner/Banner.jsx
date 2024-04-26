import { Box, Image, Text } from "@chakra-ui/react";
import { Navigation,  Scrollbar, A11y } from "swiper/modules";
import back1 from "../../assets/bg1.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <a href="https://youtube.com">
          <Box position={"relative"}>
            <Box
              position={"absolute"}
              width={"60rem"}
              top={"40%"}
              left={"10vw"}
            >
              <Text fontSize={"6rem"} textAlign={"left"} color={"white"}>
                Your healthy life <br />
                is our first priority.
              </Text>
              <Text fontSize={24} textAlign={"left"} color={"#fff"}>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem.
              </Text>
            </Box>
            <Image src={back1} alt="logo" width={"100%"} objectFit={"cover"} />
          </Box>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <Box position={"relative"}>
          <Box position={"absolute"} width={"60rem"} top={"40%"} left={"10vw"}>
            <Text fontSize={"6rem"} textAlign={"left"} color={"white"}>
              Your healthy life <br />
              is our first priority.
            </Text>
            <Text fontSize={24} textAlign={"left"} color={"#fff"}>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </Text>
          </Box>
          <Image src={back1} alt="logo" width={"100%"} objectFit={"cover"} />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner