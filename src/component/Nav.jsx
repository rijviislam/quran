import Logo from "../assets/Logo.png"

export default function Nav() {
    return (
        <>
            <div className="navbar hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Pages</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <img src={Logo} alt="quran" className="cursor-pointer" />
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 flex gap-11">
                        <li className="cursor-pointer text-[#556561] font-normal text-base hover:text-black transition"><a>Home</a></li>
                        <li className="cursor-pointer text-[#556561] font-normaltext-base hover:text-black transition"><a>About</a></li>
                        <li className="cursor-pointer text-[#556561] font-normal text-base hover:text-black transition"><a>Pages</a></li>
                        <li className="cursor-pointer text-[#556561] font-normal text-base hover:text-black transition"><a>Blog</a></li>
                        <li className="cursor-pointer text-[#556561] font-normal text-base hover:text-black transition"><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <a className="btn bg-transparent border-none shadow-none hover:bg-[#26534C] hover:text-white text-base font-semibold transition-colors">Login</a>
                    <a className="btn bg-[#26534C] text-base font-semibold text-white hover:bg-transparent hover:text-black border-none shadow-none">Sign up</a>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#556561] lg:mt-8 "></div>
        </>
    );
}