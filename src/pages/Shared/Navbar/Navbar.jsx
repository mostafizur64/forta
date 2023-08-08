import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

import Container from "../../../components/Container/Container";
const Navbar = () => {
  let links = [
    { name: "Subscribe", link: "/" },
    { name: "Build", link: "/" },
    { name: "Case Studies", link: "/" },
    { name: "Stake", link: "/" },
    { name: "Blog", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <div className="navbar text-[#fff]">
          <div className="py-[41px] md:flex justify-between items-center  ">
            {/* logo here  */}
            <div className=" cursor-pointer">
              <h1 className="text-5xl">* Forta</h1>
              {/* <img
                className="w-[152px] h-[33px] text-white"
                src={logoImg}
                alt="logo"
                style={{
                  background:
                    "url(<path-to-image>), lightgray 0px 0px / 100% 96.004% no-repeat",
                }} */}
            </div>
            {/* menu icon  */}
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-6 cursor-pointer md:hidden"
            >
              {open ? (
                <FaXmark className=" w-6 h-6 " />
              ) : (
                <FaBars className=" w-6 h-6 " />
              )}
            </div>
            {/* nav links are here  */}
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 lg:mt-0 mt-12 absolute md:static text-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-12" : "top-[-490px]"
              }`}
            >
              {links.map((link, index) => (
                <li
                  className="font-bold text-[20px] my-7 md:my-0 md:ml-10 text-white "
                  key={index}
                >
                  <a href={"/"}>{link.name}</a>
                </li>
              ))}
              {/* add new item  */}
              <button className="btn py-[16px] px-[30px] md:ml-10 rounded-[154px] border border-1-[#fff] md:static lg:hidden ">
                Launch App
              </button>
            </ul>
            <button className="btn py-[16px] px-[30px] md:ml-10 rounded-[154px] border border-1-[#fff] md:static hidden lg:block">
              Launch App
            </button>
        
          </div>

         
        </div>
      </Container>
    </>
  );
};

export default Navbar;
