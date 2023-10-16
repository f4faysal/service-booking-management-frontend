import { naveItems } from "@/constants/navbar-item";
import { Button } from "antd";
import Link from "next/link";
import Container from "./container";

const Navbar = () => {
  return (
    <header className="custom-header">
      <Container>
        <div className="header">
          <div>
            <Link className="title-font" href="/">
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Motel
              </span>
            </Link>
          </div>
          <nav className="nav-links">
            {naveItems.map((item, index) => (
              <Link
                style={{
                  textTransform: "uppercase",
                  fontSize: "17px",
                }}
                key={index}
                href={item?.path}
                className="mr-5"
              >
                {item?.label}
              </Link>
            ))}
          </nav>
          <div>
            <Button type="primary">Button</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
