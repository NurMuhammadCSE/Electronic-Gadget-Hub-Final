"use client";
import React, { useState } from "react";
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
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";
import { getUserInfo } from "../../action/userInfoData";
import { useRouter } from "next/navigation";

// Define a User type with specific roles
interface User {
  email: string;
  role: "user" | "admin";
  id: string;
}

function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { selectedItems } = useAppSelector((state) => state.cart);

  const menuItems = ["Products", "Dashboard"];
  const routeMap: Record<User["role"], string> = {
    user: "/dashboard/my-orders",
    admin: "/dashboard/admin",
  };

  const user: User | null = getUserInfo();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    // document.cookie = `accessToken=`;
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });

    router.refresh();
  };

  return (
    <Navbar
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      style={{ backgroundColor: "#133E87", color: "#FFFFFF" }}
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
          {user && (
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
        {user ? (
          <NavbarItem>
            <Button
              onClick={handleLogout}
              style={{ color: "#FFFFFF" }}
              color="primary"
              variant="flat"
            >
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
                  ? routeMap[user?.role as User["role"]] || "/"
                  : "/"
              }
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        {/* Show Logout Button for Logged In Users */}
        {user ? (
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
