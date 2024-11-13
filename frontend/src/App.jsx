import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./containers/Dashboard/Dashboard";
import Header from "./components/Layout/Header";
import Inventory from "./containers/Inventory/Inventory";
import Shipment from "./containers/Shipment/Shipment";
import Order from "./containers/Orders/Order";
import Customer from "./containers/Customers/Customer";
import ShipmentTracker from "./containers/Shipment/Tracking";

const App = () => {
  return (
    <Router>
      <div className="flex">
          <Sidebar />
        <div className="flex-1 flex flex-col ml-[20vw]">
          <Header />  
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/shipment" element={<Shipment />} />
            <Route path="/orders" element={<Order/>}/>
            <Route path='/customers' element={<Customer />}/>
            <Route path='/shipment/tracking' element={<ShipmentTracker />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
