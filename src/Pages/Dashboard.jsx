import { FaCalendarCheck, FaFirstAid, FaStar, FaUser } from "react-icons/fa";
// for area chart
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// for pie chart
import { PieChart, Pie, Cell } from 'recharts';


const Dashboard = () => {
    const data2 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="flex -m-4 text-center space-x-3">
                    <div className="p-2 sm:w-1/4 w-1/2 flex flex-col border rounded-md  items-center justify-center bg-white">
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-red-500 mb-2 pt-2"><FaUser></FaUser></h2>
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-gray-900">168</h2>
                        <p className="leading-relaxed">Doctors</p>
                    </div>
                    <div className="p-2 sm:w-1/4 w-1/2 flex flex-col border rounded-md  items-center justify-center bg-white">
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-orange-500 mb-2 pt-2"><FaFirstAid></FaFirstAid></h2>
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-gray-900">168</h2>
                        <p className="leading-relaxed">Patients</p>
                    </div>
                    <div className="p-2 sm:w-1/4 w-1/2 flex flex-col border rounded-md  items-center justify-center bg-white">
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-green-500 mb-2 pt-2"><FaCalendarCheck></FaCalendarCheck></h2>
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-gray-900">168</h2>
                        <p className="leading-relaxed">Appoinments</p>
                    </div>
                    <div className="p-2 sm:w-1/4 w-1/2 flex flex-col border rounded-md  items-center justify-center bg-white">
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-yellow-500 mb-2 pt-2"><FaStar></FaStar></h2>
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-gray-900">168</h2>
                        <p className="leading-relaxed">Reviews</p>
                    </div>

                </div>
            </div>
            {/* area chart */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 py-8">
                {/* Patients Chart */}
                <div className="bg-white rounded-md p-5  w-full max-w-[500px]">
                    <h2 className="font-semibold text-gray-500 mb-2 pt-2">Patients</h2>
                    <hr className="mb-4" />
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 32 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Appointments Pie Chart */}
                <div className="bg-white rounded-md p-5  w-full max-w-[500px]">
                    <h2 className="font-semibold text-gray-500 mb-2 pt-2">Appointments</h2>
                    <hr className="mb-4" />
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data2}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data2.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;