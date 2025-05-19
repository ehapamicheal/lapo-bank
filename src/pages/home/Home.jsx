import Header from '../../components/Header';
import { MdOutlineCalendarToday } from "react-icons/md";
import { quickAccess } from '../../Data';
import { Link } from 'react-router-dom';
import AnalyticsCard from '../../components/AnalyticsCard';
import { MdOutlineCreditCard } from "react-icons/md";
import { FaHourglassHalf } from "react-icons/fa";
import { MdCreditScore } from "react-icons/md";
import { TbCashBanknote } from "react-icons/tb";
import MonthlyChart from '../../components/MonthlyChart';
import { HiOutlineHome } from "react-icons/hi";




const Home = ({onToggleSidebar}) => {

    const now = new Date();

    // Format for "Last login"
    const loginDate = now.toLocaleDateString('en-GB');
    const loginTime = now.toLocaleTimeString('en-GB');

    const todaysDate = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }); 

    return (
        <>
            <main className="bg-main-color">
                <Header onToggleSidebar={onToggleSidebar}>
                    <div className="flex gap-x-2 items-center">
                        <HiOutlineHome />
                        <p className="font-medium text-light-dark text-xs md:text-sm">Dashboard</p>
                    </div>
                </Header>

                <section className="w-full mt-10 pb-3 pl-3 pr-3 xl:pl-9 xl:pr-4 pt-9 ml-0 xl:ml-[230px] xl:w-[calc(100%-230px)]">

                    <div className="flex justify-between gap-x-3">
                        <div>
                            <h3 className="text-base sm:text-lg font-bold text-text-color">
                            Hi Nazeer, what would you like to do today?
                            </h3>
                            <p className="text-[13px] text-text-color font-medium">
                            Last login:{' '}
                            <span className="font-light text-xs">{loginDate}</span>{' '}
                            <span className="font-light text-xs">{loginTime}</span>
                            </p>
                        </div>

                        <div className="flex flex-col items-center py-2 px-3 sm:gap-x-3 sm:flex-row border border-link-text rounded-lg">
                            <div className="flex items-center gap-x-1">
                            <MdOutlineCalendarToday className="text-sm sm:text-[15px]" />
                            <p className="text-text-color font-medium text-sm sm:text-[15px]">Today</p>
                            </div>

                            <div className="border-t border-t-link-text pt-2 sm:border-t-0 sm:pt-0 mt-2 sm:mt-0 sm:border-l sm:border-l-link-text sm:pl-3">
                            <p className="text-text-color font-light text-xs sm:text-sm">
                                {todaysDate}
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white mt-5 border border-border-color rounded py-3 px-3">
                        <h3 className="text-base font-medium text-text-color">Your Quick Access</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
                            {quickAccess.map((quick, index) => (
                                <Link className="flex items-center bg-accent-link gap-x-2 p-2 transition duration-100 hover:scale-[1.02] rounded" key={index}>

                                    <div className="flex items-center justify-center bg-primary-color rounded-2xl w-7 h-6">
                                        <img src={quick.icon} alt={quick.title} />
                                    </div>

                                    <div className="flex items-center justify-between w-full 2xl:justify-start">
                                        <p className="font-medium text-sm text-text-color">{quick.title}</p>
                                        <span className="text-gray-color">{quick.arrow}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div> 

                    <div className="mt-4 w-full">
                        <h3 className="flex items-center gap-3 font-bold text-base md:text-[18px] text-black relative after:content-[''] after:flex-grow after:h-[1px] after:bg-link-color after:rounded-md">
                            Analytics
                        </h3>

                        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
                            <AnalyticsCard
                                icon={MdCreditScore}
                                title="Total Active Cards"
                                value="26,478"
                                percentage="+9%"
                                iconClass="score_icon"
                            />

                            <AnalyticsCard
                                icon={MdOutlineCreditCard}
                                title="Total Personalized Cards"
                                value="15,703"
                                percentage="8.5%"
                                iconClass="credit_icon"
                            />

                            <AnalyticsCard
                                icon={TbCashBanknote}
                                title="Today’s Revenue"
                                value="₦9.3M"
                                percentage="+6%"
                                iconClass="bank_note_icon"
                            />

                            <AnalyticsCard
                                icon={FaHourglassHalf}
                                title="Pending Requests"
                                value="38"
                                isPending={true} 
                                iconClass="glass_icon"
                            />
                        </div>
                    </div>

                    

                    <MonthlyChart />
                </section>
            </main>
        </>
    )
}

export default Home;