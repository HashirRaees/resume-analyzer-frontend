import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { Poppins } from 'next/font/google';

export const metadata = {
  title: "Resume Analyzer",
  description: "Analyze your resume and track job applications",
};
const poppins = Poppins({
  weight: ['400', '700'], // Specify weights you need (e.g., regular, bold)
  subsets: ['latin'], // Or other subsets like 'devanagari'
  variable: '--font-poppins', // CSS variable name
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-gradient-to-br from-slate-50 to-slate-100">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
