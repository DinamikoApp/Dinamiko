import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Sign up for our newsletter to stay updated</h2>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white px-4 py-4 shadow-md focus:outline-none focus:ring-2 focus:ring-primary w-[80%] text-black"
            />
            <button
              type="submit"
              className="bg-gradient text-white  px-12 py-2 mt-4 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
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
