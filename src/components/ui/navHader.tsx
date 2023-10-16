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
            <Link href="#" className="mr-5">
              First Link
            </Link>
            <Link href="#" className="mr-5">
              Second Link
            </Link>
            <Link href="#" className="mr-5">
              Third Link
            </Link>
            <Link href="#" className="mr-5">
              Fourth Link
            </Link>
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
