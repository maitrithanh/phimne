import TypewriterC from "@/components/client/TypewriterC";
import SectionFilm from "@/view/SectionFilm/SectionFilm";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const HomePage = () => {
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold gap-4">
            <TypewriterC
              text1="Không giới hạn phim, TV shows, và nhiều hơn thế"
              text2="Nhiều ưu đãi hấp dẫn khi đăng ký ngay hôm nay"
            />
          </h1>
          <h2 className="text-3xl">Xem mọi nơi. Huỷ bất cứ lúc nào.</h2>
          <p className="mt-4">
            Bạn đã sẵn sàng xem chưa? Nhập email của bạn để tạo hoặc khởi động
            lại tư cách thành viên của bạn.
          </p>
          <div className="p-2 w-full">
            <input
              type="email"
              className="p-4 w-3/4 h-14 rounded-s-lg outline-none"
              placeholder="Địa chỉ Email"
            />
            <button className="w-1/4 font-bold bg-rose-700 h-14 rounded-e-lg group">
              <span className="flex items-center justify-center text-white group-hover:scale-110 transition-all">
                Bắt đầu <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce text-rose-900">
          <Link href={"#sectionFilm"}>
            <FaLongArrowAltDown size={34} />
          </Link>
        </div>
      </div>

      <div className="my-4" id="sectionFilm">
        {/* <CardFilm /> */}
        <SectionFilm />
      </div>
    </div>
  );
};

export default HomePage;
