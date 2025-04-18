import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Provider from "./provider";
import { PT_Serif, Roboto } from 'next/font/google';

const ptSerif = PT_Serif({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ptSerif.className}>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
