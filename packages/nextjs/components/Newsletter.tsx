import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Dinamiko</h2>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-600 mb-8 mt-8">Sign up for our newsletter to stay updated</h2>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white px-4 py-4 shadow-md focus:outline-none focus:ring-2 focus:ring-primary w-[70%] text-black"
            />
            <button
              type="submit"
              className="bg-gradient text-white  px-16 py-3 mt-6 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
