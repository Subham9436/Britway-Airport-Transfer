import { useState } from "react";
import VehicleCard from "../components/vehicleCard";

const vehicles = [
  {
    id: 1,
    name: "Saloon",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1745910859WhatsApp%20Image%202025-04-26%20at%2002.01.21_eec78427.jpg",
    description: "VW Passat, Kia Niro or similar",
    passengers: 3,
    checkIn: 2,
    handLuggage: 2,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 73,
    returnPrice: 146,
    discountPrice: 139,
  },
  {
    id: 2,
    name: "ESTATE",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1745911639download.jpeg",
    description: "Hyundai Tucson, Toyota RAV4 or similar",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 3,
    name: "EXECUTIVE SALOON",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1745910927WhatsApp%20Image%202025-04-26%20at%2002.01.44_ac4e4364.jpg",
    description: "Mercedes E-Class, BMW 5 Series or similar",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 4,
    name: "MPV5",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1745910980WhatsApp%20Image%202025-04-26%20at%2002.00.24_fa629e1d.jpg",
    description: "Ford Galaxy, VW Sharan or similar",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 5,
    name: "7 SEATER",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1745911043WhatsApp%20Image%202025-04-26%20at%2002.06.04_1e9ce7ca.jpg",
    description: "VW sharan",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 6,
    name: "EXECUTIVE ESTATE",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1745912647cfa6b484840b45c5beaa321998d1fecc.jpg",
    description: "Hyundai Tucson, Toyota RAV4 or similar",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 7,
    name: "EXECUTIVE MPV5",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1745911383Lexus-ES-350.jpg",
    description: "Lexus LM, Tesla Model Y, Jaguar I-PACE or similar",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 8,
    name: "8 SEATER BEST VALUE",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/17446303868%20seat.png",
    description: "VW Transporter, Vauxhall Vivaro or similar",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 9,
    name: "9 SEATER",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1748438835New-Indy_Colours_Agate-Black.jpg",
    description: "Ford Tourneo 9 Seater (Custom), Vito or V-Class",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 10,
    name: "EXECUTIVE 8 SEATER TOP SERVICE",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/1745911135WhatsApp%20Image%202025-04-26%20at%2002.00.58_5baa6c32.jpg",
    description: "Mercedes V-Class, Vito or similar",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
  {
    id: 11,
    name: "VIP EXECUTIVE",
    image:
      "https://bookingform.britwayairporttransfer.co.uk/uploads/17484369122660_1_28367.jpg",
    description: "Mercedes S-class",
    passengers: 4,
    checkIn: 3,
    handLuggage: 3,
    features: [
      { label: "Meet & Greet", value: "Free" },
      { label: "Free Waiting Time*", value: "Free" },
      { label: "Door-to-door", value: "Free" },
      { label: "Luggage Assist", value: "Free" },
      { label: "Flight Tracking", value: "Free" },
    ],
    oneWayPrice: 90,
    returnPrice: 180,
    discountPrice: 170,
  },
];

export default function VehicleList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {vehicles.map((v) => (
        <VehicleCard
          key={v.id}
          vehicle={v}
          onSelect={setSelectedId}
          selectedId={selectedId}
        />
      ))}
    </div>
  );
}
