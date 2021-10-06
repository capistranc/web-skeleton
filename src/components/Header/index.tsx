export const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact Us" },
];

export * from "./Banner";
import { StickyNavHeader } from "./StickyNavHeader";

export const Header = (
  <StickyNavHeader
    color="white"
    bgColor="rgba(0.4,0.4,0.4,0.4)"
    links={links}
  />
);
