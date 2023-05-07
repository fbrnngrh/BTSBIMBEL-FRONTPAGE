import React from "react";

import Link from "next/link";

export default function Footer() {
  function submit() {}

  return (
    <footer className="container px-4 mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                href=""
                className="text-indigo-500 hover:text-secondary hover:underline"
              >
                API Developer
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href=""
                className="text-indigo-500 hover:text-secondary hover:underline"
              >
                Career
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href=""
                className="text-indigo-500 hover:text-secondary hover:underline"
              >
                Our Story
              </Link>
            </li>
            <li className="mt-2">
              <Link href="" className="text-indigo-500 hover:text-secondary hover:underline">
                New Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="" className="text-indigo-500 hover:text-secondary hover:underline">
                Get Scholarship
              </Link>
            </li>
            <li className="mt-2">
              <Link href="" className="text-indigo-500 hover:text-secondary hover:underline">
                Our pathskill
              </Link>
            </li>
            <li className="mt-2">
              <Link href="" className="text-indigo-500 hover:text-secondary hover:underline">
                All Features
              </Link>
            </li>
            <li className="mt-2">
              <Link href="" className="text-indigo-500 hover:text-secondary hover:underline">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-indigo-500 leading-loose">
            Batuah Teknologi Semesta <br />
            Alleysi Block X No. 12 <br />
            Pelaihari, Indonesia <br />
            +21 2020 5555
          </p>
        </div>
        <div className="w-full md:w-2/6 mb-8 md:mb-0">
          <h6 className="text-white">Promotions</h6>
          <p className="mt-4 text-indigo-500">
            Submit your email for new updates
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-6 py-3 mt-6 md:w-1/2"
              placeholder="Your email addres"
            />
            <button className="bg-secondary hover:bg-red-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3">
              Daftar Now
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-800 text-center">
        <p className="text-indigo-500">
          2023 Copyright Febrian Bayu Nugroho. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
