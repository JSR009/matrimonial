"use client";

import { useState, memo } from "react";
import { useForm } from "react-hook-form";
import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";

interface LoginFormData {
  email: string;
  password: string;
}

const PasswordField = memo(
  ({
    label,
    name,
    show,
    toggle,
    register,
    error,
  }: {
    label: string;
    name: string;
    show: boolean;
    toggle: () => void;
    register: any;
    error?: boolean;
  }) => (
    <div className="relative mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={show ? "text" : "password"}
        {...register(name, { required: true })}
        className="w-full p-2 border rounded pr-10"
      />
      <div
        onClick={toggle}
        className="absolute top-3 right-3 cursor-pointer text-gray-500"
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">This field is required.</p>
      )}
    </div>
  )
);

const SuccessModal = memo(({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-md shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Login Successful!</h2>
      <p>You will now be redirected to your profile page.</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        OK
      </button>
    </div>
  </div>
));

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const { login } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const token = await userCredential.user.getIdToken();

      // Set token in Cookies for persistent session
      Cookies.set("authToken", token, { expires: 7 });

      // Store token in context or state as needed
      login(token);

      setIsModalOpen(true);
    } catch (err) {
      setFirebaseError("Error logging in: " + (err as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-16">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-8">Login</h2>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <PasswordField
          label="Password"
          name="password"
          show={showPassword}
          toggle={() => setShowPassword(!showPassword)}
          register={register}
          error={!!errors.password}  
        />

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800"
        >
          Login
        </button>

        {firebaseError && <p className="text-red-500 text-center mt-4">{firebaseError}</p>}

        <div className="text-center mt-6">
          <p>
            Don’t have an account?{" "}
            <Link href="/register">
              <span className="text-blue-600 hover:underline">Register</span>
            </Link>
          </p>
        </div>
      </form>

      {isModalOpen && (
        <SuccessModal
          onClose={() => {
            setIsModalOpen(false);
            router.push("/profile");
          }}
        />
      )}
    </div>
  );
};

export default Login;
