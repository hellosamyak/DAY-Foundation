import React from "react";

const addImage = (arr) =>
  arr.map((member) => ({
    ...member,
    image: `https://plus.unsplash.com/premium_photo-1683584405772-ae58712b4172?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D,${
      member.name.split(" ")[0]
    }`,
  }));

export const JabalpurMembers = addImage([
  { name: "Aditi Tiwari", role: "Head of Programs & Development" },
  { name: "Niharika Vasvani", role: "Head of Human Resources (HR)" },
  { name: "Khushi Tandan", role: "Head of Legal & Advocacy" },
  { name: "Moulshree Sahu", role: "Creative Director" },
  { name: "Shaurya Nanda", role: "Public Relations (PR) Manager" },
  { name: "Yash Jhureley", role: "Logistics Manager" },
  { name: "Aadya Mishra", role: "Program Lead – Social & Mental Health (SMH)" },
  {
    name: "Shikhar Pandey",
    role: "Program Manager – Social & Mental Health (SMH)",
  },
  { name: "Ishika Singh Verma", role: "Education & Curriculum Manager" },
  { name: "Ananya Jayan", role: "Education & Curriculum Manager" },
  {
    name: "Harsh Vishwakarma",
    role: "Assistant Program Coordinator – Social & Mental Health (SMH)",
  },
  {
    name: "Astha Sahu",
    role: "Assistant Program Coordinator – Social & Mental Health (SMH)",
  },
  { name: "Nayanika Gupta", role: "Assistant Creative Lead" },
  { name: "Harsh Soni", role: "Assistant Logistics Coordinator" },
  { name: "Amit Kanojia", role: "Assistant Human Resources (HR) Manager" },
  { name: "Vinayak Khandelwal", role: "Operations & Management Coordinator" },
  {
    name: "Akanksha Chourasiya",
    role: "City Public Relations (PR) Coordinator – Jabalpur",
  },
]);

export const IndoreMembers = addImage([
  { name: "Khushi Chanodiya", role: "City Management Coordinator – Indore" },
  { name: "Priyanshi Dubey", role: "Head of Human Resources (HR)" },
  { name: "Zenab Sheikh", role: "Creative Director" },
  { name: "Dhruv Mukati", role: "Logistics Manager" },
  { name: "Neha Singh", role: "Legal Affairs Manager" },
  { name: "Khushi Kapoor", role: "Healthcare Program Manager" },
  { name: "Meenakshi", role: "Education & Curriculum Manager" },
  { name: "Saurabh Pandey", role: "Education & Curriculum Manager" },
  { name: "Nikita Patel", role: "Education & Curriculum Manager" },
  { name: "Edwin Kujur", role: "Assistant Human Resources (HR) Manager" },
  { name: "Urvi", role: "Assistant Creative Lead" },
  { name: "Abhijeet Singh Sengar", role: "Assistant Logistics Coordinator" },
  {
    name: "Hriday Bhugra",
    role: "City Public Relations (PR) Coordinator – Indore",
  },
]);

export const CentralMembers = addImage([
  { name: "Om Sen", role: "Founder & Executive Director" },
  {
    name: "Radhika Umre",
    role: "Director of Social & Mental Health (SMH) and Marketing",
  },
  { name: "Aditi Tiwari", role: "Director of Programs & Development" },
  { name: "Vaibhav Sharma", role: "Director of Finance" },
  { name: "Niharika Vasvani", role: "Head of Human Resources (HR)" },
  { name: "Khushi Tandan", role: "Head of Legal & Advocacy" },
  { name: "Gunika Upadhyay", role: "Outreach Manager" },
  { name: "Vinayak Khandelwal", role: "Operations & Management Coordinator" },
  { name: "Nikita Patel", role: "Indore City Representative" },
  { name: "Moulshree Sahu", role: "Jabalpur City Representative" },
  { name: "Khushali Tak", role: "Hiring Executive" },
]);

function TeamMembers() {
  return <div>TeamMembers</div>;
}

export default TeamMembers;
