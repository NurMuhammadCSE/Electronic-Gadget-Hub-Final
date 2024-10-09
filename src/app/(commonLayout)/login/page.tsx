import { Card, CardBody, CardHeader } from "@nextui-org/react";
import LoginFrom from "./LoginFrom";

const loginPage = () => {
  return (
    <div className="mt-20 flex justify-center items-center">
      <Card className="w-96">
        <CardHeader className="flex justify-center">
          <div className="flex">
            <p className="font-bold text-3xl px-4">Login</p>
          </div>
        </CardHeader>
        <CardBody>
          {/* 🚀 Demo Credentials */}
          <div className="text-center mb-2">
            {/* <p className="text-sm font-semibold">🚀 Demo Credentials</p> */}
            <p className="text-sm">
              <strong>Admin Login</strong>: admin@gmail.com
            </p>
            <p className="text-sm">
              <strong>Password</strong>: 123456
            </p>
            <p className="text-sm mt-2">
              <strong>User Login</strong>: user@gmail.com
            </p>
            <p className="text-sm">
              <strong>Password</strong>: 123456
            </p>
          </div>
          <div className="flex justify-center">
            <LoginFrom></LoginFrom>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default loginPage;
