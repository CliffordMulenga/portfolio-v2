import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import TypingText from "./ui/typing-btn";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable Magnetic Wrapper Component
 * Wraps a child and applies a magnetic pull effect towards the cursor.
 */
const Magnetic = ({ children, strength = 30 }) => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    const moveElement = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = el.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      gsap.to(el.current, {
        x: x * (strength / 100),
        y: y * (strength / 100),
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const resetElement = () => {
      gsap.to(el.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const currentEl = el.current;
    currentEl.addEventListener("mousemove", moveElement);
    currentEl.addEventListener("mouseleave", resetElement);

    return () => {
      currentEl.removeEventListener("mousemove", moveElement);
      currentEl.removeEventListener("mouseleave", resetElement);
    };
  }, [strength]);

  return React.cloneElement(children, { ref: el });
};

const navigationLinks = [
  { href: "/work", label: "Work" },
  { href: "/About", label: "About" },
  { href: "/#contact", label: "Contact" }
];

/**
 * Header Component
 * Features a standard navigation bar and a scroll-triggered floating menu button.
 */
export default function Header() {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Visibility logic for the floating button
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "bottom 10%",
        onEnter: () => {
          gsap.to(buttonRef.current, { 
            scale: 1, 
            opacity: 1, 
            duration: 0.4, 
            ease: "back.out(1.7)" 
          });
        },
        onLeaveBack: () => {
          // Only hide on desktop when scrolling back up
          if (window.innerWidth > 768) {
            gsap.to(buttonRef.current, { 
              scale: 0, 
              opacity: 0, 
              duration: 0.4, 
              ease: "back.in(1.7)" 
            });
          }
        },
      });

      // Handle Initial State for Mobile (Menu button is primary nav on mobile)
      if (window.innerWidth <= 768) {
        gsap.set(buttonRef.current, { scale: 1, opacity: 1 });
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event) => {
      const target = event.target;
      if (!menuRef.current || !buttonRef.current) return;
      if (menuRef.current.contains(target) || buttonRef.current.contains(target)) return;
      setIsMenuOpen(false);
    };

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Floating Button (Visible only on scroll for desktop, always for mobile) */}
      <div 
        ref={buttonRef}
        className="fixed top-4 right-4 z-[90]  md:top-10 md:right-10 md:z-[5000] scale-0 opacity-0 pointer-events-auto"
      >
        <Magnetic strength={50}>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="floating-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-12 w-12  md:h-16 md:w-16 items-center justify-center rounded-full bg-black text-white shadow-xl hover:bg-gray-900 transition-colors"
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-4 md:h-0.5 md:w-6 bg-white"></span>
              <span className="h-1 w-4 md:w-6 bg-white"></span>
            </div>
          </button> 
        </Magnetic>
        {isMenuOpen && (
          <nav
            id="floating-nav"
            ref={menuRef}
            className="fixed right-2 top-15 z-[90] w-44 rounded-2xl border border-[color:var(--border)] bg-white p-2 shadow-xl md:top-20 md:z-[5000]"
          >
            <NavigationMenu className="max-w-none *:w-full">
              <NavigationMenuList className="flex-col items-end gap-0">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index} className="w-full ">
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-sm font-medium text-[color:var(--ink)] hover:text-black hover:underline"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        )}
      </div>

      {/* Main Static Header */}
      <header id="main-header" ref={headerRef} className="w-full relative z-10">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          
          {/* Logo / Brand */}
          <div className="w-max flex items-center gap-2">
            <Magnetic strength={20}>
              <Link to="/" className="flex items-center gap-3 text-[color:var(--ink)] hover:text-black transition">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-lg font-bold">C</span>
                <span className="hidden text-sm font-semibold tracking-[0.2em] uppercase sm:block"><TypingText name={"Clifford"}/></span>
              </Link>
            </Magnetic>
          </div>

          {/* Navigation links (Hidden on mobile as they move to the floating button) */}
          <nav className="flex items-center gap-2">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex gap-8 list-none p-0 m-0">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <Magnetic strength={30}>
                      <Link
                        to={link.href}
                        className="text-sm font-medium text-gray-600 hover:text-black block py-2 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </Magnetic>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </header>
    </>
  );
}
