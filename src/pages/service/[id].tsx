import Header from '@/components/Header';
import DetailService from '@/dataJson/serviceData.json';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type ServiceDataType = {
    serviceId: number;
    service_name: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
};
const DetailServices = () => {
    const [data, setData] = useState<ServiceDataType | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const serviceIdFromRouter = router.query.serviceId;

            if (typeof serviceIdFromRouter === 'string') {
                // Konversi serviceIdFromRouter menjadi number jika tipe string
                const serviceIdNumber = parseInt(serviceIdFromRouter, 10);
                const theData = DetailService.find((value) => value.serviceId === serviceIdNumber);
                setData(theData);
            } else {
                // Handle ketika router.query.serviceId adalah undefined atau tipe lainnya
                setData(undefined); // Atau bisa menampilkan pesan kesalahan jika perlu
            }
        }
    }, [router]);

    return (
        <div className='bg-[#252534]'>
            <Header />
            {DetailService.map((item, index) => (
                <section key={item.serviceId}>
                    <div id="detailed-pricing" className="w-full overflow-x-auto">
                        <div className="overflow-hidden min-w-max">
                            <div className="grid grid-cols-4 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                <div className="flex items-center">Service name</div>
                                <div>Community Edition</div>
                                <div>Developer Edition</div>
                                <div>Designer Edition</div>
                            </div>
                            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                <div className="text-gray-500 dark:text-gray-400">{item.service_name}</div>

                                <div>
                                    <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                <div className="text-gray-500 dark:text-gray-400">Application UI (<a href="#" className="text-blue-600 hover:underline">view demo</a>)</div>
                                <div>
                                    <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                <div className="text-gray-500 dark:text-gray-400">Marketing UI pre-order</div>
                                <div>
                                    <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                <div className="text-gray-500 dark:text-gray-400">E-commerce UI pre-order</div>
                                <div>
                                    <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            ))}


        </div>


    );
};

export default DetailServices;
