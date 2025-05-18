// SIDEBAR
import { HiOutlineUser } from "react-icons/hi";
import { TbBrandDatabricks } from "react-icons/tb";
import { RiListUnordered } from "react-icons/ri";
import { FaRegMap } from "react-icons/fa6";
import { PiBuildingOffice } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { PiCreditCard } from "react-icons/pi";
import { MdOutlineCreditScore } from "react-icons/md";
import { CiCreditCardOff } from "react-icons/ci";
import { GiSwipeCard } from "react-icons/gi";
import { TbAdjustmentsCheck } from "react-icons/tb";
import { AiOutlineStock, AiOutlineFileDone } from "react-icons/ai";
import { TbFileDescription } from "react-icons/tb";


// QUICK ACCESS
import cardIcon1 from './assets/svgs/card-icon1.svg';
import cardIcon2 from './assets/svgs/card-icon2.svg';
import cardIcon3 from './assets/svgs/card-icon3.svg';
import cardIcon4 from './assets/svgs/card-icon4.svg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



// SIDEBAR  
export const sidebarLinks = [
  { name: "Branches",
    path: "/branches", 
    icon: <PiBuildingOffice /> 
  },
  { name: "Roles",
    path: "/roles", 
    icon: <FaUserShield /> 
  },
  { name: "Users",
    path: "/users", 
    icon: <HiUserGroup /> 
  },
  { name: "Card Scheme", 
    path: "/card-scheme", 
    icon: <TbAdjustmentsCheck /> 
  },
  { name: "Card Profile", 
    path: "/card-profile", 
    icon: <GiSwipeCard /> 
  },
  { name: "Card Request",
    path: "/card-request", 
    icon: <MdOutlineCreditScore /> 
  },
  { name: "Stock", 
    path: "/stock", 
    icon: <AiOutlineStock /> 
  },
  { name: "Cards", 
    path: "/cards",  
    icon: <PiCreditCard /> 
  },
  { name: "Block/Unblock-Card", 
    path: "/block-unblock-card", 
    icon: <CiCreditCardOff /> 
  },
  { name: "Complaints: Log", 
    path: "/complaints-log", 
    icon: <TbFileDescription /> 
  },
  { name: "Complaints: Resolve", 
    path: "/complaints-resolve", 
    icon: <AiOutlineFileDone /> 
  },
  { name: "Authorization List", 
    path: "/authorization-list", 
    icon: <RiListUnordered /> 
  },
  { name: "Authorization Queue", 
    path: "/authorization-queue", 
    icon: <TbBrandDatabricks /> 
  },
  { name: "Trail", 
    path: "/trail", 
    icon: <FaRegMap /> 
  },
  { name: "Account", 
    path: "/account", 
    icon: <HiOutlineUser /> 
  }

];

export const incomeData = [
  { name: "Mon", income: 52 },
  { name: "Tue", income: 35 },
  { name: "Wed", income: 60 },
  { name: "Thu", income: 45 },
  { name: "Fri", income: 47 },
  { name: "Sat", income: 25 },
  { name: "Sun", income: 78 },
];


export const distributionData = [
    { name: "Active", value: 1600, color: "#01A4AF" },
    { name: "Inactive", value: 150, color: "#014DAF" },
    { name: "Blocked", value: 70, color: "#8020E7" },
    { name: "Lost", value:60, color: "#FF4457" },
    { name: "Expired", value: 200, color: "#FFBA24" },
];

export const data = [
  { name: "May", Personalized: 14, Instant: 40 },
  { name: "Jun", Personalized: 25, Instant: 45 },
  { name: "Jul", Personalized: 8, Instant: 20 },
  { name: "Aug", Personalized: 8, Instant: 40 },
  { name: "Sep", Personalized: 10, Instant: 54 },
  { name: "Oct", Personalized: 17, Instant: 65 },
  { name: "Nov", Personalized: 7, Instant: 70 },
];


export const quickAccess = [
  {
    icon: cardIcon1,
    title: "Manage a Card",
    arrow: <MdOutlineKeyboardArrowRight />
  },
  {
    icon: cardIcon2,
    title: "Issue Instant Card",
    arrow: <MdOutlineKeyboardArrowRight />
  },
  {
    icon: cardIcon3,
    title: "Issue Personalized Card",
    arrow: <MdOutlineKeyboardArrowRight />
  },
  {
    icon: cardIcon4,
    title: "Review Card Requests",
    arrow: <MdOutlineKeyboardArrowRight />
  }
];

export const cardRequests = [
  { branch: "Corporate", 
    type: "Instant", 
    quantity: 10,
    status: "Ready", 
    statusClass: "status-ready" 
  },
  { branch: "Corporate", 
    type: "Personalized", 
    quantity: 10, 
    status: "In Progress", 
    statusClass: "status-inprogress" 
  },
  { branch: "Corporate", 
    type: "Personalized", 
    quantity: 10, 
    status: "Acknowledged", 
    statusClass: "status-acknowledged" },
  { branch: "Corporate", 
    type: "Instant", 
    quantity: 10, 
    status: "Pending", 
    statusClass: "status-pending" 
  }
];


export const logComplaints = Array.from({ length: 200 }, (_, i) => {
  const categories = [
    "Card Dispute",
    "Unauthorized Transaction",
    "ATM Error",
    "Transfer Not Received"
  ];

  const names = ["John reel", "Mide martins", "Mike coal", "Jane mark", "Reel bola"];
  const accounts = ["0123456789", "1234567890", "8846325187", "0099321123", "6007842129"];

  const randomDate = new Date(2024, 10, Math.floor(Math.random() * 30 + 1));
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return {
    id: i + 1,
    // account: "0123456789",
    // customerName: "Nazeer Ajibola",
    account: accounts[Math.floor(Math.random() * accounts.length)],
    customerName: names[Math.floor(Math.random() * names.length)],
    date: randomDate.toLocaleDateString(),
    time,
    category: categories[Math.floor(Math.random() * categories.length)],
    status: "Pending",
  };
});


export const resolveComplaints = Array.from({ length: 200 }, (_, i) => {
  const categories = [
    "Card Dispute",
    "Unauthorized Transaction",
    "ATM Error",
    "Transfer Not Received"
  ];

  const names = ["John reel", "Mide martins", "Mike coal", "Jane mark", "Reel bola"];
  const accounts = ["0123456789", "1234567890", "8846325187", "0099321123", "6007842129"];

  const randomDate = new Date(2024, 10, Math.floor(Math.random() * 30 + 1));
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return {
    id: i + 1,
    account: accounts[Math.floor(Math.random() * accounts.length)],
    customerName: names[Math.floor(Math.random() * names.length)],
    date: randomDate.toLocaleDateString(),
    time,
    category: categories[Math.floor(Math.random() * categories.length)],
    status: "Resolve",
  };
});