import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phno, setPhno] = useState("");
  const [job, setJob] = useState("");
  const [q1, setq1] = useState("yes");
  const [q2, setq2] = useState("yes");
  const [q3, setq3] = useState("yes");
  const [q4, setq4] = useState("yes");
  const [q5, setq5] = useState("yes");
  const [q6, setq6] = useState("yes");
  const [q7, setq7] = useState("yes");
  const [q8, setq8] = useState("yes");
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const response = {
      fname,
      lname,
      phno,
      job,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      msg,
    };
    try {
      alert('response submitted successfully')
    } catch (e) {
      console.log(e);
    }
    //post response to DB
  };




  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Please complete this form for your weekly survey
            </h2>
          </div>
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                First name*
              </label>
              <input
                name="first-name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
            </div>

            <div>
              <label
                for="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                name="last-name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="job status"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Job Status
              </label>
              <input
                name="job status"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={job}
                onChange={(e) => {
                  setJob(e.target.value);
                }}
              />
            </div>

            {/* <div className="sm:col-span-2">
              <label
                for="Phone Number"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Phone Number*
              </label>
              <input
                name="Phone Number"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={phno}
                onChange={(e) => {
                  setPhno(e.target.value);
                }}
              />
            </div> */}
            <div className="flex flex-col">
              <p>Q1. Have you been feeling 100% fit recently?</p>
              <select
                className="border-2"
                onChange={(e) => {
                  setq1(e.target.value);
                }}
              >
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
              <p>Q2. Do you engage in Physical activity and exercise?</p>
              <select
                className="border-2"
                onChange={(e) => {
                  setq2(e.target.value);
                }}
              >
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
              <p>Q3.Do you get enough sleep and maintain a nutritious diet?</p>
              <select
                className="border-2"
                onChange={(e) => {
                  setq3(e.target.value);
                }}
              >
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
              <p>
                Q4.Do you have a support system for friends that help you when
                your feel lonely?
              </p>
              <select
                className="border-2"
                onChange={(e) => {
                  setq4(e.target.value);
                }}
              >
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
              <p>Q5.Do you effici=tively manage and cope with stress?</p>
              <select
                className="border-2"
                onChange={(e) => {
                  setq5(e.target.value);
                }}
              >
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
              <p>Q6.Do you seek professional help or guidance when needed?</p>
              <select
                className="border-2"
                onChange={(e) => {
                  setq6(e.target.value);
                }}
              >
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
              <p>
                Q7.Does your current job provide you with enough money to live
                properly?
              </p>
              <select
                className="border-2"
                onChange={(e) => {
                  setq7(e.target.value);
                }}
              >
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
              <p>Q8.Do you need any sponsorship for any courses ?</p>
              <select
                className="border-2"
                onChange={(e) => {
                  setq8(e.target.value);
                }}
              >
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Pls Fill any reason you would like to ask the NGO for help
              </label>
              <textarea
                name="message"
                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
              <button
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                onClick={submitHandler}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;