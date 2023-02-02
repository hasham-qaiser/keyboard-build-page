import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1635776063328-153b13e3c245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-white font-bold">
            Hey, Hasham Here.
          </h1>
          <p className="mb-5 text-white">
            You can submit a build request below, or you can just sit here and
            enjoy this site.
          </p>

          <Link href="/form">
            <button className="btn btn-primary bg-slate-400">
              Build Request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
