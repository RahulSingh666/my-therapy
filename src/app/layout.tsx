import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "Dr. Maya Reynolds | Therapist in Denver, CO | Anxiety, Trauma & Depression",
  description:
    "Dr. Maya Reynolds, PsyD — a compassionate therapist in Denver, Colorado specializing in anxiety, trauma, depression, and life transitions. Book your session today.",
  keywords: [
    "therapist Denver CO",
    "Dr. Maya Reynolds",
    "anxiety therapy Denver",
    "trauma therapist Colorado",
    "depression counseling Denver",
    "online therapy Colorado",
    "CBT Denver",
    "EMDR Denver",
    "mental health Denver",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
