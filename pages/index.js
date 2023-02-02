import { Roboto } from "@next/font/google";
import Hero from "@/components/Hero";

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
