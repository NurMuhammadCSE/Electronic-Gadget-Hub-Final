/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ActionSubmitButton from "../components/shared/submitButton/ActionSubmitButton";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/api/authApi";
import { useState } from "react";
import { setToken, setUser } from "@/redux/feature/userSlice";
import { jwtDecode } from "jwt-decode";
import { SubmitHandler, useForm } from "react-hook-form";
// import { signIn } from "next-auth/react";
// import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  type Inputs = {
    email: string;
    password: string;
  };

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
      const user = await login(loginInfo);
      const err = user?.error as { data?: { message?: string } };

      if (err?.data?.message === "User Not Found") {
        toast.error("User Not Found");
      } else if (err?.data?.message === "Password Not Matched") {
        toast.error("Password Not Matched");
      } else {
        toast.success("User Login Successfully");
        const { token } = user.data;
        const userToken = jwtDecode(token);

        // Save the token in Redux store
        dispatch(setToken(token));
        dispatch(setUser(userToken));

        // cookies().set("auth-token", token);
        document.cookie = `auth-token=${token}`;

        // Redirect to homepage after successful login
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Function to handle Google login
  // const handleGoogleLogin = async () => {
  //   signIn("google", { callbackUrl: "/" });
  // };

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
        <div className="flex justify-center ">
          <ActionSubmitButton>Login</ActionSubmitButton>
        </div>
      </form>
      {/* <p className="text-center">Or Sign Up Using</p>

      <div className="flex justify-center mb-10 mt-2">
        <button onClick={handleGoogleLogin} className="btn btn-circle ">
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            width={50}
            height={50}
            alt="google logo"
          />
        </button> 
      </div>*/}
    </div>
  );
}

// /* eslint-disable react-hooks/exhaustive-deps */
// "use client";
// import { Input } from "@nextui-org/react";
// import Link from "next/link";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import ActionSubmitButton from "../components/shared/submitButton/ActionSubmitButton";
// import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
// import { EyeFilledIcon } from "./EyeFilledIcon";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { useLoginMutation } from "@/redux/api/authApi";
// import { useState } from "react";
// import { setToken, setUser } from "@/redux/feature/userSlice";
// import { jwtDecode } from "jwt-decode";
// import { SubmitHandler, useForm } from "react-hook-form";

// export default function LoginFrom() {
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const { email, password } = useAppSelector((state) => state.login);
//   const [login] = useLoginMutation();

//   type Inputs = {
//     email: string;
//     password: string;
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     const loginInfo = {
//       email: data.email,
//       password: data.password,
//     };
//     try {
//       const user = await login(loginInfo);
//       const err = user?.error as { data?: { message?: string } };

//       if (err?.data?.message === "User Not Found") {
//         toast.error("User Not Found");
//       } else if (err?.data?.message === "Password Not Matched") {
//         toast.error("Password Not Matched");
//       } else {
//         toast.success("User Login Successfully");
//         const { token } = user.data;
//         const userToken = jwtDecode(token);
//         // console.log(userToken, token)
//         dispatch(setToken(token));
//         dispatch(setUser(userToken));
//         router.push("/");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => setIsVisible(!isVisible);

//   return (
//     <div className="">
//       <form className="my-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <Input
//             isClearable
//             type="email"
//             {...register("email", { required: true })}
//             label="Email"
//             variant="bordered"
//             placeholder="Enter your email"
//             onClear={() => console.log("input cleared")}
//             className="max-w-xs"
//           />
//           {errors.email?.type === "required" && (
//             <p className="text-red-500">Email is required</p>
//           )}
//         </div>
//         <div>
//           <Input
//             label="Password"
//             {...register("password", { required: true })}
//             variant="bordered"
//             placeholder="Enter your password"
//             endContent={
//               <button
//                 className="focus:outline-none"
//                 type="button"
//                 onClick={toggleVisibility}
//                 aria-label="toggle password visibility"
//               >
//                 {isVisible ? (
//                   <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
//                 ) : (
//                   <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
//                 )}
//               </button>
//             }
//             type={isVisible ? "text" : "password"}
//             className="max-w-xs mt-3"
//           />

//           {errors.password?.type === "required" && (
//             <p className="text-red-500">Password is required</p>
//           )}
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="text-sm">
//             <Link
//               href="/register"
//               className="font-medium text-[#30415A] hover:text-[#3D6D8D]"
//             >
//               New here? Register now
//             </Link>
//           </div>
//           <div className="text-sm">
//             <a
//               href="#"
//               className="font-medium text-[#30415A] hover:text-[#3D6D8D]"
//             >
//               Forgot your password?
//             </a>
//           </div>
//         </div>
//         <div className="flex justify-end ">
//           <ActionSubmitButton>login</ActionSubmitButton>
//         </div>
//       </form>
//     </div>
//   );
// }
