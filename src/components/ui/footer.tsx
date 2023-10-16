import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-container custom-flex">
        <Link href="#" className="custom-logo">
          <span className="custom-title">Motel</span>
        </Link>
        <p className="custom-text">
          © 2022 Motel —
          <Link href="#" className="custom-link">
            @faysal
          </Link>
        </p>
        <span className="custom-icons">
          <Link href="#" className="custom-icon">
            <FacebookOutlined />
          </Link>
          <Link href="#" className="custom-icon">
            <InstagramOutlined />
          </Link>
          <Link href="#" className="custom-icon">
            <TwitterOutlined />
          </Link>
          <Link href="#" className="custom-icon">
            <LinkedinOutlined />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
