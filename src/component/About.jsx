import AboutImg from "../assets/Rectangle 1088.png"
import AboutImgTwo from "../assets/Rectangle 1096.png"
export default function About() {
    return (
        <div className="w-full px-4 my-[100px] flex lg:my-[170px] items-center justify-center lg:justify-center lg:h[412px] lg:items-center flex-col  gap-[38px] lg:flex-row lg:gap-[117px] ">
            <div className="flex gap-5 lg:gap-7 w-[339px] lg:w-[570px] lg:h-[412px] ">
                <img src={AboutImg} alt="" className="lg:mb-7 mb-4 w-[160px]  lg:w-full lg:h-full object-contain" />
                <img src={AboutImgTwo} alt="" className="lg:mt-7 mt-4 w-[160px] lg:w-full lg:h-full object-cover " />
            </div>
            <div className="lg:w-[470px] w-[339px]  flex items-start lg:items-start flex-col">
                <h1 className="text-[#1C3F39] text-2xl lg:text-4xl font-bold">About holy quran</h1>
                <p className="mt-3 lg:mt-5 text-start text-[#556561] font-normal text-sm lg:text-base mb-4 lg:mb-3">The Quran, also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation from Allah. It is organized in 30 chapters, 114 surahs which consist of 6666 verses.</p>
                <p className="text-[#556561] text-start font-normal text-sm lg:text-base mb-7 lg:mb-9">In addition to its religious significance, it is widely regarded as the finest work in Arabic literature.</p>
                <a href="" className="btn bg-[#F2AC0D] px-8  text-center text-[#1C3F39] text-lg font-semibold hover:bg-[#1C3F39] transition hover:text-[#F2AC0D]">Learn More</a>
            </div>
        </div>
    );
}