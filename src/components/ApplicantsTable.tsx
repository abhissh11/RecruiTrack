"use client";

import { useState } from "react";
import ApplicantDetailsModal from "./ApplicantDetailModal";

interface Applicant {
  id: number;
  name: string;
  role: string; // Backend, Frontend, Full-Stack
  skills: string[];
  email: string;
  mobile: string;
  cvLink: string;
  status: string; // Applied, Shortlisted, Interviewed, Hired, Rejected
}

const fakeApplicants: Applicant[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend",
    skills: ["React", "Next.js", "Tailwind"],
    email: "john.doe@example.com",
    mobile: "123-456-7890",
    cvLink: "https://example.com/cv/johndoe",
    status: "Applied",
  },
  {
    id: 2,
    name: "Shivangi Verma",
    role: "Backend",
    skills: ["Node.js", "Python", "Django"],
    email: "shivangi@example.com",
    mobile: "987-654-3210",
    cvLink: "https://example.com/cv/shivangi",
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "Full-Stack",
    skills: ["React", "Node.js", "MongoDB"],
    email: "rahul@example.com",
    mobile: "555-666-7777",
    cvLink: "https://example.com/cv/rahul",
    status: "Interviewed",
  },
  {
    id: 4,
    name: "Priya Reddy",
    role: "Backend",
    skills: ["Java", "Spring Boot"],
    email: "priya@example.com",
    mobile: "222-333-4444",
    cvLink: "https://example.com/cv/priya",
    status: "Hired",
  },
];

export default function ApplicantTable() {
  const [applicants] = useState<Applicant[]>(fakeApplicants);
  const [roleFilter, setRoleFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredApplicants = applicants.filter((applicant) => {
    const roleMatch = roleFilter === "All" || applicant.role === roleFilter;
    const statusMatch =
      statusFilter === "All" || applicant.status === statusFilter;
    return roleMatch && statusMatch;
  });

  const openModal = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="p-4 bg-zinc-950 md:w-[80%]  rounded-lg shadow-lg sm:overflow-hidden overflow-x-scroll">
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="text-2xl font-bold text-slate-300 mb-4">
            Applicant Tracking Dashboard
          </h2>

          {/* Filters */}
          <div className="flex gap-4 mb-4">
            {/* Role Filter */}
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-slate-300 rounded p-2"
            >
              <option value="All">All Roles</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full-Stack">Full-Stack</option>
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-slate-300 rounded p-2"
            >
              <option value="All">All Statuses</option>
              <option value="Applied">Applied</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Interviewed">Interviewed</option>
              <option value="Hired">Hired</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <table className="w-full table-auto text-slate-300">
          <thead>
            <tr>
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">Role</th>
              <th className="text-left py-2 px-4">Skills</th>
              <th className="text-left py-2 px-4">Status</th>
              <th className="text-left py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.length > 0 ? (
              filteredApplicants.map((applicant) => (
                <tr key={applicant.id} className="hover:bg-zinc-900">
                  <td className="py-2 px-4">{applicant.name}</td>
                  <td className="py-2 px-4">{applicant.role}</td>
                  <td className="py-2 px-4">{applicant.skills.join(", ")}</td>
                  <td className="py-2 px-4">{applicant.status}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => openModal(applicant)}
                      className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-400">
                  No applicants match the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Modal */}
        <ApplicantDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          applicant={selectedApplicant}
        />
      </div>
    </div>
  );
}
