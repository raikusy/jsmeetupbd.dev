import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import UpcomingEvents from "@/components/upcoming-events";
import PastEvents from "@/components/past-events";
import Speakers from "@/components/speakers";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <Hero />
      <About />
      <UpcomingEvents />
      <PastEvents />
      <Speakers />
      <Newsletter />
      <Footer />
    </main>
  );
}
