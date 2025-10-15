export function BenefitCard() {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg mt-4">
      <div className="bg-red-700 rounded-t-lg p-4 font-semibold text-xl text-white">
        Member Benefits
      </div>
      <div className="bg-black p-4 space-y-2 rounded-b-lg">
        <div className="bg-black text-white flex ">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>Quick reservation</h3>
        </div>
        <div className="bg-black text-white flex">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>Booking priority</h3>
        </div>
        <div className="bg-black text-white flex">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>Track reservations</h3>
        </div>
        <div className="bg-black text-white flex">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3> Past booking details</h3>
        </div>
        <div className="bg-black text-white flex">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>Free registration</h3>
        </div>
        <div className="bg-black text-white flex">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>Free Wi-Fi is available on the fleet</h3>
        </div>
      </div>
    </div>
  );
}
