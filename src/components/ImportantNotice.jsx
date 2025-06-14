import React, { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ImportantNotice = () => {
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    fetch("/notice.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.show) setNotice(data);
      })
      .catch((err) => console.error("Failed to fetch notice:", err));
  }, []);

  if (!notice) return null;

  return (
    <div className="w-full overflow-hidden bg-yellow-300 border-y border-yellow-400 shadow-sm">
      <Link
        to={notice.link}
        className="no-underline hover:underline hover:underline-offset-2 hover:text-rose-600 transition-colors duration-200"
      >
        <div className="flex items-center py-2 px-4 whitespace-nowrap animate-marquee">
          <AlertCircle className="w-5 h-5 mr-2 shrink-0 text-black" />
          <span className="text-sm sm:text-base font-medium text-black">
            {notice.message} {notice.cta}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ImportantNotice;
