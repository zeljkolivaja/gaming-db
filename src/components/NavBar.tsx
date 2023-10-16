import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    // HSstack (horizontal stack) is component for laying out items horizontaly
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize={40}></Image>
      <ColorModeSwitch/>
    </HStack>
  );
}
export default NavBar;
