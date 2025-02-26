import type { Metadata } from "next";
import "./globals.css";
import { Box } from "@mui/material";
import { Header } from "./components/Header/Header";
import ThemeRegistry from "./theme/ThemeRegistry";
export const metadata: Metadata = {
  title: "Izam Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Header />
            <Box
              sx={{
                flex: 1,
                marginTop: "72px",
                minHeight: "100vh",
                backgroundColor: "rgb(245, 245, 245)",
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
