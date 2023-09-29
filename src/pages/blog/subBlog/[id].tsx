import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { blogData } from "../index";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";

type blogDataType = {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
  link: string;
  pgBefore: string;
  pgAfter: string;
};

export default function Project() {
  const [data, setData] = useState<blogDataType | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;
      const result = blogData.find((value) => value.id === parseInt(id));
      setData(result);
    }
  }, [router.isReady, router.query.id]);

  return (
    <>
      <Header />
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0 relative w-12 h-12">
                <Image
                  className="rounded-md"
                  width={52}
                  height={52}
                  src="/logo.png"
                  alt="Image Description"
                />
              </div>
              <div className="grow">
                <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                  <div>
                    <div>
                      <div className="sm:mb-1 block text-left cursor-pointer">
                        <span className="font-semibold text-gray-800 ">
                          Rafflesia Team
                        </span>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full ">
                        Sept 29
                      </li>
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full ">
                        2 min read
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                    Youtube
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl ">{data?.title}</h2>
              <p className="text-justify text-lg text-gray-800 ">{data?.pgBefore}</p>
            </div>
            <figure>
              <div className="w-full h-[410px] object-cover rounded-xl relative">
                <Image
                  src={data ? data.imgUrl : "/"}
                  alt="Image Description"
                  fill
                  className="w-full object-cover rounded-xl"
                />
              </div>

              <figcaption className="mt-3 text-sm text-center text-gray-500">
              Woman Identifying Brand name
              </figcaption>
            </figure>
            <p className="text-justify text-lg text-gray-800 ">{data?.pgAfter}</p>
          </div>
        </div>
        <div className="border-b" />
      </div>
      <Footer />
    </>
  );
}
