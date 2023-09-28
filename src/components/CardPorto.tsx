import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  imgUrl: string;
  desc: string;
  link: string;
};

export default function CardPorto(props: Props) {
  return (
    <Link className="flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5" href={props.link}>
      <div className="w-full h-52 overflow-hidden rounded-xl bg-red-400 relative">
        <Image
          className="w-full object-cover rounded-xl"
          src={props.imgUrl}
          alt="Image Description"
          fill
        />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800  ">{props.title}</h3>
        <p className="mt-5 text-gray-600 ">{props.desc}</p>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <div className="relative w-8 h-8">
          <Image
            className="rounded-md"
            width={32} 
            height={32}
            src="/logo.png"
            alt="Image Description"
          />
        </div>
        <div>
          <h5 className="text-sm text-gray-800 ">Oleh Rafflesia Team</h5>
        </div>
      </div>
    </Link>
  );
}
