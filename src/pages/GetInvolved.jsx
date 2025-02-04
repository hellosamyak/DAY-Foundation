import React from "react";
import { Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <div className="bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <h2 className="text-4xl font-extrabold sm:text-5xl mb-8 text-rose-400 drop-shadow-lg">
          Get Involved
        </h2>
        <div className="max-w-5xl w-full">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-10 sm:p-14 transition-transform transform hover:scale-105">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Want to make a difference? There are many ways to contribute to
              social change with the{" "}
              <span className="font-semibold text-white">DAY Foundation</span>.
              Whether through volunteering, internships, or donations, your
              efforts can transform lives. Join us in creating{""}{" "}
              <span className="text-rose-400 font-medium">
                sustainable impact by supporting education, healthcare, and
                welfare initiatives
              </span>
              . Together, we can build a brighter future for those in need.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 flex flex-col justify-center items-center text-center px-6 py-20">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-8">
          Opportunities
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
          Explore ways to contribute, grow, and create meaningful change.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl">
          <div className="bg-gray-900 rounded-2xl shadow-lg p-10 text-center transition-transform transform hover:scale-105">
            <Users className="mx-auto h-14 w-14 text-rose-400" />
            <h3 className="mt-6 text-2xl font-bold text-white">
              Volunteer with Us
            </h3>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              📌 Work hands-on in education programs, healthcare initiatives,
              and community welfare activities.
              <br />
              📌 Gain practical experience while positively impacting lives.
              <br />
              📌 Open to students, professionals, and social enthusiasts who
              want to bring change.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl shadow-lg p-10 text-center transition-transform transform hover:scale-105">
            <Briefcase className="mx-auto h-14 w-14 text-rose-400" />
            <h3 className="mt-6 text-2xl font-bold text-white">
              Internship Opportunities
            </h3>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              📌 Engage in meaningful social work while developing professional
              skills.
              <br />
              📌 Work in areas like education, public relations, event
              management, and community outreach.
              <br />
              📌 A great way for students and young professionals to enhance
              their resumes while giving back to society.
            </p>
          </div>
        </div>
      </section>

      <section className="my-6 flex flex-col justify-center items-center text-center px-6 py-20">
        <div className="max-w-4xl w-full bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-10 sm:p-14 transition-transform transform hover:scale-105">
          <h3 className="text-3xl font-bold text-white">
            Donate & Support Our Cause
          </h3>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
            Your contributions help us continue our mission of empowering
            underprivileged communities. <br />
            <span className="mt-4 text-rose-400 font-medium">
              Thank you for your support!
            </span>
          </p>
          <Link to="/donations">
            <button className="mt-4 px-4 py-2 text-md bg-rose-500 border border-rose-500 text-white font-medium rounded hover:bg-rose-600 transition-all duration-300 ease-in-out">
              Donate Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
