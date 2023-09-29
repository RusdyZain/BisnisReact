import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceData from '@/datajson/servicedata.json';
const Service = () => {
  return (
    <>
      <Header />
      <div className="text-center mt-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world’s potential Service
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      {ServiceData.map((item, index) => (
        <p key={item.serviceId}>{item.service_name}</p>
      ))}
      <Footer />
    </>
  );
};

export default Service;
