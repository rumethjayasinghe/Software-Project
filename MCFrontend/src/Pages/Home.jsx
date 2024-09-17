import React from 'react';
import CalendarComponent from '../Components/CalendarComponent';
import MachineDataTable from '../Components/MachineDataTable';


const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section 
                className="hero py-10 flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('https://www.midassafety.com/wp-content/uploads/2022/06/Midas-Sustainability-1920x560-b.jpg')", 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}   
            >
                <div className="text-center bg-transparent">
                    <h1 className="text-5xl font-bold text-white">Welcome to Promco 2.0</h1>
                </div>
            </section>

            {/* Dashboard Section */}
            <section className="dashboard bg-gray-100 dark:bg-gray-900 py-16">
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
                    <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
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
                        <button
                            type="submit"
                            className="col-span-2 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Additional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="bg-teal-500 w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-2">
                                <span className="text-white text-2xl">🏃</span>
                            </div>
                            <h3 className="text-lg font-semibold">About Machines</h3>
                            <p>Machine Safety</p>
                            <p>Emergency Protocols</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-teal-500 w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-2">
                                <span className="text-white text-2xl">📞</span>
                            </div>
                            <h3 className="text-lg font-semibold">Phone (Landline)</h3>
                            <p>+123 456 7890</p>
                            <p>+987 654 3210</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-teal-500 w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-2">
                                <span className="text-white text-2xl">📍</span>
                            </div>
                            <h3 className="text-lg font-semibold">Our Location</h3>
                            <p>123 Machine Street</p>
                            <p>Factory Zone, City</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
