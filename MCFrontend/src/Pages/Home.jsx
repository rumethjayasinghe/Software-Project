import React from 'react';
import CalendarComponent from '../Components/CalendarComponent';
import MachineDataTable from '../Components/MachineDataTable';


const Home = () => {
    return (
        <div className="home">
            {/* Dashboard Section */}
         <section className="dashboard bg-white dark:bg-gray-900 py-16">
         <div className="bg-white dark:bg-gray-900 -mt-4">
         <div className="relative bg-white dark:bg-gray-900 -mt-4">
    <img
        src="https://www.midassafety.com/wp-content/uploads/2022/06/Midas-Sustainability-1920x560-b.jpg"
        alt="Midas Sustainability"
        className="w-full h-64 object-cover"
    />

    {/* Transparent text overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold bg-transparent bg-opacity-50 px-4 py-2 rounded-lg">
            Welcome to Promco 2.0
        </h1>
    </div>
</div>

</div>

            
                <div className="container mx-auto">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-200 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Calendar</h3>
                                <CalendarComponent />
                            </div>
                            <div className="bg-gray-200 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Latest Updates</h3>
                                <MachineDataTable/>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-12" id="emergency-contact">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Emergency</h2>
                    <p className="mb-8 text-lg">Any questions or emergency? Reach out to the admin panel!</p>

                    <form className="max-w-lg mx-auto grid grid-cols-2 gap-4 mb-6">
                        <input
                            type="email"
                            placeholder="Enter a valid email address"
                            required
                            className="col-span-2 md:col-span-1 p-3 rounded-lg border border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            required
                            className="col-span-2 md:col-span-1 p-3 rounded-lg border border-gray-300"
                        />
                               <input
                            type="text"
                            placeholder="Enter emergency situation"
                            required
                            className="col-span-2 md:col-span-1 p-3 rounded-lg border border-gray-300"
                        />
                           <select
        required
        className="col-span-2 md:col-span-1 p-3 rounded-lg border border-gray-300"
    >
        <option value="">Select emergency level</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
                        <button
                            type="submit"
                            className="col-span-2 bg-red-900 hover:bg-red-600 text-white py-3 rounded-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
