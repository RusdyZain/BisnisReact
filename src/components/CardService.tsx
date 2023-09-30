import ServiceData from '@/dataJson/serviceData.json';
import { useRouter } from 'next/router';
import Link from 'next/link';


const CardService = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-4 pt-4 py-44">
      {ServiceData.map((item, index) => (
        <Link key={item.serviceId} href={`/service/[id]`} as={`/service/${item.serviceId}`}>
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
            <div className="flex flex-col justify-between p-12 leading-normal">
              <h1
                className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                key={item.serviceId}
              >
                {item.service_name}
              </h1>
              <h3 className="font-bold">Features :</h3>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  {item.features[0]}
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  {item.features[1]}
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  {item.features[2]}
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  {item.features[3]}
                </li>
              </ul>
              <div className="flex items-center justify-between mt-4">
                <span className=" font-bold text-gray-900 dark:text-white">
                  {item.price}

                  <button
                    onClick={() =>
                      router.push(`/service/${item.serviceId}`)
                    }
                    type="button"
                    className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                  >
                    Selengkapnya
                  </button>
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardService;
