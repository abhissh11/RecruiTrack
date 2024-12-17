"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  cvLink: string;
  skills: string;
}

const skillsOptions = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Django",
  "Java",
  "C++",
  "Go",
  "Kubernetes",
];

// Reusable Input Component
const InputField = ({
  label,
  ...props
}: {
  label: string;
  [key: string]: any;
}) => (
  <div>
    <label className="block text-sm font-medium text-slate-300">{label}</label>
    <input
      {...props}
      className="mt-1 w-full rounded-md bg-slate-900 border border-slate-800 p-2 text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
);

// Reusable Select Component
const SelectField = ({
  label,
  options,
  ...props
}: {
  label: string;
  options: string[];
  [key: string]: any;
}) => (
  <div>
    <label className="block text-sm font-medium text-slate-300">{label}</label>
    <select
      {...props}
      className="mt-1 w-full rounded-md bg-slate-900 border border-slate-800 p-2 text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option value="" disabled>
        Select a skill
      </option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    cvLink: "",
    skills: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.cvLink ||
      !formData.skills
    ) {
      setError("Please fill out all the fields.");
      return;
    }

    console.log("Submitted Data:", formData);
    alert("Application Submitted Successfully!");

    // Reset the form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      cvLink: "",
      skills: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 mx-auto max-w-lg space-y-6 rounded-lg bg-slate-950 border border-slate-800 p-6 shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-400 text-center">
        Submit Your Application
      </h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Name */}
      <InputField
        label="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Email */}
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Mobile */}
      <InputField
        label="Mobile"
        type="tel"
        name="mobile"
        placeholder="Enter your mobile number"
        value={formData.mobile}
        onChange={handleChange}
        required
      />

      {/* CV Link */}
      <InputField
        label="CV Link"
        type="url"
        name="cvLink"
        placeholder="Enter your CV link"
        value={formData.cvLink}
        onChange={handleChange}
        required
      />

      {/* Skills */}
      <SelectField
        label="Skills"
        name="skills"
        options={skillsOptions}
        value={formData.skills}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit and Apply
        </button>
      </div>
    </form>
  );
}
