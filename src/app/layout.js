import "./globals.css";
import Menu from './Components/Menu/menu'


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
      >
        <Menu/>
        {children}
      </body>
    </html>
  );
}