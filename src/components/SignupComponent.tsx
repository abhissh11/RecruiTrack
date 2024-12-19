"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function AdminSignup() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    // Input validation
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("All fields are required!");
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        toast.success("Registration successful! You can now log in.");
        setFormData({ email: "", password: "", confirmPassword: "" });
      } else {
        const data = await response.json().catch(() => ({}));
        toast.error(
          data.message || data.error || "An unexpected error occurred."
        );
      }
    } catch (err) {
      console.error("Error during signup:", err);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70svh] w-full flex items-center justify-center">
      <ToastContainer aria-live="polite" />
      <div className="w-full md:max-w-md p-6 bg-zinc-900 shadow-lg rounded-xl">
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 ${
              loading ? "bg-indigo-400" : "bg-indigo-600"
            } text-white font-medium rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <h2 className="text-slate-100 py-2">
          Already registered?{" "}
          <span className="hover:underline">
            <Link href="/auth/signin">Signin</Link>
          </span>
        </h2>
      </div>
    </div>
  );
}

const Input = ({
  label,
  name,
  type,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-base font-medium text-slate-100"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border rounded-xl bg-zinc-800 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);
