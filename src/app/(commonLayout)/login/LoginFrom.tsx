/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ActionSubmitButton from "../components/shared/submitButton/ActionSubmitButton";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
// import { useLoginMutation } from "@/redux/api/authApi";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { authLoginUser } from "../action/authUtils";

export type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  // const [login] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const loginInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      // const user = await login(loginInfo);
      const user = await authLoginUser(loginInfo);
      if (user) {
        const { token } = user;
        document.cookie = `accessToken=${token}`;
        localStorage.setItem("accessToken", token);
        router.push("/");
      }
      router.refresh();

      const err = user?.error as { data?: { message?: string } };

      if (err?.data?.message === "User Not Found") {
        toast.error("User Not Found");
      } else if (err?.data?.message === "Password Not Matched") {
        toast.error("Password Not Matched");
      } else {
        toast.success("User Login Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="">
      <form className="my-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            isClearable
            type="email"
            {...register("email", { required: true })}
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            onClear={() => console.log("input cleared")}
            className="max-w-xs"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
        </div>
        <div>
          <Input
            label="Password"
            {...register("password", { required: true })}
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs mt-3"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              href="/register"
              className="font-medium text-[#30415A] hover:text-[#3D6D8D]"
            >
              New here? Register now
            </Link>
          </div>
          {/* <div className="text-sm">
            <a
              href="#"
              className="font-medium text-[#30415A] hover:text-[#3D6D8D]"
            >
              Forgot your password?
            </a>
          </div> */}
        </div>
        <div className="flex justify-center">
          <ActionSubmitButton>Login</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
}
