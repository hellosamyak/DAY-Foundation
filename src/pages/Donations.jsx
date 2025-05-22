import React, { useState, useEffect } from "react";

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const donationOptions = ["₹1500", "₹3000", "₹6000", "₹12000"];

  useEffect(() => {
    if (selectedAmount) {
      setCustomAmount(selectedAmount.replace("₹", ""));
    }
  }, [selectedAmount]);

  const handleDonate = () => {
    const amount = selectedAmount || (customAmount ? `₹${customAmount}` : "");
    if (amount) {
      alert(`Thank you for choosing to donate ${amount}!`);
    } else {
      alert("Please select or enter a donation amount.");
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold lg:text-5xl mb-3 text-rose-400 drop-shadow-lg">
          Support the Cause❤️‍🔥
        </h2>
        <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl px-4">
          Your generosity helps us create lasting change for those who need it
          most.
        </p>
        <div className="w-full max-w-4xl px-4 sm:px-0">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 sm:mb-6">
              Make a Difference
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
              {donationOptions.map((amount) => (
                <button
                  key={amount}
                  className={`py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-transform transform hover:scale-105 ${
                    selectedAmount === amount
                      ? "bg-rose-500 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedAmount(amount);
                  }}
                >
                  {amount}
                </button>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
              Your donation will help support the cause and make a difference in
              the lives of those in need.
            </p>

            <input
              type="text"
              value={customAmount}
              onChange={(e) => {
                const value = e.target.value;
                setCustomAmount(value);
                setSelectedAmount(value ? `₹${value}` : "");
              }}
              placeholder="₹ Other Amount"
              className="w-full bg-gray-800 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl mb-4 sm:mb-6 outline-none focus:ring-2 focus:ring-rose-400"
            />

            <button
              onClick={handleDonate}
              className="w-full bg-rose-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-rose-600 flex items-center justify-center gap-2"
            >
              Donate Now
            </button>

            <p className="text-xs text-gray-400 mt-4 sm:mt-6">
              * Your contributions are eligible for up to 50% tax benefit under
              Section 80G. DAY Foundation is a registered non-profit
              organization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
