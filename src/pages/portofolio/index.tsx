import React from 'react';
import ProjectItem from '@/components/CardPorto';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div className='bg-[#252534]'>
      <Header />
      <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 text-center'>
          <p className='text-white text-2xl font-bold md:text-6xl md:leading-tight'>
            Projects
          </p>
          <h2 className='text-white pb-10 pt-3 justify-center'>Dalam dunia bisnis yang kompetitif, inovasi dan strategi yang tepat dapat membuat perbedaan besar. Saya bangga mempresentasikan portofolio bisnis saya yang mencerminkan keahlian dan dedikasi saya dalam mencapai kesuksesan. Portofolio ini mencakup berbagai proyek bisnis yang telah saya jalani, menampilkan pengalaman dan hasil kerja keras saya. Selamat menikmati penjelajahan melalui berbagai proyek yang telah saya rancang, kembangkan, dan implementasikan dalam perjalanan bisnis saya.</h2>
          <div className='grid md:grid-cols-3 gap-5'>
            <ProjectItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};