import BootstrapClient from "./component/BootsrapClient";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
export const metadata = {
  title: "Awari",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
