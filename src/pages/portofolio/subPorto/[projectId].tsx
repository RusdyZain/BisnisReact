import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portoData from "@/dataJson/projectData.json"
import Image from 'next/image';

type portoDataType = {
  projectId: number;
  project_name: string;
  description: string;
  client: string;
  completed_date: string;
  services_provided: string[];
  bgUrl: string;
  desk1: string;
  desk2: string;
};

export default function SubPorto() {
  const [data, setData] = useState<portoDataType | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const projectId = router.query.projectId as string;
      const result = portoData.find((value) => value.projectId === parseInt(projectId));
      setData(result);
    }
  }, [router]);

  return (
    <div className='bg-[#252534]'>
      <Header />
      <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='uppercase tracking-widest text-white text-sm'>
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>
            <h1 className='py-4 text-white text-6xl font-extrabold'>
              Hello, <span className='text-[#5651e5]'>{data?.client}</span>
            </h1>
            <h1 className='py-2 text-white text-6xl font-extrabold'>{data?.project_name}</h1>
            <p className='py-4 text-white sm:max-w-[70%] m-auto'>
              I&apos;m focused on building {data?.project_name} for your business.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
              >
                <div className='bg-white rounded-full shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
              >
                <div className='bg-white rounded-full shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <Link href='#'>
                <div className='bg-white rounded-full shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href='#'>
                <div className='bg-white rounded-full shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-5xl font-extrabold tracking-widest text-[#5651e5]'>
              Who I Am
            </p>
            <div className='pt-3 pb-5'>
              {data?.services_provided && (
                <div>
                  <h3 className='text-white font-bold pb-1'>Services Provided:</h3>
                  <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
                    {data.services_provided.map((service, index) => (
                      <li className='text-white font-semibold' key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <p className='py-2 text-white'>{data?.desk1}</p>
            <p className='py-2 text-white'>{data?.desk2}</p>
            <Link href='/portofolio'>
              <p className='py-2 text-white underline cursor-pointer'>
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={data?.bgUrl ?? '/default-image.jpg'} className='rounded-xl' alt='/' width={500} height={500} />
          </div>
          <p className='text-white'>Completed Project: {data?.completed_date}</p>
        </div>
      </div>

      <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='uppercase text-5xl font-extrabold tracking-widest text-[#5651e5]'>
            Skills
          </p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={'/assets/skills/html.png'} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col text-white items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={'/assets/skills/css.png'} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col text-white items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={'/assets/skills/javascript.png'} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col text-white items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={'/assets/skills/react.png'} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col text-white items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={'/assets/skills/tailwind.png'} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col text-white items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={'/assets/skills/firebase.png'} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col text-white items-center justify-center'>
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={'/assets/skills/github1.png'} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col text-white items-center justify-center'>
                  <h3>Github</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={'/assets/skills/nextjs.png'} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col text-white items-center justify-center'>
                  <h3>Next</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}