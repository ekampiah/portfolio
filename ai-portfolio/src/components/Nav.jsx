import React from "react";

const Nav = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky-0 flex justify-between items-center p-4 px-8">
      <a href="/" className="hover:text-purple-600">EKA</a>
      <div className="flex items-center space-x-4">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-purple-600">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
