import * as React from "react";
import { theme } from "../../theme";
import {
  Box,
  Spacer,
  Link,
  SimpleGrid,
  useColorMode,
  SimpleGridProps,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { SocialMediaLinks, FooterHeading } from "./index";
// import { Logo } from "../Logo";
import { Text, TextProps } from "@chakra-ui/layout";

import { links } from "./index";

export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <FooterContent bg={theme.bg2[colorMode]} color={theme.fg2[colorMode]} />
  );
};

export const FooterContent = ({ ...props }) => {
  return (
    <Stack
      align="center"
      spacing="10"
      divider={<StackDivider />}
      py="12"
      px={{ base: "4", md: "8" }}
      width="100%"
      {...props}
    >
      <Stack
        d="flex"
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "28" }}
        justify="center"
      >
        <Box flex="1">
          {/* <Logo /> */}
          <Link href="mailto:capistranc@gmail.com">
            WestEndDesigns@gmail.com
          </Link>
          <Spacer />
          <Link href="tel:714-932-9998">(949) 735 - 5619</Link>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "10", md: "20" }}
        >
          <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
        </Stack>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks color="white" />
      </Stack>
    </Stack>
  );
};

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} West End Designs, Inc. All rights
    reserved.
  </Text>
);

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={[1, 2, 2, 2]} {...props}>
    <Box minW="6em">
      <FooterHeading fontSize="xl" mb="4">
        Code
      </FooterHeading>
      <Stack>
        <Link>Mobile Designs</Link>
        <Link>Web Applications</Link>
        <Link>Full Stack Solutions</Link>
      </Stack>
    </Box>
    <Box minW="6em">
      <FooterHeading fontSize="xl" mb="4">
        Content
      </FooterHeading>
      <Stack>
        <Link>Google Analytics</Link>
        <Link>Content Management</Link>
        <Link>Search Engine Optimization</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
