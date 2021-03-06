import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div>
      {windowSize >= 1075 ? (
        <div className="flex flex-row flex-wrap min-w-full max-h-fit px-12 mt-8 mb-20 justify-between text-red-600 gap-6">
          <div className="text-3xl hover:bg-red-600 hover:text-white">
            <Link href="/">
              <a>FSK Satellite</a>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap text-3xl gap-6">
            <Link href="#history">
              <a className="hover:bg-red-600 hover:text-white">History</a>
            </Link>
            <Link href="#discography">
              <a className="hover:bg-red-600 hover:text-white">Discography</a>
            </Link>
            <Link href="#members">
              <a className="hover:bg-red-600 hover:text-white">Members</a>
            </Link>
            <Link href="#gallery">
              <a className="hover:bg-red-600 hover:text-white">Gallery</a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-w-full max-h-fit px-12 mt-8 mb-20 justify-center text-red-600 gap-2">
          <div className="text-3xl hover:bg-red-600 hover:text-white">
            <Link href="/">
              <a>FSK Satellite</a>
            </Link>
          </div>
          <div className="flex flex-col text-3xl gap-2 flex-wrap">
            <Link href="#history">
              <a className="hover:bg-red-600 hover:text-white">History</a>
            </Link>

            <Link href="#discography">
              <a className="hover:bg-red-600 hover:text-white">Discography</a>
            </Link>
            <Link href="#members">
              <a className="hover:bg-red-600 hover:text-white">Members</a>
            </Link>
            <Link href="#gallery">
              <a className="hover:bg-red-600 hover:text-white">Gallery</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
