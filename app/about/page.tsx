import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About · Nikunj Tyagi",
  description: "Product designer, cold coffee enthusiast, and 3am pixel pusher. Get to know the person behind the portfolio."
};

export default function About() {
  return <AboutPage />;
}
