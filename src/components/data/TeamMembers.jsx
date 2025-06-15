import React from "react";

const generateTeamMembers = (members, team) => {
  return members.map((member, index) => {
    const fullName = member.name.toLowerCase().replace(/\s+/g, "");
    const imageUrl = `/images/team/${team}/${fullName}.webp`;
    const fallbackImage = `https://plus.unsplash.com/premium_photo-1683584405772-ae58712b4172?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

    return {
      ...member,
      image: imageUrl,
      fallbackImage,
      preload: index === 0,
    };
  });
};

const jabalpurBaseMembers = [
  { name: "Vinayak Khandelwal", role: "Management Coordinator" },
  { name: "Moulshree Sahu", role: "Creative Head" },
  { name: "Nayanika Gupta", role: "Assistant Creative Head" },
  { name: "Yash Jhureley", role: "Head of Logistics" },
  { name: "Harsh Soni", role: "Assistant Head of Logistics" },
  { name: "Ananya Jayan", role: "Education & Curriculum Manager" },
  { name: "Ishika Singh Verma", role: "Education & Curriculum Manager" },
  { name: "Amit Kanojiya", role: "Head of Human Resources (HR)" },
];

const indoreBaseMembers = [
  { name: "Khushi Chanodiya", role: "Management Coordinator" },
  { name: "Nikita Patel", role: "Education & Curriculum Manager" },
  { name: "Saurabh Pandey", role: "Education & Curriculum Manager" },
  { name: "Zenab Sheikh", role: "Creative Head" },
  { name: "Urvi", role: "Assistant Creative Head" },
  { name: "Edwin Kujur", role: "Head of Human Resources (HR)" },
  { name: "Priyanshi Dubey", role: "Assistant Human Resources (HR) Head" },
  { name: "Dhruv Mukati", role: "Head of Logistics" },
  { name: "Abhijeet Singh Sengar", role: "Assistant Head of Logistics" },
  { name: "Neha Singh", role: "Legal Manager" },
  { name: "Khushi Kapoor", role: "Health Care Manager" },
];

const centralBaseMembers = [
  { name: "Om Sen", role: "Founder & Executive Director" },
  { name: "Niharika Vasvani", role: "Head of Human Resources (HR)" },
  { name: "Aditi Tiwari", role: "Head of Programs & Development" },
  { name: "Radhika Umre", role: "Head of Social Media & Marketing" },
  { name: "Khushi Tandan", role: "Legal & Communication Head" },
  { name: "Vaibhav Sharma", role: "Head of Finance" },
  { name: "Khushali Tak", role: "Hiring Executive" },
  { name: "Gunika Upadhyay", role: "Outreach Manager" },
];

const socialMediaTeam = [
  { name: "Aadya Mishra", role: "Head of Social Media" },
  { name: "Archie Yadav", role: "Assistant Head of Social Media" },
  { name: "Harsh Vishwakarma", role: "Assistant Head of Social Media" },
  { name: "Shaurya Nanda", role: "Head of Public Relations (PR)" },
  { name: "Saniya Naaz", role: "Assistant Head of Public Relations (PR)" },
  { name: "Ayushman Rathore", role: "Assistant Head of Public Relations (PR)" },
];

export const JabalpurMembers = generateTeamMembers(
  jabalpurBaseMembers,
  "jabalpur"
);
export const IndoreMembers = generateTeamMembers(indoreBaseMembers, "indore");
export const CentralMembers = generateTeamMembers(
  centralBaseMembers,
  "central"
);
export const SMTeamMembers = generateTeamMembers(
  socialMediaTeam,
  "socialMedia"
);
