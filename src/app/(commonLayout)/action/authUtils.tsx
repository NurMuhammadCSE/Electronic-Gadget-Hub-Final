/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";
import { Inputs } from "../login/LoginFrom";

export async function authLoginUser(loginData: Inputs) {
  try {
    const res = await fetch(`${process.env.serverUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    // console.log(data);
    // if (data) {
    //   localStorage.setItem("accessToken", data.token);
    //   // cookies().set("accessToken", data.token);
    //   // cookies().set("refreshToken", data.data.refreshToken);
    //   return data;
    // }
    return data;
  } catch (error) {
    throw error;
  }
}

export async function authSignUpUser(loginData: Inputs) {
  try {
    const res = await fetch(`${process.env.serverUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Handle user logout by clearing cookies
export const handleLogout = async () => {
  try {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};
