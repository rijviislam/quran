import Logo from "../assets/Logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
export default function Nav() {
    return (
        <>
            <footer className="footer flex flex-col  p-10 bg-[#E9E6D7] ">
                <div className="flex gap-[90px]">

                    <div className="flex gap-[77px]">

                        <nav className="border border-red-600 w-64 p-0 m-0">

                            <h6 className="footer-title"><img src={Logo} alt="" /></h6>
                            <a className="text-base font-normal ">© 2022 UIHUT All Rights Reserved</a>
                            {/* <div className="flex gap-4">
                                <FaFacebookF className="border border-red-500 text-3xl bg-[#D1CDB7] w-[40px] h-[80px]" />
                                <FaTwitter className="border border-red-500 text-3xl bg-[#D1CDB7]" />
                                <FaLinkedinIn className="border border-red-500 text-3xl bg-[#D1CDB7]" />
                            </div> */}
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
                    <div className="flex gap-[77px]">

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