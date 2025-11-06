import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Reviews } from "../components/reviews";

export function Land() {
  return (
    <div>
      <Navbar />
      <div
        className="
  bg-[url(/img/banner.png)] 
  bg-cover bg-black/60 bg-blend-overlay 
  p-10 sm:p-20 md:p-32 
  text-center
"
      >
        <h3 className="font-semibold text-white text-lg sm:text-xl md:text-2xl">
          Airport Transfers UK | Pickup and Drop-off
        </h3>

        <div className="flex justify-center items-center space-x-2 mt-2">
          <h3 className="text-red-700 font-semibold text-xl sm:text-2xl md:text-3xl">
            Britway
          </h3>
          <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl">
            Airport Transfer
          </h3>
        </div>

        <h3 className="text-white mt-2 text-lg sm:text-xl md:text-2xl">
          Comfortable Pre-booked Vehicle Service
        </h3>

        <Reviews />
      </div>
      <div className="relative">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
