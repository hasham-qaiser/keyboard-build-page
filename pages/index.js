import Head from "next/head";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/hero";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
