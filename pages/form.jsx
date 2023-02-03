import React from "react";

const buildform = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1635776063328-153b13e3c245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content"></div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Email</span>
            <span className="label-text-alt"></span>
          </label>
          <input
            type="text"
            placeholder="Your email"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </label>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white">Discord username</span>
              <span className="label-text-alt"></span>
            </label>
            <input
              type="text"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white">
                What Keyboard would you like me to build?
              </span>
              <span className="label-text-alt"></span>
            </label>
            <input
              type="text"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white">
                Can I build the board on stream?
              </span>
              <span className="label-text-alt"></span>
            </label>
            <input
              type="text"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white">
                Do you need any of the following services?
              </span>
              <span className="label-text-alt"></span>
            </label>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">
                  Please note there will be a charge*
                </span>
                <span className="label-text-alt"></span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Switch lube service</option>
                <option>Desoldering</option>
                <option>Stabilizers</option>
              </select>
              <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </label>
            </div>
          </div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default buildform;
