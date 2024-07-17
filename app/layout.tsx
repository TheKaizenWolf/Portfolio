import { Metadata } from "next";
import StyledComponentsRegistry from "src/lib/registry";
import { createGlobalStyle } from "styled-components";

export const metadata: Metadata = {
  title: "Raul Saavedra",
  description: "Portfolio of Raul Saavedra",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
