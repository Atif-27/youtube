import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { MdUnsubscribe } from "react-icons/md";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48 space-y-4 md:sticky fixed top-20 h-screen bg-white z-1 text-lg ">
      <ul className="space-y-2">
        <li className="p-2 hover:bg-slate-100 rounded-md">
          <Link className="flex items-center justify-start " to="/">
            <AiFillHome />
            <p className="pl-3">Home</p>
          </Link>
        </li>
        <li className="p-2  hover:bg-slate-100 rounded-md">
          <Link className="flex items-center justify-start " to="/subscription">
            <MdUnsubscribe />
            <p className="pl-3">Subscriptions</p>
          </Link>
        </li>
        <li className="p-2  hover:bg-slate-100 rounded-md">
          <Link className="flex items-center justify-start " to="/liked">
            <AiFillLike />
            <p className="pl-3">Liked Videos</p>
          </Link>
        </li>
      </ul>

      <div>
        <h1 className="font-bold">For You</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <div className="text-sm pt-10">
          <a
            href="https://www.youtube.com/howyoutubeworks/policies/copyright/"
            className=""
          >
            About Press Copyright Contact us Creator Advertise Developers
          </a>
          <p className=" font-thin">© 2023 Google LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
