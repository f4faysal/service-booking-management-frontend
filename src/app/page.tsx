import AppointmentBooking from "@/components/home/AppointmentBooking";
import BlogPost from "@/components/home/BlogPost";
import SeeAllCategory from "@/components/home/SeeAllCategory";
import SeeServices from "@/components/home/SeeServices";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motel",
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container>
        <SeeAllCategory />
        <SeeServices />
        <AppointmentBooking />
        <BlogPost />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
