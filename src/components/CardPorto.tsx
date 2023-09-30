import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/dataJson/projectData.json"

export default function ProjectItem() {
  return (
    <>
      {blogData.map((item, index) => (
        <div key={item.projectId} className="relative flex items-center justify-center h-auto w-full shadow-md shadow-[#3282CD] rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#3282CD]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={item.bgUrl}
            alt="Background"
            width={1000}
            height={1000}
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[30%] translate-x-[-20%] translate-y-[-50%]">
            <h3 className="text-xl font-bold text-white tracking-wider text-center">
              {item.project_name}
            </h3>
            <Link href={"/portofolio/subPorto/" + item.projectId}>
              <p className="text-sm pb-4 pt-2 text-white text-center">{item.description}</p>
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div >
      ))
      }
    </>
  );
};