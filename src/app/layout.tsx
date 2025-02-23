import "./globals.css";
import { Reenie_Beanie, Source_Code_Pro } from "next/font/google";


const reenieBeanie = Reenie_Beanie({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-reenie-beanie",
});


const sourceCodePro = Source_Code_Pro({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata = {
  title: "Daniel MWAMBA | Full Stack Developer",
  description: "Portfolio of Daniel Mwamba, a passionate Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${reenieBeanie.variable} ${sourceCodePro.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
