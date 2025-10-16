export function QuestionCard() {
  const benefits = [
    "Live Chat Available",
    "Support 24/7",
    "Quick quotation",
    "Book now and save up to 30%",
    " No credit card fees",
    "No hidden extras",
    "Friendly staff",
  ];

  return (
    <div className="   md:max-w-xl mx-auto mt-6 border border-gray-300 rounded-2xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-red-700 px-5 py-3 text-white text-lg sm:text-xl font-semibold text-center">
       Have Questions?
      </div>

      {/* Body */}
      <div className="bg-black px-4 sm:px-6 py-5 space-y-3 sm:space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white text-sm sm:text-base md:text-lg"
          >
            <img
              src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/mark.svg"
              alt="check"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <h3 className="leading-snug">{benefit}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
