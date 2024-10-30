import logo from "../../assets/icon/Group 33072.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = ({ togolpage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#fffaf0]">
      <nav className="flex items-center justify-between px-8 py-10 md:px-32">
        <div className="h-16">
          <img src={logo} alt="Logo" className="h-full" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a
              href="#"
              className="text-[var(--basic)] font-roboto font-medium text-base px-3 py-2"
              onClick={() => togolpage(10)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[var(--basic)] font-roboto font-medium text-base px-3 py-2"
              onClick={() => togolpage(20)}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[var(--basic)] font-roboto font-medium text-base px-3 py-2"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[var(--basic)] font-roboto font-medium text-base px-3 py-2"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* Drawer (Mobile Menu) */}
      {isOpen && (
        <div className="drawer drawer-mobile">
          <input
            type="checkbox"
            className="drawer-toggle"
            checked={isOpen}
            onChange={() => setIsOpen(false)}
          />
          <div className="drawer-content">
            {/* Main Page Content (hidden behind overlay) */}
          </div>
          <div className="drawer-side">
            <label
              className="drawer-overlay"
              onClick={() => setIsOpen(false)}
            ></label>
            <ul className="menu p-4 w-80 bg-base-100">
              <li>
                <a
                  href="#"
                  className="text-[var(--basic)] font-roboto font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--basic)] font-roboto font-medium"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--basic)] font-roboto font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--basic)] font-roboto font-medium"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
