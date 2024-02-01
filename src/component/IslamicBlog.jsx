import BlogImgOne from "../assets/Rectangle 72.png"
import BlogImgTwo from "../assets/Rectangle 72 (1).png"
import BlogImgThree from "../assets/Rectangle 72 (2).png"
import BlogImgFour from "../assets/Rectangle 72 (3).png"
export default function Nav() {
    return (
        <>
            <div>
                <h1 className="text-[#1C3F39] font-bold text-2xl lg:text-[42px]">Latest Islamic blog</h1>
                <p className="mt-5 text-[#556561] text-sm lg:text-base font-normal">Read top free Islamic articles & blog posts on the Internet <br /> and know about islam.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-[70px] place-items-center gap-4 lg:gap-[30px] ">
                <div className="card p-2 lg:p-5 border border-[#CCD3D2] bg-white rounded-lg flex  flex-row gap-[17px] lg:gap-[29px] items-center ">

                    <img src={BlogImgOne} alt="Shoes" className="w-[140px] h-[156px] lg:w-[234px] lg:h-[238px]" />
                    <div className="flex flex-col items-start">
                        <h2 className="text-xs lg:text-xl font-bold text-[1C3F39] text-start">How many times bismillah repeated in Quran?</h2>
                        <div className="w-9 h-[2px] bg-[#26534C] rounded-sm mt-3 mb-2 lg:mt-[18px] lg:mb-[22px]"></div>
                        <p className="text-start text-[10px] lg:text-sm font-normal text-[#556561] mb-2 lg:mb-4">How many times bismillah repeated in Quran? “In the name of God the most merciful...</p>
                        <div className="card-actions justify-end">
                            <button className="btn-primary text-[#F2AC0D] text-[10px] lg:text-sm font-semibold">Read Now</button>
                        </div>
                    </div>
                </div>
                <div className="card p-2 lg:p-5 border border-[#CCD3D2] bg-white rounded-lg flex  flex-row gap-[17px] lg:gap-[29px] items-center ">

                    <img src={BlogImgTwo} alt="Shoes" className="w-[140px] h-[156px] lg:w-[234px] lg:h-[238px]" />
                    <div className="flex flex-col items-start">
                        <h2 className="text-xs lg:text-xl font-bold text-[1C3F39] text-start">How many times bismillah repeated in Quran?</h2>
                        <div className="w-9 h-[2px] bg-[#26534C] rounded-sm mt-3 mb-2 lg:mt-[18px] lg:mb-[22px]"></div>
                        <p className="text-start text-[10px] lg:text-sm font-normal text-[#556561] mb-2 lg:mb-4">How many times bismillah repeated in Quran? “In the name of God the most merciful...</p>
                        <div className="card-actions justify-end">
                            <button className="btn-primary text-[#F2AC0D] text-[10px] lg:text-sm font-semibold">Read Now</button>
                        </div>
                    </div>
                </div>
                <div className="card p-2 lg:p-5 border border-[#CCD3D2] bg-white rounded-lg flex  flex-row gap-[17px] lg:gap-[29px] items-center ">

                    <img src={BlogImgThree} alt="Shoes" className="w-[140px] h-[156px] lg:w-[234px] lg:h-[238px]" />
                    <div className="flex flex-col items-start">
                        <h2 className="text-xs lg:text-xl font-bold text-[1C3F39] text-start">How many times bismillah repeated in Quran?</h2>
                        <div className="w-9 h-[2px] bg-[#26534C] rounded-sm mt-3 mb-2 lg:mt-[18px] lg:mb-[22px]"></div>
                        <p className="text-start text-[10px] lg:text-sm font-normal text-[#556561] mb-2 lg:mb-4">How many times bismillah repeated in Quran? “In the name of God the most merciful...</p>
                        <div className="card-actions justify-end">
                            <button className="btn-primary text-[#F2AC0D] text-[10px] lg:text-sm font-semibold">Read Now</button>
                        </div>
                    </div>
                </div>
                <div className="card p-2 lg:p-5 border border-[#CCD3D2] bg-white rounded-lg flex  flex-row gap-[17px] lg:gap-[29px] items-center ">

                    <img src={BlogImgFour} alt="Shoes" className="w-[140px] h-[156px] lg:w-[234px] lg:h-[238px]" />
                    <div className="flex flex-col items-start">
                        <h2 className="text-xs lg:text-xl font-bold text-[1C3F39] text-start">How many times bismillah repeated in Quran?</h2>
                        <div className="w-9 h-[2px] bg-[#26534C] rounded-sm mt-3 mb-2 lg:mt-[18px] lg:mb-[22px]"></div>
                        <p className="text-start text-[10px] lg:text-sm font-normal text-[#556561] mb-2 lg:mb-4">How many times bismillah repeated in Quran? “In the name of God the most merciful...</p>
                        <div className="card-actions justify-end">
                            <button className="btn-primary text-[#F2AC0D] text-[10px] lg:text-sm font-semibold">Read Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <a href="" className="mt-7 lg:mt-16 btn font-semibold text-lg text-[#1C3F39] bg-[#F2AC0D] px-11 py-3">Read All</a>
        </>
    );
}