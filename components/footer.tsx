import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Nebi. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React and Next.js(App Router & Server Actions ),Typescript,Tailwind,
        Framer Motion, React Email & Resend, Vercel hosting
      </p>
    </footer>
  );
};

export default Footer;
