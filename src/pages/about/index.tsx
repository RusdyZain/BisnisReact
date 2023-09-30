import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
function about() {
    return (
        <div>
            <Header />
            <div
                id="about"
                className="w-full md:h-screen p-2 flex items-center py-16 bg-[#252534]"
            >
                <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <p className="uppercase text-5xl font-extrabold tracking-widest text-[#5651e5]">
                            About
                        </p>
                        <div className="pt-3 pb-5"></div>

                        <p className="py-2 text-white">
                            A business can be described as an organization or enterprising
                            entity that engages in professional, commercial or industrial
                            activities. There can be different types of businesses depending
                            on various factors. Some are for-profit, while some are
                            non-profit. Similarly, their ownership also makes them different
                            from each other. For instance, there are sole proprietorships,
                            partnerships, corporations, and more. Business is also the efforts
                            and activities of a person who is producing goods or offering
                            services with the intent to sell them for profit.
                        </p>
                        <p className="py-2 text-white">
                            Business refers to an enterprising entity or organization that
                            carries out professional activities. They can be commercial,
                            industrial, or others. For-profit business entities do business to
                            earn a profit, while non-profit ones do it for a charitable
                            mission. Business ownership includes partnerships, sole
                            proprietorships, corporations, etc. Businesses can be small-scale
                            or large-scale. Some of the biggest businesses in the world are
                            Amazon and Walmart.
                        </p>
                    </div>
                    <div className="w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                        <Image
                            src="https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                            className="rounded-xl"
                            alt="orang rapat"
                            width={500}
                            height={500}
                        />
                    </div>
                    <span className="text-white">
                        © 2023{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            Rafflesia™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>

        </div>
    );
}

export default about;