import Logo from "../assets/Logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Nav() {
    return (
        <>
            <footer className="footer flex flex-col  lg:p-10 bg-[#E9E6D7] w-full p-0 m-0">
                <div className="flex gap-[90px] flex-col ">

                    <div className="flex gap-[77px] flex-col">

                        <nav className="w-64  h-auto flex flex-col gap-3">

                            <h6 className="footer-title "><img src={Logo} alt="" /></h6>
                            <a className="text-base font-normal">© 2022 UIHUT All Rights Reserved</a>
                            <div className="flex gap-4 ">
                                <div className="text-3xl bg-[#D1CDB7] p-3 rounded-full cursor-pointer hover:bg-[#F2AC0D] transition">
                                    <FaFacebookF />
                                </div>
                                <div className="text-3xl bg-[#F2AC0D] p-3 rounded-full cursor-pointer hover:bg-[#D1CDB7] transition">
                                    <FaTwitter />
                                </div>
                                <div className="text-3xl bg-[#D1CDB7] p-3 rounded-full cursor-pointer hover:bg-[#F2AC0D] transition">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </nav>
                        <nav className="flex flex-col gap-3 items-start">
                            <h6 className=" text-[#1C3F39] text-sm font-semibold mb-2">Navigate</h6>
                            <a className="link link-hover"> Home</a>
                            <a className="link link-hover">Reciters</a>
                            <a className="link link-hover">About Us</a>
                            <a className="link link-hover">Donate</a>
                        </nav>
                        <nav className="flex flex-col gap-3 items-start">
                            <h6 className=" text-[#1C3F39] text-sm font-semibold mb-2">Network</h6>
                            <a className="link link-hover">QuranicAudio.com</a>
                            <a className="link link-hover">Salah.com</a>
                            <a className="link link-hover">Sunnah.com</a>
                            <a className="link link-hover">Legacy.Quran.com</a>
                            <a className="link link-hover">Previous.Quran.com</a>
                        </nav>
                    </div>
                    <div className="flex gap-[77px] flex-col">

                        <nav className="flex flex-col gap-3 items-start">
                            <h6 className=" text-[#1C3F39] text-sm font-semibold mb-2">Popular Links</h6>
                            <a className="link link-hover">Ayatul Kursi</a>
                            <a className="link link-hover">Yaseen</a>
                            <a className="link link-hover">Al Mulk</a>
                            <a className="link link-hover">Ar-Rahman</a>
                            <a className="link link-hover">Al Waqi'ah</a>
                            <a className="link link-hover">Al Kahf</a>
                            <a className="link link-hover">Al Muzzammil</a>


                        </nav>
                        <nav className="flex flex-col gap-3 items-start">
                            <h6 className=" text-[#1C3F39] text-sm font-semibold mb-2">Resources</h6>
                            <a className="link link-hover">Mobile Apps</a>
                            <a className="link link-hover">Developers</a>
                            <a className="link link-hover">Product Updates</a>
                            <a className="link link-hover">Feedback</a>
                            <a className="link link-hover">Help</a>
                        </nav>
                    </div>
                </div>
                <div className=" w-full flex flex-col items-center">
                    <div className="flex justify-end border-[#556561]  w-full border-b ">
                        <a href="#" className="btn bg-[#26534C] text-white hover:bg-[#F2AC0D]"><IoIosArrowUp /></a>
                    </div>
                    <small className="text-center  flex items-center text-base font-normal gap-2">English <IoIosArrowDown /> </small>
                </div>
            </footer>

        </>
    );
}