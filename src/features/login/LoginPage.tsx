import React from "react";
import { LoginCard } from "./v1/components/LoginCard";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-[#06070B] flex items-center justify-center p-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <LoginCard />
    </main>
  );
};

export default LoginPage;
