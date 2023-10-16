import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service | Catagory",
};

const Categories = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <SMBreadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Categories", path: "/categories" },
          ]}
        />
        <h1>Catagory</h1>
      </Container>

      <Footer />
    </div>
  );
};

export default Categories;
