import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "../components/AcmeLogo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  // References for each section on the page
  const supportRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);


  const menuItems = [
    { label: "Support", href: "#support", ref: supportRef },
    { label: "Video", href: "#video", ref: videoRef },
    { label: "Features", href: "#features", ref: featuresRef },
    { label: "Examples", href: "#picturebox", ref: examplesRef },
    { label: "Applications", href: "#applications", ref: applicationsRef },
    { label: "Business", href: "#business", ref: businessRef },
  ];

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = menuItems.find((i) => i.ref.current === entry.target);
          if (item) {
            console.log(`Section ${item.label} is intersecting`);
            setActiveLink(item.label);
          }
        }
      });
    },
    [menuItems]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    menuItems.forEach((item) => {
      if (item.ref.current) {
        observer.observe(item.ref.current);
        console.log(`Observing ${item.label}`);
      }
    });

    return () => {
      menuItems.forEach((item) => {
        if (item.ref.current) {
          observer.unobserve(item.ref.current);
          console.log(`Stopped observing ${item.label}`);
        }
      });
    };
  }, [handleIntersection, menuItems]);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">BiRefNet</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-between w-full">
        <div className="flex items-center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">BiRefNet</p>
          </NavbarBrand>
        </div>
        <div className="flex items-center justify-center flex-grow gap-4">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.label}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                className={`font-bold px-3 py-2 rounded-md hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out ${activeLink === item.label ? "text-warning" : ""}`}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
        <div className="flex items-center">
          <NavbarItem className="ml-4">
            <Link
              href="/segment"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-5 py-1.5 rounded-md shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Start
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
