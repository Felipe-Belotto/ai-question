import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { languageTag } from "@/paraglide/runtime";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Question - Free Exam Generator with AI",
  description:
    "Generate custom exams on any topic with AI. Test your knowledge with AI-powered questions and boost your learning for free.",
  keywords: [
    "AI questions",
    "exam generator",
    "AI learning",
    "AI study tool",
    "free exams",
    "online exams",
    "AI education",
    "AI Question",
  ],
  authors: [{ name: "Felipe Belotto" }],
  creator: "Felipe Belotto",
  publisher: "AI Question",
  applicationName: "AI Question",
  icons: {
    icon: "/logo.png",
  },
  appleWebApp: {
    capable: true,
    title: "AI Question",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "AI Question - Free Exam Generator with AI",
    description:
      "Create personalized exams on any subject with the power of AI. AI Question offers a free and easy way to test your knowledge.",
    siteName: "AI Question",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Question - Free Exam Generator with AI",
    description:
      "AI Question allows you to create and take exams on any topic. Test your knowledge and learn with AI-powered questions for free.",
    creator: "@felipebelotto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "",
  },
  category: "education",
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={languageTag()}>
      <body
        className={`${nunito.className} antialiased min-h-screen bg-background flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
