import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { portoData } from './index'
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";

type portoDataType = {
  projectId: number;
  link: string;
  project_name: string;
  description: string;
  client: string;
  completed_date: string;
}
export default function Project() {
  const [data, setData] = useState<portoDataType | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;
      const result = portoData.find((value) => value.projectId === parseInt(id));
      setData(result);
    }
  }, []);
  
  return (
    <div>
      <Header/>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              
              <div className="grow">
                <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                  <div>
                    Completed : {data?.completed_date}
                  </div>
                  <button
                    type="button"
                    className="py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm "
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl ">{data?.project_name}</h2>
              <p className="text-lg text-gray-800 ">
                At preline, our mission has always been focused on bringing
                openness and transparency to the design process. We&apos;ve
                always believed that by providing a space where designers can
                share ongoing work not only empowers them to make better
                products, it also helps them grow.
              </p>
            </div>
            <p className="text-lg text-gray-800 ">
              We&apos;re proud to be a part of creating a more open culture and
              to continue building a product that supports this vision.
            </p>
            <figure>
              {/* <div className="w-full h-[410px] object-cover rounded-xl relative">
                <Image
                  src={data ? data.imgUrl : "/"}
                  alt="Image Description"
                  fill
                  className="w-full object-cover rounded-xl"
                />
              </div> */}

              <figcaption className="mt-3 text-sm text-center text-gray-500">
                A woman sitting at a table.
              </figcaption>
            </figure>
            <p className="text-lg text-gray-800 ">
              As we&apos;ve grown, we&apos;ve seen how Preline has helped
              companies such as Spotify, Microsoft, Airbnb, Facebook, and
              Intercom bring their designers closer together to create amazing
              things. We&apos;ve also learned that when the culture of sharing
              is brought in earlier, the better teams adapt and communicate with
              one another.
            </p>
            <p className="text-lg text-gray-800 ">
              That&apos;s why we are excited to share that we now have a{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
              >
                free version of Preline
              </a>
              , which will allow individual designers, startups and other small
              teams a chance to create a culture of openness early on.
            </p>
            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal ">
                To say that switching to Preline has been life-changing is an
                understatement. My business has tripled and I got my life back.
              </p>
              <p className="mt-5 text-gray-800 ">Nicole Grazioso</p>
            </blockquote>
          </div>
        </div>
        <div className="border-b" />
      </div>
      <Footer/>
    </div>
  )
}
