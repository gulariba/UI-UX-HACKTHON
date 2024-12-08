import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SideTable from "./Components/SideTable";
import TopProducts from "./Components/TopProducts";
import NewArrival from "./Components/NewArrival";
import BlogSection from "./Components/BlogSection";
import FollowUs from "./Components/FollowUs";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SideTable />
      <TopProducts />
      <NewArrival />
      <BlogSection />
      <FollowUs />
      <Footer />
    </>
  );
}
