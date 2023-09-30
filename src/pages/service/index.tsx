import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CardService from '@/components/CardService';
const Service = () => {
  return (
    <div className='bg-[#252534]'>
      <Header />
      <div className="text-center mt-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">
          Kami memiliki Layanan Service Untuk Kebutuhan Perusahaan anda.
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <CardService />
      <Footer />
    </div>
  );
};

export default Service;
