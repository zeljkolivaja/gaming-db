import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    // HSstack (horizontal stack) is component for laying out items horizontaly
    <HStack>
      {/* chakra image component, location of image is imported just like regular component */}
      <Image src={logo} boxSize={40}></Image>
      <Text>NavBar</Text>
    </HStack>
  );
}
export default NavBar;
