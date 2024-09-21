import React from 'react';
import CalendarComponent from '../Components/CalendarComponent';
import MachineDataTable from '../Components/MachineDataTable';


const Home = () => {
    return (
        <div className="home relative p-6">
            {/* Background Image */}
            <div className="absolute inset-x-0 top-0 -z-10 h-64">
                <div className="w-full h-64 bg-cover bg-center" 
                     style={{ backgroundImage: `url('https://www.midassafety.com/wp-content/uploads/2022/06/Midas-Sustainability-1920x560-b.jpg')` }}>
                </div>
            </div>
            {/* Content Wrapper */}
            <div className="relative z-10">
                {/* Heading Section */}
                <div className="text-center mb-6 mt-24">
                    <h1 className="text-5xl font-bold text-white">Welcome to PROMCO 2.0</h1>
                </div>
                {/* Dashboard Section */}
                <div className="relative mt-10 p-6">
                    <div className="flex gap-4">
                        {/* Latest Updates Section */}
                        <div className="bg-white p-4 rounded-lg shadow-md flex-1"> {/* Equal width */}
                            <h3 className="text-lg font-semibold mb-2">Latest Updates</h3>
                            <MachineDataTable />
                        </div>

                        {/* Calendar Section */}
                        <div className="bg-white p-4 rounded-lg flex-1"> {/* Equal width */}
                            <div className="w-full h-40"> {/* Reduced height */}
                                <CalendarComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
