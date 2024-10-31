/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Badge,
} from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "@/lib/AuthProviders";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/feature/userSlice";
import dynamic from "next/dynamic";
import { jwtDecode } from "jwt-decode"; // Correct import without curly braces

function NavBar() {
  // const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const { selectedItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { setUser } = useAuth();
  const router = useRouter();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // // Check if the token exists and is valid
  // useEffect(() => {
  //   setIsClient(true); // Ensures the component is rendered on the client-side
  //   checkToken(); // Check token when the component mounts
  // }, [user]); // Also recheck whenever the `user` state changes

  // const checkToken = () => {
  //   const token = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("auth-token="))
  //     ?.split("=")[1];

  //   if (token) {
  //     try {
  //       const decodedToken: any = jwtDecode(token);
  //       // Check if the token has a valid email and is not expired
  //       if (decodedToken?.email) {
  //         setIsAuthenticated(true); // Token is valid
  //       } else {
  //         setIsAuthenticated(false); // Invalid token
  //       }
  //     } catch (error) {
  //       console.error("Invalid token:", error);
  //       setIsAuthenticated(false);
  //     }
  //   } else {
  //     setIsAuthenticated(false); // No token found
  //   }
  // };

  const menuItems = ["Products", "Dashboard"];

  const routeMap: Record<string, string> = {
    user: "/dashboard/my-orders",
    admin: "/dashboard/admin",
  };

  const handleLogout = () => {
    // Get all cookies and delete each one by setting its expiration to the past
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    // Dispatch the logout action and redirect to home
    dispatch(logout());
    setUser(null);
    // setIsAuthenticated(false); // Reset authentication status after logout
    router.push("/"); // Redirect to home after logout
  };


  // if (!isClient) {
  //   return null; // Prevent rendering on the server
  // }

  return (
    <Navbar
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Brand Logo (Centered for Mobile) */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link href="/" aria-current="page">
              Gadget Hub
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link href="/" aria-current="page">
              Gadget Hub
            </Link>
          </p>
        </NavbarBrand>

        <NavbarItem>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/product" aria-current="page">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          {user?.email  && (
            <Link href={routeMap[user.role] || "/dashboard/my-orders"}>
              Dashboard
            </Link>
          )}
        </NavbarItem>

        {/* Cart Icon */}
        <NavbarItem>
          <Badge content={selectedItems} color="warning">
            <Link href="/cart">
              <ShoppingCart size={24} />
            </Link>
          </Badge>
        </NavbarItem>

        {/* Authentication */}
        {user?.email ? (
          <NavbarItem>
            <Button onClick={handleLogout} color="primary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link href="/login">Login</Link>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Badge content={selectedItems} color="warning">
            <Link href="/cart">
              <ShoppingCart size={24} />
            </Link>
          </Badge>
        </NavbarMenuItem>

        {/* Dynamic Menu Items */}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={
                item === "Products"
                  ? "/product"
                  : item === "Dashboard"
                  ? routeMap[user?.role] || "/"
                  : "/"
              }
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        {/* Show Logout Button for Logged In Users */}
        {user?.email ? (
          <NavbarMenuItem>
            <Button
              onClick={handleLogout}
              color="primary"
              variant="flat"
              fullWidth
            >
              Logout
            </Button>
          </NavbarMenuItem>
        ) : (
          <NavbarMenuItem>
            <Link className="w-full" href="/login">
              Login
            </Link>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
}

export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
