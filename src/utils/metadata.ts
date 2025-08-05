import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  twitterHandle?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  alternates?: Record<string, string>;
  publishedTime?: string;
  modifiedTime?: string;
}

export const generateMetadata = ({
  title = `Team Atoms | Expert Web & App Development & Freelance Digital Solutions`,
  description = `Team Atoms is a freelance web agency offering expert web development, design, and digital solutions tailored to your business needs. Transform your online presence with our skilled team of developers and creatives.`,
  icons = "./icons/logo.png",
  noIndex = false,
 keywords = [
  "Atoms",
  "Team Atoms",
  "freelance web development",
  "app development",
  "AI-based applications",
  "React Native development",
  "Next.js developer",
  "custom web and mobile apps",
  "AI solutions",
  "machine learning apps",
  "digital product design",
  "UI/UX design",
  "MERN stack agency",
  "full stack development",
  "web and app development agency",
  "tech freelance team"
],
  author = "Anikesh,Mohammad Ehshan",
  type = "website",
}: MetadataProps = {}): Metadata => {
  return {
    title,
    description,
    openGraph: {
      type,
      title,
      description,
    },
    keywords,
    authors: [{ name: author }],
    creator: author,

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons,
    robots: {
      index: !noIndex,
      follow: true,
      nocache: noIndex,
    },
    //    metadataBase: new URL("https://your-domain.com"),
  };
};
