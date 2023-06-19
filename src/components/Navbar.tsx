import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const navOptions = (
    <>
      <a className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">01.</span> HOME
      </a>
      <a className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">02.</span> ABOUT
      </a>
      <a className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">03.</span> RESUME
      </a>
      <a className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">04.</span> PROJECTS
      </a>
      <a className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">05.</span> CONTACT
      </a>
    </>
  );
  return (
    <nav className="my-glass fixed w-full">
      <div className="navbar lg:w-[1300px] mx-auto">
        <div className="navbar-start">
          <a
            href="#"
            className="text-main-color font-black uppercase lg:text-4xl text-2xl select-none"
          >
            Chandra<span className="text-[#fafafa]">.</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-8">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn lg:btn-md btn-sm primary-btn bg-main-color hover:bg-main-color border-0 rounded">
            <span>Hire me</span>
          </button>
          <div className="dropdown dropdown-left">
            <label
              tabIndex={0}
              className="lg:hidden text-2xl bg-transparent text-white border-0 btn btn-sm"
            >
              <BiMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu gap-3 menu-sm dropdown-content mt-6 ms-10 p-2 shadow my-glass rounded-box w-36"
            >
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
