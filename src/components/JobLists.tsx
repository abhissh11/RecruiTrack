import JobCard from "@/components/JobCard";

export default function JobList() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-6  min-h-fit">
      <JobCard
        companyLogo="https://cdn.dribbble.com/users/904380/screenshots/2230701/attachments/415076/google-logo-revised.png" // Replace with actual company logo URL
        jobRole="Frontend Developer"
        companyName="Tech Solutions Inc."
        location="Remote"
        jobType="Full-Time"
      />

      <JobCard
        companyLogo="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png"
        jobRole="Backend Developer"
        companyName="Innovatech Ltd."
        location="San Francisco, CA"
        jobType="Contract"
      />

      <JobCard
        companyLogo="https://i.pinimg.com/736x/d8/47/9a/d8479ab66758648c5b2a403249a65d57.jpg"
        jobRole="UI/UX Designer"
        companyName="Creative Minds"
        location="New York, NY"
        jobType="Internship"
      />
    </div>
  );
}
