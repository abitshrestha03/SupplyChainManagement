import Button from "../../components/Buttons/Button";
import MetricCard from "../../components/Cards/MetricCard";
import StockAvailabilityChart from "../../components/Charts/StockAvailabilityChart";
import Table from "../../components/Table/Table";

const Inventory = () => {
  const columns = [
    { label: 'Product', accessor: 'Product' },
    { label: 'SKU', accessor: 'SKU' },
    { label: 'On Hand', accessor: 'On-hand' },
    { label: 'Units to Reorder', accessor: 'Units-to-Reorder' },
    { label: 'Cost', accessor: 'Cost' },
    { label: 'Action', accessor: 'Action' },
  ];

  const InventoryData = [
    {
      "Product": "Nike Airforce 1",
      "SKU": "LK-200192",
      "On-hand": 1290,
      "Units-to-Reorder": 2500,
      "Cost": "$ 12,200",
      "Action": "Add to Order"
    },
    {
      "Product": "MacBook Pro 14",
      "SKU": "LK-119928",
      "On-hand": 90,
      "Units-to-Reorder": 200,
      "Cost": "$ 122,200",
      "Action": "Order Added"
    },
    {
      "Product": "Kitchen Supply",
      "SKU": "LT-190283",
      "On-hand": 1900,
      "Units-to-Reorder": 2500,
      "Cost": "$ 14,200",
      "Action": "Add to Order"
    },
    {
      "Product": "Auto Parts",
      "SKU": "LT-229102",
      "On-hand": 990,
      "Units-to-Reorder": 1550,
      "Cost": "$ 20,000",
      "Action": "Add to Order"
    },
    {
      "Product": "Walmart Supply",
      "SKU": "LT-009218",
      "On-hand": 880,
      "Units-to-Reorder": 9050,
      "Cost": "$ 12,000",
      "Action": "Order Added"
    },
    {
      "Product": "Shoes",
      "SKU": "LT-119203",
      "On-hand": 1110,
      "Units-to-Reorder": 2250,
      "Cost": "$ 12,200",
      "Action": "Add to Order"
    }
  ]
  return (
    <div className="bg-body-color w-full h-screen flex flex-col ps-2 pe-6 py-4">
      <div className="flex justify-between">
        <div></div>
        <div className="rightButtons flex items-center gap-2">
          <Button text="Week" bgColor="white" textColor="text-gray-700" />
          <Button text="+ New Shipment" bgColor="blue" textColor="white" />
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-6 gap-24">
          <div className="grid grid-cols-2 gap-y-4 gap-x-6  col-span-3 h-[337px] w-[630px]">
            <MetricCard title="Total Inventory" value="$ 520,000" />
            <MetricCard title="Units on Hand" value="1,200" />
            <MetricCard title="Units on Order" value="3,000" />
            <MetricCard title="Units to Reorder" value="500" />
          </div>
          <div className="grid grid-cols col-span-3 h-[337px] w-[545px]">
          <StockAvailabilityChart />
          </div>
        </div>
      </div>
      <Table columns={columns} data={InventoryData} title="Reorder Recommendations"/>
    </div>
  );
};

export default Inventory;
