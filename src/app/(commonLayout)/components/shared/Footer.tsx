"use client";

import React, { useEffect, useState } from "react";
import { Link } from "@nextui-org/react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import dynamic from "next/dynamic";

function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs on the client-side
  }, []);

  if (!isClient) {
    // This prevents the footer from rendering on the server
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Brand Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-2xl font-bold mb-3">Gadgets Hub</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for all the latest gadgets and accessories.
              Stay ahead of the tech curve.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  color="primary"
                  className="hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  color="primary"
                  className="hover:text-blue-400 transition"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/refund-policy"
                  color="primary"
                  className="hover:text-blue-400 transition"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-condition"
                  color="primary"
                  className="hover:text-blue-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  color="primary"
                  className="hover:text-blue-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                color="primary"
                className="hover:text-blue-400 transition"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                color="primary"
                className="hover:text-blue-400 transition"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                color="primary"
                className="hover:text-blue-400 transition"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                color="primary"
                className="hover:text-blue-400 transition"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider and Copyright Section */}
        <div className="text-center mt-12 border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Gadgets Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
