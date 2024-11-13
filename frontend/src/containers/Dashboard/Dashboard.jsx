import { useState } from "react";
import Button from "../../components/Buttons/Button";
import DashboardCard from "../../components/Cards/DashboardCards";
import DashboardTabs from "../../components/Tabs/DashboardTab";
import ShippingIcon from "../../assets/icons/ShippingIcon";
import PackageIcon from "../../assets/icons/PackageIcon";
import PaymentIcon from "../../assets/icons/PaymentIcon";
import CheckCircle from "../../assets/icons/CheckCiricle";
import LineChart from "../../components/Charts/LineChart";
import BarChartGraph from "../../components/Charts/BarChart";
import Table from "../../components/Table/Table";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import AddShipmentModal from "../Shipment/NewShipmentModal";

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
    <div className="bg-body-color w-full h-screen flex flex-col ps-2 pe-6 py-4 mt-20">
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
      <AddShipmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-stretch justify-center z-50">
          <div className="bg-white w-[848px] rounded-lg shadow-lg relative flex flex-col h-full">
            <div className="bg-[#f5f5f5] rounded-t-lg flex justify-between pt-2 px-4">
              <h2 className="text-lg font-semibold mb-4">Add Shipment</h2>
              <button
                className="bg-white px-2 rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-6 overflow-y-auto flex-grow">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="productName" className="font-semibold text-xs">
                  Product Name
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="Type Product's Name"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="productId" className="font-semibold text-xs">
                  Product ID
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="Type Product's ID"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label
                  htmlFor="pickupLocation"
                  className="font-semibold text-xs"
                >
                  Product ID
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="Type Pickup Location"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="dropLocation" className="font-semibold text-xs">
                  Drop Location
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="Type Drop Location"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="phoneNumber" className="font-semibold text-xs">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="Type Phone Number"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="amount" className="font-semibold text-xs">
                  Amount
                </label>
                <input
                  type="number"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="Type Amount"
                />
              </div>

              <div className="space-y-2 flex flex-col col-span-2">
                <label htmlFor="description" className="font-semibold text-xs">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Product Description"
                  className="w-full min-h-[120px] border border-gray-300 p-2 rounded-md"
                />
              </div>

              <div
                {...getRootProps()}
                className={`w-full col-span-2 border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-primary bg-primary/5"
                    : "border-muted-foreground/25"
                }`}
              >
                <input {...getInputProps()} />
                <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Drag & Drop or{" "}
                  <span className="text-primary font-medium">choose file</span>{" "}
                  to upload
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Supported format: jpeg, png
                </p>
                {files.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium">Selected files:</p>
                    {files.map((file) => (
                      <p
                        key={file.name}
                        className="text-sm text-muted-foreground"
                      >
                        {file.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </form>

            <div className="flex justify-center space-x-2 p-4 mt-[20px]">
              <Button text="Add Shipment" bgColor="#003DFF" textColor="white" />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Dashboard;
