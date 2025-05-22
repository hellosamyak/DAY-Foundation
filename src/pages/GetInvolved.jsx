import React from "react";
import { Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <div className="bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold lg:text-5xl mb-6 sm:mb-8 text-rose-400 drop-shadow-lg">
          🤝Get Involved
        </h2>
        <div className="max-w-5xl w-full px-2 sm:px-0">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14 transition-transform transform hover:scale-105">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Want to make a difference? There are countless ways to become a
              catalyst for change with the{" "}
              <span className="font-semibold text-white">DAY Foundation</span>.
              Whether you’re passionate about volunteering your time, gaining
              real-world experience through internships, or making a heartfelt
              donation,
              <span className="text-rose-400 font-medium">
                {" "}
                your involvement has the power to transform lives and uplift
                communities
              </span>
              .
            </p>

            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              By joining our mission, you support initiatives that bring hope
              and opportunity to those who need it most— from providing quality
              education to underprivileged children, to organizing health camps
              in rural areas, and empowering women with the tools to lead
              independent and dignified lives.
            </p>

            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              <span className="text-rose-400 font-medium">
                Your small step can ignite a larger movement
              </span>
              . Every hour volunteered, every resource contributed, and every
              message shared plays a part in creating a ripple effect of change.
              Together, we can build a brighter, more equitable future—one act
              of kindness at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-8">
          Opportunities
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-3xl">
          Explore ways to contribute, grow, and create meaningful change.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-5xl px-2 sm:px-0">
          <div className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-10 text-center transition-transform transform hover:scale-105">
            <Users className="mx-auto h-10 w-10 sm:h-14 sm:w-14 text-rose-400" />
            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-white">
              Volunteer with Us
            </h3>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              📌 Work hands-on in education programs, healthcare initiatives,
              and community welfare activities.
              <br />
              📌 Gain practical experience while positively impacting lives.
              <br />
              📌 Open to students, professionals, and social enthusiasts who
              want to bring change.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-10 text-center transition-transform transform hover:scale-105">
            <Briefcase className="mx-auto h-10 w-10 sm:h-14 sm:w-14 text-rose-400" />
            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-white">
              Internship Opportunities
            </h3>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
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

      <section className="my-4 sm:my-6 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl w-full bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14 transition-transform transform hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Donate & Support Our Cause
          </h3>
          <p className="mt-3 sm:mt-4 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Your contributions help us continue our mission of empowering
            underprivileged communities. <br />
            <span className="mt-2 sm:mt-4 text-rose-400 font-medium">
              Thank you for your support!
            </span>
          </p>
          <Link to="/donations">
            <button className="mt-4 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-md bg-rose-500 border border-rose-500 text-white font-medium rounded hover:bg-rose-600 transition-all duration-300 ease-in-out">
              Donate Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
