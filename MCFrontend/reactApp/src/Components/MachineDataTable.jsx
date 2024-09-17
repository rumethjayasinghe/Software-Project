import React, { useState, useEffect } from 'react';

const MachineDataTable = () => {
    const [machineData, setMachineData] = useState([
        { machine: 'M1', amount: 100, errors: 2 },
        { machine: 'M2', amount: 200, errors: 1 },
        { machine: 'M3', amount: 150, errors: 3 },
        { machine: 'M4', amount: 250, errors: 0 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedData = machineData.map((data) => ({
                ...data,
                amount: data.amount + Math.floor(Math.random() * 50),
                errors: Math.floor(Math.random() * 5),
            }));

            setMachineData(updatedData);
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, [machineData]);

    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Machine</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                    <th className="py-2 px-4 border-b">Errors</th>
                </tr>
            </thead>
            <tbody>
                {machineData.map((row, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b">{row.machine}</td>
                        <td className="py-2 px-4 border-b">{row.amount}</td>
                        <td className="py-2 px-4 border-b">{row.errors}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MachineDataTable;
