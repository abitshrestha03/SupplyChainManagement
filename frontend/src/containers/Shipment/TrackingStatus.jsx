import TrackingOne from "../../assets/images/tracking1.png";
import RedLine from "../../assets/images/redLine.png";
import Transit from "../../assets/images/transit.png";
import Package from "../../assets/images/package.png";
import Delivery from "../../assets/images/Delivery.png";
import Line from "../../assets/images/Line.png";
import CheckCiricle from "../../assets/icons/CheckCiricle";

const TrackingTimeline = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg space-x-2">
      {/* Processing */}
      <div className="flex items-center space-x-2">
        <img src={TrackingOne} />
        <span className="text-sm font-medium text-black hidden lg:block ">Processing</span>
      </div>
      <img src={RedLine} />

      {/* In Transit */}
      <div className="flex items-center space-x-2">
        <img src={Transit} />
        <span className="text-sm font-medium text-black hidden lg:block">In Transit</span>
      </div>
      <img src={RedLine} />

      {/* Package */}
      <div className="flex items-center space-x-2">
        <img src={Package} />
        <span className="text-sm font-medium text-black hidden lg:block">Package</span>
      </div>
      <img src={RedLine} />

      {/* Delivery */}
      <div className="flex items-center space-x-2">
        <img src={Delivery} />
        <span className="text-sm font-medium text-black hidden lg:block">Delivery</span>
      </div>
      <img src={Line} />

      {/* Order Delivered */}
      <div className="flex items-center space-x-2">
        <CheckCiricle />
        <span className="text-sm font-medium text-black hidden lg:block">
          Order Delivered
        </span>{" "}
      </div>
    </div>
  );
};

export default TrackingTimeline;
