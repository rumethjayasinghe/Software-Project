import React from 'react';
import CalendarComponent from '../Components/CalendarComponent';
import MachineDataTable from '../Components/MachineDataTable';
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';

const Home = () => {
    return (
        <div className="home flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-grow">
                {/* Topbar */}
                <Topbar />

                {/* Main Content */}
                <div className="home-content p-6" style={{ paddingTop: '3rem', paddingLeft: '16rem' }}>
                    {/* Background Image */}
                    <div className="relative w-full h-64 bg-cover bg-center" 
                         style={{ backgroundImage: `url('https://www.midassafety.com/wp-content/uploads/2022/06/Midas-Sustainability-1920x560-b.jpg')` }}>
                         
                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-5xl font-bold text-white">
                                Welcome to PROMCO 2.0
                            </h1>
                        </div>
                    </div>

                    {/* Dashboard Section */}
                    <div className="relative mt-10 p-6">
                        {/* Flex Container for Table and Calendar */}
                        <div className="flex gap-4">
                            {/* Latest Updates Section */}
                            <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                                <h3 className="text-lg font-semibold mb-2">Latest Updates</h3>
                                <MachineDataTable />
                            </div>

                            {/* Calendar Section */}
                            <div className="bg-white p-4 rounded-lg flex-1">
                                <h3 className="text-lg font-semibold mb-2">Calendar</h3>
                                <div className="w-full h-40">
                                    <CalendarComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
