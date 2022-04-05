import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useAnalysis from '../../hooks/useAnalysis';
import "./Dashboard.css";

const Dashboard = () => {
    const chartData = useAnalysis();
    return (
        <div>
            <h1 className='text-2xl font-bold m-16'>Investment, Sales and Revenue</h1>
            <div className='my-8 grid grid-cols-2 gap-4'>

                <div className='border'>
                    <h1 className='font-bold'>Monthly Revenue</h1>
                    <PieChart width={450} height={250} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <Pie data={chartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={80} fill="#dd84d8" label></Pie>
                    </PieChart>
                </div>

                <div className='border'>
                    <h1 className='font-bold'>Monthly Investment</h1>
                    <AreaChart width={450} height={250} data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

                    </AreaChart >
                </div>

                <div className='border'>
                    <h1 className='font-bold'>Monthly Sell</h1>
                    <LineChart width={450} height={250} data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#1121f1" />

                    </LineChart>
                </div>

                <div className='border'>
                    <h1 className='font-bold'>Monthly Investment vs Revenue</h1>
                    <BarChart width={450} height={250} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;