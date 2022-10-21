import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../Theme/customTheme";
// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
