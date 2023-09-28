import React from "react";
import Image from "next/image";

export default function Caption() {
  return (
    <section>
      <div className="place-content-center grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
        <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-[#33363A] text-center ">
          Your Path to Success: Choosing Wisely in Your Career Journey
        </h1>
        <p className="max-w-2xl mb-6 font-light text-[#33363A] lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900 text-center">
          Every job opportunity is a step towards your dreams. Be wise in your
          career choices and make every step your path to success.
        </p>
      </div>
    </section>
  );
}
