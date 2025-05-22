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
          className="text-xs sm:text-sm hover:underline hover:text-rose-200"
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
          className="text-xs sm:text-sm hover:underline hover:text-rose-200"
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
          className="text-xs sm:text-sm hover:underline hover:text-rose-200"
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
          className="text-xs sm:text-sm hover:underline hover:text-rose-200"
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
          className="text-xs sm:text-sm hover:underline hover:text-rose-200"
        >
          Instagram
        </a>
      ),
    },
    {
      icon: XIcon,
      label: "X",
      value: (
        <a
          href="https://x.com/DAYfoundat008"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm hover:underline hover:text-rose-200"
        >
          X (Twitter)
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
          className="text-xs sm:text-sm hover:underline hover:text-rose-200"
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
          className="text-xs sm:text-sm hover:underline hover:text-rose-200"
        >
          YouTube
        </a>
      ),
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold lg:text-5xl mb-6 sm:mb-8 text-rose-400 drop-shadow-lg">
          📧Contact Us
        </h2>
        <div className="w-full max-w-5xl px-2 sm:px-0">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14 transition-transform transform hover:scale-105">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
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
            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you're seeking to{" "}
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

          <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {contactDetails.map((contact, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 text-center flex flex-col items-center hover:scale-105 transition-transform"
              >
                <contact.icon className="h-8 w-8 sm:h-12 sm:w-12 text-rose-400" />
                <p className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white">
                  {contact.label}
                </p>
                <p className="mt-1 sm:mt-2 text-gray-400">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-800 min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="w-full max-w-7xl text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Follow Us
          </h3>
          <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Stay connected with us on social media and be part of our journey
            towards positive change.
          </p>
          <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center transition-transform transform hover:scale-105"
              >
                <social.icon className="mx-auto h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-rose-400" />
                <p className="mt-3 sm:mt-4 lg:mt-6 text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {social.label}
                </p>
                <p className="mt-1 sm:mt-2 lg:mt-4 text-sm sm:text-base lg:text-lg text-gray-400">
                  {social.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
