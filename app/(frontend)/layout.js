import MainTemplate from "@/components/frontendcomponents/template/MainTemplate";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["Poppins"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], 
  variable: "Poppins"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} cz-shortcut-listen="true">
        <MainTemplate>
          {children}
        </MainTemplate> 
      </body>
    </html>
  );
}
