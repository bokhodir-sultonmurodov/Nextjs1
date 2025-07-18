"use client"

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
        <div>
          <h4 className="text-base font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Our Mission</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Web Development</a></li>
            <li><a href="#" className="hover:underline">Mobile Apps</a></li>
            <li><a href="#" className="hover:underline">UI/UX Design</a></li>
            <li><a href="#" className="hover:underline">Consulting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Docs</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Tutorials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>Email: contact@dummyjson.com</li>
            <li>Phone: +998 90 123 45 67</li>
            <li>Location: Tashkent, Uzbekistan</li>
            <li><a href="#" className="hover:underline">Get Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
