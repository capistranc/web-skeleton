import { NavBar } from "./NavBar";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

export const StickyNavHeader = ({ links, ...props }) => {
  return (
    <Box
      top="0"
      as="nav"
      id="nav"
      zIndex="sticky"
      position="fixed"
      w="100%"
      {...props}
    >
      <NavBar links={links} color={props.color}></NavBar>
    </Box>
  );
};
