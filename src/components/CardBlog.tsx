import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/dataJson/blogData.json"

export default function DetailBlog() {
  return (
    <>
      {
        blogData.map((item, index) => (
          <Link key={item.id} className="flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5" href={"/blog/subBlog/" + item.id}>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-5 text-white ">{item?.content}</p>
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
                <h5 className="text-sm text-white ">Oleh Rafflesia Team</h5>
              </div>
            </div>
          </Link>
        ))
      }
    </>
  );
}