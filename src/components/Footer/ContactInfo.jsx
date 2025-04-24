import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  const contacts = [
    {
      icon: Mail,
      text: "dayfoundation008@gmail.com",
      href: "mailto:dayfoundation008@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 89821 44416",
      href: "tel:+918982144416",
    },
    {
      icon: MapPin,
      text: "C/O Maharajpur Adhartal, 2 Patel Nagar, Ankita Parisar, Jabalpur - 482004 Jabalpur, India",
      href: "https://www.google.com/maps?q=Maharajpur+Adhartal,+2+Patel+Nagar,+Ankita+Parisar,+Jabalpur,+482004",
    },
  ];

  return (
    <div>
      <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
        Contact
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {contacts.map((contact, index) => (
          <li key={index} className="flex items-center gap-2 sm:gap-3">
            <div className="flex-shrink-0">
              <contact.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
            </div>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:underline hover:text-rose-200"
            >
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
