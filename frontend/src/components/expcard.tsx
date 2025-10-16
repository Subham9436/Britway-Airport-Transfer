import { features, paymentLogos } from "../constants/constantValues";

export function ExpCard() {
  return (
    <div className=" md:max-w-xl mx-auto mt-6 border border-gray-300 rounded-2xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-red-700 px-5 py-3 text-white text-lg sm:text-xl font-semibold text-center">
        Experience the Difference
      </div>

      {/* Body */}
      <div className="bg-black px-4 sm:px-6 py-5 space-y-3 sm:space-y-4 rounded-b-2xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white text-sm sm:text-base"
          >
            <img
              src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"
              alt="check"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <h3 className="leading-snug">{feature}</h3>
          </div>
        ))}

        {/* Payment Logos */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mt-6">
          {paymentLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`payment-logo-${index}`}
              className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
