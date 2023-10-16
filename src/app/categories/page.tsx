import CategoriesOption from "@/components/Categories";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motel | Catagory",
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
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <h1>See All Category</h1>
          <CategoriesOption />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Categories;
