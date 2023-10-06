import { extendTheme } from '@chakra-ui/react'

//color mode config
const config = {
  initialColorMode: 'dark',
  //let the operating system control color mode
  useSystemColorMode: false,
}

//extending the theme
const theme = extendTheme({ config })

export default theme