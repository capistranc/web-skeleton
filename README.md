Bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is an opinionated Boilerplate that comes built in with

- Typescript
- ChakraUI
- Framer Motion
- Next-Seo

as well as a few default components and folder structures.

## Components vs Layouts

There is delineation between components and layouts and pages.

### Components

are very basic and contain no data and non-theme specific styling. (i.e. colors)

### Layouts

contain no data and are collections of multiple components that include styling between components and may include default themes for styling.
Generally this avoids using any hard coded values, and relies heavily on the themes.util for determining foreground and background colors of each component.

### Pages

contain data, have page specific styling, and compose several layouts together often times passing in the data.
