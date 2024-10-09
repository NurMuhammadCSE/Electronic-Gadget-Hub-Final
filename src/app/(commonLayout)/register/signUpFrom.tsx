"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";
import ActionSubmitButton from "../components/shared/submitButton/ActionSubmitButton";
import { useSignUpMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
// import { signIn } from "next-auth/react";
// import Image from "next/image";

const SignUpFrom = () => {
  const router = useRouter();

  const [signUp] = useSignUpMutation();
  type Inputs = {
    name: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // TODO: POST https://electronic-gadgets-shop-backend.vercel.app/api/auth/signUp net::ERR_CONNECTION_REFUSED
  //! Sign Up Successfully

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const signUpInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const user = await signUp(signUpInfo);
      const err = user?.error as { data?: { message?: string } };

      if (err?.data?.message === "User already exists") {
        toast.error("User already exists");
      } else {
        toast.success("User Sign Up Successfully");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  // Function to handle Google login
  // const handleGoogleLogin = async () => {
  //   signIn("google", { callbackUrl: "/" });
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            {...register("name", { required: true })}
            name="name"
            type="text"
            label="Name"
            variant="bordered"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
        </div>
        <div>
          <Input
            {...register("email", { required: true })}
            name="email"
            className="mt-3"
            type="email"
            label="Email"
            variant="bordered"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>

        <div>
          <Input
            {...register("password", { required: true })}
            className="mt-3"
            type="password"
            label="Password"
            name="password"
            variant="bordered"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <div className="flex justify-end font-medium text-[#30415A] hover:text-[#3D6D8D]">
          <Link href="/login">Already have account?</Link>
        </div>
        <div className="flex mt-5 justify-center ">
          <ActionSubmitButton>Sign Up</ActionSubmitButton>
        </div>
      </form>
      {/* <p className="mt-5 text-center">Or Sign Up Using</p>

      <div className="flex justify-center mb-10 mt-2">
        <button onClick={handleGoogleLogin} className="btn btn-circle ">
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            width={50}
            height={50}
            alt="google logo"
          />
        </button>
      </div> */}
    </div>
  );
};

export default SignUpFrom;
