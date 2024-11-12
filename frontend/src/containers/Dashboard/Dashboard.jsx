import DashboardCard from "../../components/Cards/DashboardCards";
import DashboardTabs from "../../components/Tabs/DashboardTab";
import ShippingIcon from "../../assets/icons/ShippingIcon";
import PackageIcon from "../../assets/icons/PackageIcon";
import PaymentIcon from "../../assets/icons/PaymentIcon";
import CheckCircle from "../../assets/icons/CheckCiricle";
import LineChart from "../../components/Charts/LineChart";
import BarChartGraph from "../../components/Charts/BarChart";
import Button from "../../components/Buttons/Button";
import Table from "../../components/Table/Table";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import { useState } from "react";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { label: "Order Id", accessor: "orderId" },
    { label: "Category", accessor: "category" },
    { label: "Delivery Time", accessor: "deliveryTime" },
    { label: "Destination", accessor: "destination" },
    { label: "Fee", accessor: "fee" },
    { label: "Status", accessor: "status" },
  ];

  const shipmentData = [
    {
      orderId: "ABC2429Z",
      category: "Electronics",
      deliveryTime: "22/09/2024",
      destination: "USA",
      fee: "$1000",
      status: "Delivered",
    },
    {
      orderId: "ALX0007P",
      category: "Furniture",
      deliveryTime: "22/09/2024",
      destination: "Canada",
      fee: "$1290",
      status: "Pending",
    },
    {
      orderId: "ACW1239L",
      category: "Clothing",
      deliveryTime: "22/09/2024",
      destination: "Nepal",
      fee: "$2500",
      status: "Shipping",
    },
    {
      orderId: "TRX1129P",
      category: "Auto Parts",
      deliveryTime: "22/09/2024",
      destination: "China",
      fee: "$3200",
      status: "Pending",
    },
    {
      orderId: "LLP9920Z",
      category: "Walmart Supply",
      deliveryTime: "22/09/2024",
      destination: "India",
      fee: "$1990",
      status: "Delivered",
    },
    {
      orderId: "TCA1192R",
      category: "Shoes",
      deliveryTime: "22/09/2024",
      destination: "France",
      fee: "$2725",
      status: "Shipping",
    },
    {
      orderId: "ACW1239L",
      category: "Electronics",
      deliveryTime: "22/09/2024",
      destination: "Korea",
      fee: "$8920",
      status: "Delivered",
    },
  ];
  return (
    <div className="bg-body-color w-full h-screen flex flex-col ps-2 pe-6 py-4">
      <div className="flex justify-between">
        <DashboardTabs />
        <div className="rightButtons flex items-center gap-2">
          <Button
            text="Week"
            bgColor="white"
            weight="500"
            textColor="gray"
            icon={<DownArrowIcon />}
          />
          <button
            className="bg-[#003DFF] text-white rounded-md shadow-lg px-4 py-2"
            onClick={() => setIsModalOpen(true)}
          >
            + New Shipment
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        <DashboardCard
          title="Total Shipments"
          value="71.21"
          subtitle="vs Last week"
          trend={-3.2}
          icon={ShippingIcon}
        />
        <DashboardCard
          title="Total Orders"
          value="92"
          subtitle="vs Last week"
          trend={9.3}
          icon={PackageIcon}
        />
        <DashboardCard
          title="Revenue"
          value="$ 13.71K"
          subtitle="vs Last week"
          trend={-1.7}
          icon={PaymentIcon}
        />
        <DashboardCard
          title="Delivered"
          value="140"
          subtitle="vs Last week"
          trend={4.7}
          icon={CheckCircle}
        />
      </div>
      <div className="grid grid-cols-2 mt-6">
        <div className="w-[500px]">
          <BarChartGraph />
        </div>
        <div className="w-[670px] h-[50px] ms-[-80px] shadow-lg">
          <LineChart />
        </div>
      </div>
      <div className="h-[50px]">
        <Table
          columns={columns}
          data={shipmentData}
          title="Shipment Tracking"
        />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 max-w-lg rounded-lg shadow-lg relative">
            <div className="bg-[#f5f5f5] rounded flex justify-between pt-2 px-4">
              <h2 className="text-lg font-semibold mb-4">Add Shipment</h2>
              <button
                className="bg-white px-2 rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
            </div>
            <form className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="productName"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="productID"
                >
                  Product ID
                </label>
                <input
                  type="text"
                  id="productID"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="pickupLocation"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickupLocation"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dropLocation"
                >
                  Drop Location
                </label>
                <input
                  type="text"
                  id="dropLocation"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="file"
                >
                  Upload File
                </label>
                <input
                  type="file"
                  id="file"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
            <div className="mt-4 flex justify-end space-x-2">
              <Button
                text="Cancel"
                bgColor="gray-500"
                textColor="white"
                onClick={() => setIsModalOpen(false)} // Close modal on click
              />
              <Button text="Add Shipment" bgColor="#003DFF" textColor="white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
