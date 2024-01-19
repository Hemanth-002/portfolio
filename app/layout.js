import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: "Hemanth",
  description: "Hemanth Sairam Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
