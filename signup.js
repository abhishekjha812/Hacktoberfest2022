import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const signup = () => {
  const router = useRouter();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [aadhar, setaadhar] = useState();
  const [cpassword, setcpassword] = useState();
  const [phone, setphone] = useState();
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     router.push("/");
  //   }
  // }, []);
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "password") {
      setpassword(e.target.value);
    } else if (e.target.name == "cpassword") {
      setcpassword(e.target.value);
    } else if (e.target.name == "aadhar") {
      setaadhar(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password, aadhar, phone };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/StudentSignup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    if (response.success) {
      router.push("/student");

      setname("");
      setemail("");
      setpassword("");
      setaadhar("");
      setcpassword("");
      setphone("");
      toast.success("Account created", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="text-center my-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Welcome To Student Master Database
        </h1>
      </div>
      <form>
        <div className="mb-6 mx-5 px-5">
          <input
            type="text"
            onChange={handleChange}
            id="name"
            value={name}
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            required=""
          />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2 p-5 m-5">
          <div>
            <input
              type="number"
              onChange={handleChange}
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Contact No."
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required=""
            />
          </div>
          <div>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required=""
            />
          </div>
        </div>
        <div className="mb-6 mx-5 px-5">
          <input
            type="text"
            onChange={handleChange}
            name="aadhar"
            id="aadhar"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Aadhar No."
            required=""
          />
        </div>
        <div className="mb-6 mx-5 px-5">
          <input
            type="file"
            // onChange={handleChange}
            id="aadharimg"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Upload Photo"
            required=""
          />
        </div>
        <div className="mb-6 mx-5 px-5">
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required=""
          />
        </div>
        <div className="mb-6 mx-5 px-5">
          <input
            type="password"
            onChange={handleChange}
            name="cpassword"
            id="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Confirm Password"
            required=""
          />
        </div>
        {password != cpassword && (
          <span className="text-sm text-red-600 mx-5 px-5 block">
            Please Enter Same Password Again !
          </span>
        )}
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-white mx-10 px-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default signup;
