/* eslint-disable @typescript-eslint/no-explicit-any */
import { getFromLocalStorage } from "@/utils/local-storage";
import { decodeToken } from "@/utils/decodeToken";

export const getUserInfo = () => {
  try {
    const accessToken = getFromLocalStorage("accessToken");
    // console.log(accessToken);
    if (accessToken) {
      const decodedData: any = decodeToken(accessToken);
      // console.log(decodedData);
      return {
        ...decodedData,
        role: decodedData?.role,
      };
    }
    return null;
  } catch (error) {
    console.error("User Info Error:", error);
    return null;
  }
};
