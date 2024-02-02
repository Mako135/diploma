import {
  Box,
  Container,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={2}
      minWidth={{
        base: "300px",
        md: "1000px",
      }}
    >
      <Box>
        <Image src={logo} alt="Logo" boxSize="80px" padding="0.5 rem" />
      </Box>
      <Box display={"flex"} gap={"2vw"}>
        <Box
          padding={"0.5rem"}
          borderRadius={5}
          transition="0.3s"
          _hover={{
            transition: "0.3s",
            background: "gray.300",
            fontWeight: "bold",
          }}
        >
          <Link to="/">My courses</Link>
        </Box>

        <Menu width={30}>
          <MenuButton
            borderRadius={5}
            transition="0.3s"
            padding={"0.5rem"}
            _hover={{
              transition: "0.3s",
              background: "gray.300",
            }}
          >
            Actions
          </MenuButton>
          <MenuList width={30}>
            <MenuItem><Link to="/">My profile</Link></MenuItem>
            <MenuItem><Link to="/"style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
            }}>Log Out<IoLogOutOutline /></Link></MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Container>
  );
};

export default Header;
