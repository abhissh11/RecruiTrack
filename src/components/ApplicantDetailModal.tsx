"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicant: Applicant | null;
}

interface Applicant {
  id: number;
  name: string;
  role: string;
  skills: string[];
  email: string;
  mobile: string;
  cvLink: string;
  status: string;
}

export default function ApplicantDetailsModal({
  isOpen,
  onClose,
  applicant,
}: ModalProps) {
  if (!isOpen || !applicant) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-zinc-950 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-slate-300 mb-4">
          Applicant Details
        </h2>
        <p className="text-slate-400 mb-2">
          <strong>Name:</strong> {applicant.name}
        </p>
        <p className="text-slate-400 mb-2">
          <strong>Role Applied:</strong> {applicant.role}
        </p>
        <p className="text-slate-400 mb-2">
          <strong>Skills:</strong> {applicant.skills.join(", ")}
        </p>
        <p className="text-slate-400 mb-2">
          <strong>Email:</strong> {applicant.email}
        </p>
        <p className="text-slate-400 mb-2">
          <strong>Mobile:</strong> {applicant.mobile}
        </p>
        <p className="text-blue-500 underline mb-4">
          <a href={applicant.cvLink} target="_blank" rel="noopener noreferrer">
            View CV
          </a>
        </p>

        <button
          onClick={onClose}
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
