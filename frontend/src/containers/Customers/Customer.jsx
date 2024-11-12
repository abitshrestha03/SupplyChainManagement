import { useState } from "react";
import DashboardCard from "../../components/Cards/DashboardCards";

const Customer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const data = Array(10).fill({
    customerId: "CUS123456",
    name: "John Doe",
    customerType: "Wholesale",
    email: "johndoe21@gmail.com",
    contact: "+977-9129394567",
    address: "Kathmandu, Nepal",
  });

  const openPopup = (customer) => {
    setSelectedCustomer(customer);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-body-color w-full h-screen flex flex-col ps-2 pe-6 py-4">
      <div className="grid grid-cols-4 gap-4 mt-8">
        <DashboardCard
          title="Total Customers"
          value="239"
          subtitle="vs Last week"
          trend={+1.3}
        />
        <DashboardCard
          title="Customer Satisfaction"
          value="94%"
          subtitle="vs Last week"
          trend={+0.92}
        />
        <DashboardCard
          title="Average Retention"
          value="89%"
          subtitle="vs Last week"
          trend={-1.7}
        />
        <DashboardCard
          title="Open Support Ticket"
          value="12"
          subtitle="vs Last week"
          trend={-9.02}
        />
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600 ">
                Customer ID
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Customer Type
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Contact
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.customerId}
                </td>
                <td
                  className="px-6 py-4 border-b border-gray-200 flex items-center cursor-pointer"
                  onClick={() => openPopup(row)}
                >
                  <span className="inline-block w-6 h-6 bg-gray-200 rounded-full mr-2"></span>
                  {row.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.customerType}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-blue-600">
                  <a href={`mailto:${row.email}`}>{row.email}</a>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.contact}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.address}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-1/3">
            <div className="flex bg-[#f5f5f5] pt-2 px-4">
              <h2 className="text-xl font-bold mb-4">Customer Preview</h2>
            </div>
            {selectedCustomer && (
              <div>
                <p>
                  <strong>Customer ID:</strong> {selectedCustomer.customerId}
                </p>
                <p>
                  <strong>Name:</strong> {selectedCustomer.name}
                </p>
                <p>
                  <strong>Customer Type:</strong>{" "}
                  {selectedCustomer.customerType}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${selectedCustomer.email}`}>
                    {selectedCustomer.email}
                  </a>
                </p>
                <p>
                  <strong>Contact:</strong> {selectedCustomer.contact}
                </p>
                <p>
                  <strong>Address:</strong> {selectedCustomer.address}
                </p>
              </div>
            )}
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
