// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from '@/components/theme-provider';
// import { Toaster } from '@/components/ui/toaster';
// // import { SessionProvider } from "next-auth/react"
// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'EcoCodeAI - Optimize Your Code, Reduce Carbon Footprint',
//   description: 'AI-driven tool that scans GitHub repositories to analyze code efficiency and carbon footprint',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
//           {children}
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }



import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster'; 
import SessionProviderWrapper from '@/components/SessionWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcoCodeAI - Optimize Your Code, Reduce Carbon Footprint',
  description: 'AI-driven tool that scans GitHub repositories to analyze code efficiency and carbon footprint',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProviderWrapper>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
