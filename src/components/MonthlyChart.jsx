import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LuMaximize2 } from "react-icons/lu";
import { cardRequests } from '../Data';
import { incomeData, distributionData, data } from '../Data';



const MonthlyChart = () => {

    const getStatusStyles = (status) => {
        switch (status.toLowerCase()) {
            case 'ready':
               return 'bg-green-100 text-green-800';
            case 'in progress':
               return 'bg-yellow-100 text-yellow-700 border border-yellow-300';
            case 'acknowledged':
              return 'bg-blue-100 text-blue-700 border border-blue-300';
            case 'pending':
              return 'bg-gray-100 text-gray-700 border border-gray-300';
            default:
              return 'bg-gray-50 text-gray-500';
        }
    };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-1.5">

        <div className="border border-gray-200 rounded-lg bg-white py-3">
          <div className="flex justify-between mb-8 px-2.5">
            <h2 className="text-gray-700 text-base md:text-lg font-medium">Monthly Issuance</h2>
            <LuMaximize2 className="text-link-text" />
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 9, left: 0, right: 9 }}>
              <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F2F4F7" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                axisLine={false}
                tick={{ fontSize: 15, fill: "#667085" }}
                interval={0}
              />
              <Tooltip />
              <Legend iconType="circle" />
              <Bar dataKey="Personalized" stackId="a" fill="#003DA5" barSize={40} />
              <Bar dataKey="Instant" stackId="a" fill="#A8C7FA" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="border border-gray-200 rounded-lg bg-white py-3 px-2.5 hidden sm:block">
          <div className="flex justify-between mb-4">
            <h2 className="text-gray-700 text-base md:text-lg font-medium">Recent Card Requests</h2>
            <LuMaximize2 className="text-link-text" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100 text-black text-center text-base font-medium">
                  <th className="text-left py-3 px-2">Branch</th>
                  <th className="py-3 px-2">Card Type</th>
                  <th className="py-3 px-2">Quantity</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cardRequests.map((request, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="text-sm text-gray-600 font-normal py-4 px-2 whitespace-nowrap min-w-[100px]">{request.branch}</td>
                    <td className="text-center text-sm text-gray-600 py-4 whitespace-nowrap min-w-[150px]">{request.type}</td>
                    <td className="text-center text-sm text-gray-600 py-4 whitespace-nowrap min-w-[110px]">{request.quantity}</td>
                    <td className="py-4 whitespace-nowrap min-w-[110px]">
                    <span className={`px-3 py-1 rounded-2xl text-sm font-medium flex justify-center ${getStatusStyles(request.status)}`}>
                        {request.status}
                    </span>
                    </td>
                    <td className="text-center py-4 text-blue-800 font-bold text-sm cursor-pointer whitespace-nowrap min-w-[110px]">View</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg bg-white py-3">
            <div className="flex justify-between mb-8 px-2.5">
                <h2 className="text-gray-700 text-base md:text-lgfont-medium">This Week’s Income</h2>
                <LuMaximize2 className="text-link-text" />
            </div>

            <div className="pr-2">
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={incomeData} margin={{ top: 9, left: 0, right: 9 }}>
                    <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F2F4F7" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis
                        domain={[0, 100]}
                        ticks={[0, 20, 40, 60, 80, 100]}
                        interval={0}
                        axisLine={false}
                        tick={{ fontSize: 12, fill: "#667085" }}
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#4DAF01" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="border border-gray-200 rounded-lg bg-white py-3 px-2.5">
          <h2 className="text-gray-700 text-lg font-medium mb-4">Card Status Distribution</h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                innerRadius={71}
                outerRadius={83}
                paddingAngle={1}
                cornerRadius={5}
                dataKey="value"
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", borderRadius: "6px", border: "1px solid #ddd" }}
                itemStyle={{ fontSize: "14px" }}
                formatter={(value, name, props) => (
                  <span style={{ color: props.payload.fill, fontWeight: "bold" }}>{value}</span>
                )}
              />
              <text
                x="50%"
                y="42%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="13px"
                fontWeight="500"
                fill="#666"
              >
                Total Cards
              </text>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20px"
                fontWeight="bold"
                fill="#333"
              >
                2,450
              </text>
              <Legend iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MonthlyChart;