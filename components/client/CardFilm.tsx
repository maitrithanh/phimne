import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface PropsCardFilm {
  name: string;
  slug: string;
  thumb: string;
  original_name: string;
}

const CardFilm: React.FC<PropsCardFilm> = ({
  name,
  slug,
  thumb,
  original_name,
}) => {
  return (
    <div className="relative bg-white w-72 h-[476px] p-4 rounded-md group shadow-2xl">
      <div className="relative h-[300px] flex items-center justify-center">
        <Image
          className="rounded-sm object-cover group-hover:scale-105 transition-all"
          src={thumb}
          fill
          alt="phim"
        />
      </div>
      <Link href={"/" + slug}>
        <h1 className="text-xl my-2 text-nowrap text-ellipsis overflow-hidden hover:text-wrap cursor-pointer">
          {name}
        </h1>
      </Link>

      <p className="max-h-[100px] overflow-auto">{original_name}</p>
      <div className="absolute right-2 bottom-2 w-full flex justify-end items-center">
        <Link
          href={"/" + slug}
          className=" text-[#007bff] flex hover:scale-105 transition-all items-center gap-2  p-1 mt-4 rounded-full px-2"
        >
          <FaPlay />
          Xem phim
        </Link>
      </div>
    </div>
  );
};

export default CardFilm;
