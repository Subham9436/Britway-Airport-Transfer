export function ExpCard() {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg mt-4">
      <div className="bg-red-700 rounded-t-lg p-4 font-semibold text-xl text-white">
        Experience the Difference
      </div>
      <div className="bg-black p-4 space-y-2 rounded-b-lg">
        <div className="bg-black text-white flex ">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>+500000 passengers transported</h3>
        </div>
        <div className="bg-black text-white flex">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>Instant confirmation</h3>
        </div>
        <div className="bg-black text-white flex">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>All-inclusive pricing</h3>
        </div>
        <div className="bg-black text-white flex">
          <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"></img>
          <h3>Secure Payment by Stripe</h3>
        </div>
        <div>
            <img src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/Paypal.png" className="border border-white " >
            </img>
        </div>
      </div>
    </div>
  );
}
