import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Contact() {
  const contactDetails = [
    {
      icon: MapPin,
      label: "Address",
      value: (
        <a
          href="https://www.google.com/maps?q=Maharajpur+Adhartal,+2+Patel+Nagar,+Ankita+Parisar,+Jabalpur,+482004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline hover:text-rose-200"
        >
          Maharajpur Adhartal, 2 Patel Nagar, Ankita Parisar, Jabalpur - 482004,
          India
        </a>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      value: (
        <a
          href="tel:+918982144416"
          className="text-sm hover:underline hover:text-rose-200"
        >
          +91 89821 44416
        </a>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      value: (
        <a
          href="mailto:dayfoundation008@gmail.com"
          className="text-sm hover:underline hover:text-rose-200"
        >
          dayfoundation008@gmail.com
        </a>
      ),
    },
  ];

  const socialLinks = [
    {
      icon: FacebookIcon,
      label: "Facebook",
      value: (
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline hover:text-rose-200"
        >
          Facebook
        </a>
      ),
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: (
        <a
          href="https://www.instagram.com/dayfoundation_ngo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline hover:text-rose-200"
        >
          Instagram
        </a>
      ),
    },
    {
      icon: XIcon,
      label: "X (Formerly Twitter)",
      value: (
        <a
          href="https://x.com/DAYfoundat008"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline hover:text-rose-200"
        >
          X
        </a>
      ),
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: (
        <a
          href="https://www.linkedin.com/company/day-foundation/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline hover:text-rose-200"
        >
          LinkedIn
        </a>
      ),
    },
    {
      icon: YouTubeIcon,
      label: "YouTube",
      value: (
        <a
          href="https://www.youtube.com/c/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline hover:text-rose-200"
        >
          YouTube
        </a>
      ),
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
        <h2 className="text-4xl font-extrabold sm:text-5xl mb-8 text-rose-400 drop-shadow-lg">
          Contact Us
        </h2>
        <div className="max-w-5xl w-full">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-10 sm:p-14 transition-transform transform hover:scale-105">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              At the{" "}
              <span className="font-semibold text-white">DAY Foundation</span>,
              we are driven by a passion for empowering underprivileged
              communities through{" "}
              <span className="text-rose-400 font-medium">
                education, aid, youth engagement, and care
              </span>
              . We believe that meaningful connections are key to creating
              positive change, and we are{" "}
              <span className="text-rose-400 font-medium">
                always eager to hear
              </span>{" "}
              from those who share our mission.
            </p>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Whether you’re seeking to{" "}
              <span className="text-rose-400 font-medium">learn more</span>{" "}
              about our initiatives, wish to{" "}
              <span className="text-rose-400 font-medium">collaborate</span> on
              a community project, or{" "}
              <span className="text-rose-400 font-medium">have questions</span>{" "}
              about how we can support you or your organization,{" "}
              <span className="text-rose-400 font-medium">
                we are here to help
              </span>
              .
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactDetails.map((contact, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-lg p-8 text-center flex flex-col items-center hover:scale-105 transition-transform"
              >
                <contact.icon className="h-12 w-12 text-rose-400" />
                <p className="mt-4 text-xl font-semibold text-white">
                  {contact.label}
                </p>
                <p className="mt-2 text-gray-400">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Follow Us
          </h3>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            Stay connected with us on social media and be part of our journey
            towards positive change.
          </p>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl shadow-lg p-10 text-center transition-transform transform hover:scale-105"
              >
                <social.icon className="mx-auto h-14 w-14 text-rose-400" />
                <p className="mt-6 text-2xl font-bold text-white">
                  {social.label}
                </p>
                <p className="mt-4 text-lg text-gray-400">{social.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
