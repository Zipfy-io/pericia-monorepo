"use client";
import "src/app/globals.css";
import { Poppins } from "next/font/google";
import Link, { LinkProps } from "next/link";
import React from "react";
import { extendTheme } from "@chakra-ui/react";
import { SaasProvider, theme as baseTheme } from "@saas-ui/react";

const colors = {
  gray: {
    "50": "#EFF2F5",
    "100": "#D2DAE4",
    "200": "#B6C2D3",
    "300": "#99AAC2",
    "400": "#7C92B1",
    "500": "#5F7AA0",
    "600": "#4C6180",
    "700": "#394960",
    "800": "#263140",
    "900": "#131820",
  },
  red: {
    "50": "#FBE9E9",
    "100": "#F4C3C3",
    "200": "#ED9C9C",
    "300": "#E67575",
    "400": "#DF4E4E",
    "500": "#D82727",
    "600": "#AD1F1F",
    "700": "#821717",
    "800": "#561010",
    "900": "#2B0808",
  },
  orange: {
    "50": "#FCF0E9",
    "100": "#F6D6C0",
    "200": "#F0BB98",
    "300": "#EBA170",
    "400": "#E58648",
    "500": "#DF6C20",
    "600": "#B35619",
    "700": "#864113",
    "800": "#592B0D",
    "900": "#2D1606",
  },
  yellow: {
    "50": "#FCF5E9",
    "100": "#F6E4C1",
    "200": "#EFD399",
    "300": "#E9C271",
    "400": "#E3B04A",
    "500": "#DD9F22",
    "600": "#B17F1B",
    "700": "#855F14",
    "800": "#58400E",
    "900": "#2C2007",
  },
  green: {
    "50": "#ECF9F2",
    "100": "#C9EDDA",
    "200": "#A7E2C2",
    "300": "#84D7AB",
    "400": "#62CB93",
    "500": "#3FC07B",
    "600": "#339963",
    "700": "#26734A",
    "800": "#194D31",
    "900": "#0D2619",
  },
  teal: {
    "50": "#ECF8F8",
    "100": "#CAECEC",
    "200": "#A9E0DF",
    "300": "#87D4D3",
    "400": "#65C8C6",
    "500": "#43BCBA",
    "600": "#369695",
    "700": "#287170",
    "800": "#1B4B4A",
    "900": "#0D2625",
  },
  cyan: {
    "50": "#EAF8FB",
    "100": "#C4EBF2",
    "200": "#9EDEEA",
    "300": "#79D1E2",
    "400": "#53C4DA",
    "500": "#2DB7D2",
    "600": "#2493A8",
    "700": "#1B6E7E",
    "800": "#124954",
    "900": "#09252A",
  },
  blue: {
    "50": "#E6F3FE",
    "100": "#BADCFD",
    "200": "#8DC6FB",
    "300": "#61B0FA",
    "400": "#3599F8",
    "500": "#0883F7",
    "600": "#0669C6",
    "700": "#054F94",
    "800": "#033463",
    "900": "#021A31",
  },
  purple: {
    "50": "#E9F2FB",
    "100": "#C1D9F5",
    "200": "#9AC1EF",
    "300": "#72A9E8",
    "400": "#4B90E2",
    "500": "#2378DC",
    "600": "#1C60B0",
    "700": "#154884",
    "800": "#0E3058",
    "900": "#07182C",
  },
  pink: {
    "50": "#FAEAEF",
    "100": "#F2C4D1",
    "200": "#EA9FB4",
    "300": "#E27996",
    "400": "#D95379",
    "500": "#D12E5C",
    "600": "#A72549",
    "700": "#7E1B37",
    "800": "#541225",
    "900": "#2A0912",
  },
};

const theme = extendTheme({ colors }, baseTheme);

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const NextLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link ref={ref} {...props} />
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SaasProvider theme={theme} linkComponent={NextLink}>
        <div className={inter.className}>{children}</div>
      </SaasProvider>
    </>
  );
}
