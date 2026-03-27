


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFooter from "../../components/footer/MobileFooter";
import NavBar from "../../components/NavBar";

const services = [
  {
    icon: "🚜", label: "Agriculture Equipment",
    bg: "bg-green-50", border: "border-green-100",
    providers: [
      { name: "Ramesh Agro Services", rating: 4.8, reviews: 124, price: "₹1,200/day", available: true, location: "Nashik, MH" },
      { name: "KisanTech Rentals", rating: 4.5, reviews: 89, price: "₹950/day", available: true, location: "Pune, MH" },
      { name: "Green Field Machinery", rating: 4.2, reviews: 56, price: "₹1,100/day", available: false, location: "Ahmednagar, MH" },
    ],
  },
  {
    icon: "💧", label: "Water Tanker",
    bg: "bg-blue-50", border: "border-blue-100",
    providers: [
      { name: "AquaSupply Co.", rating: 4.7, reviews: 210, price: "₹600/trip", available: true, location: "Pune, MH" },
      { name: "Jal Seva Tankers", rating: 4.4, reviews: 145, price: "₹550/trip", available: true, location: "Solapur, MH" },
      { name: "ClearWater Logistics", rating: 4.1, reviews: 78, price: "₹700/trip", available: false, location: "Kolhapur, MH" },
    ],
  },
  {
    icon: "⚡", label: "Electrical Repair",
    bg: "bg-yellow-50", border: "border-yellow-100",
    providers: [
      { name: "Spark Fix Solutions", rating: 4.9, reviews: 320, price: "₹400/visit", available: true, location: "Mumbai, MH" },
      { name: "PowerLine Electricals", rating: 4.6, reviews: 187, price: "₹350/visit", available: true, location: "Pune, MH" },
      { name: "BrightWire Services", rating: 4.3, reviews: 99, price: "₹450/visit", available: true, location: "Nagpur, MH" },
    ],
  },
  {
    icon: "🏗️", label: "Construction Help",
    bg: "bg-orange-50", border: "border-orange-100",
    providers: [
      { name: "BuildRight Contractors", rating: 4.6, reviews: 153, price: "₹2,500/day", available: true, location: "Pune, MH" },
      { name: "Solid Foundation Co.", rating: 4.3, reviews: 112, price: "₹2,200/day", available: false, location: "Aurangabad, MH" },
      { name: "Urban Construct Ltd.", rating: 4.7, reviews: 201, price: "₹3,000/day", available: true, location: "Mumbai, MH" },
    ],
  },
  {
    icon: "🔧", label: "Plumbing",
    bg: "bg-slate-50", border: "border-slate-100",
    providers: [
      { name: "QuickFix Plumbers", rating: 4.8, reviews: 278, price: "₹300/visit", available: true, location: "Pune, MH" },
      { name: "PipePro Services", rating: 4.5, reviews: 164, price: "₹280/visit", available: true, location: "Nashik, MH" },
      { name: "AquaFlow Plumbing", rating: 4.2, reviews: 91, price: "₹350/visit", available: false, location: "Satara, MH" },
    ],
  },
  {
    icon: "🚛", label: "Transport",
    bg: "bg-red-50", border: "border-red-100",
    providers: [
      { name: "SwiftMove Logistics", rating: 4.7, reviews: 340, price: "₹1,800/trip", available: true, location: "Pune, MH" },
      { name: "RoadKing Transporters", rating: 4.4, reviews: 230, price: "₹1,500/trip", available: true, location: "Mumbai, MH" },
      { name: "CargoFirst Services", rating: 4.6, reviews: 178, price: "₹2,000/trip", available: false, location: "Nagpur, MH" },
    ],
  },
];

const steps = [
  {
    id: "01",
    title: "Register",
    desc: "Create your free account",
    icon: "👤",
  },
  {
    id: "02",
    title: "Browse Services",
    desc: "Explore nearby services",
    icon: "🔍",
  },
  {
    id: "03",
    title: "Book",
    desc: "Schedule your service",
    icon: "📅",
  },
  {
    id: "04",
    title: "Pay",
    desc: "Secure & easy payment",
    icon: "💳",
  },
  {
    id: "05",
    title: "Rate",
    desc: "Give feedback & rating",
    icon: "⭐",
  },
];

export default function Dashboard() {
  const [hovered, setHovered] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [browseAll, setBrowseAll] = useState(false);
   const [activeTab, setActiveTab] = useState("dashboard-user");

  const activeService = selectedService !== null ? services[selectedService] : null;

    const User = JSON.parse(localStorage.getItem("userAuth"));
    // console.log(User);
    const navigate = useNavigate();

    const BrowserService = () => {
        navigate("/services");
    };


  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
       <NavBar/>
      <div className="mt-10 w-full max-w-2xl bg-slate-100 rounded-3xl min-h-screen p-5 space-y-6 relative overflow-hidden">

        {/* Header */}
        <div className="pt-4">
          <p className="text-sm text-slate-400 font-medium tracking-wide">Welcome back,</p>
          <div className="flex items-center gap-2 mt-0.5">
            <h1 className="text-2xl font-bold text-slate-800">{User[0]?.username}</h1>
            <span className="text-2xl">🤝</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-3">
          {services.map((s, i) => (
            <button
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => { setSelectedService(i); setBrowseAll(false); }}
              className={`
                flex flex-col items-center justify-center gap-2 rounded-2xl border p-3 pt-4 pb-3
                transition-all duration-200 cursor-pointer
                ${s.bg} ${s.border}
                ${hovered === i ? "scale-105 shadow-md" : "shadow-sm"}
              `}
            >
              <span className="text-2xl">{s.icon}</span>
              <span className="text-[11px] text-center text-slate-600 font-medium leading-tight">
                {s.label}
              </span>
            </button>
          ))}
        </div>

        {/* Browse All Services Button */}
        <button
          onClick={BrowserService}
          className="w-full  cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-2xl py-3.5 flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-blue-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Browse All Services
        </button>

        {/* Recent Bookings */}
        {/* <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-slate-800">Recent Bookings</h2>
            <button className="text-sm text-blue-500 font-medium hover:underline">See all</button>
          </div>

          <div className="space-y-3">
            {bookings.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl px-4 py-3.5 flex items-center justify-between shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800 capitalize">{b.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{b.date}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${b.statusColor}`}>
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div> */}

       <div className="w-full py-10">
  <div className="flex flex-col items-center justify-between gap-6 px-4">

    {steps.map((step, index) => (
      <div key={index} className="flex items-center w-full">

        {/* Step */}
        <div className=" bg-white flex flex-row p-2 gap-2 w-full rounded-lg items-center text-center min-w-[120px]">
          
          {/* Circle */}
          <div className="w-8 h-9 flex items-center justify-center rounded-lg bg-blue-500 text-white font-bold shadow-lg">
            {step.id}
          </div>

         <div>
             {/* Icon */}
          {/* <div className="text-xl mt-2">{step.icon}</div> */}

          {/* Title */}
          <h3 className="font-semibold text-sm mt-1 text-left">{step.title}</h3>

          {/* Description */}
          <p className="text-xs text-gray-500">{step.desc}</p>
         </div>
        </div>

        {/* Line */}
        {/* {index !== steps.length - 1 && (
          <div className="hidden md:block flex-1 h-1 bg-gray-300 mx-4"></div>
        )} */}

      </div>
    ))}

  </div>
</div>
       
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

       {User?.[0].role === "Farmer" && (
                <MobileFooter
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            )}
    </div>
  );
}
