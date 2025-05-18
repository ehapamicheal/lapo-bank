import Header from '../../components/Header';
import { CiSearch } from "react-icons/ci";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineDateRange, MdOutlineFilterList } from "react-icons/md";
import PaginationButton from '../../components/PaginationButton';
import { Link } from "react-router-dom";
import ComplaintsFilterModal from '../../components/modals/ComplaintsFilterModal';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/complaintsSlice';
import { RiCloseLine } from "react-icons/ri";


const ComplaintsResolve = ({onToggleSidebar}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const dispatch = useDispatch();

    const { resolveComplaints, currentPage, complaintsPerPage } = useSelector(
        (state) => state.complaints
    );

    const filteredResolved = resolveComplaints.filter((log) =>
        log.account.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        dispatch(setPage(1));
    }, [searchTerm, dispatch]);

    const startIndex = (currentPage - 1) * complaintsPerPage;
    const currentComplaintsResolved = filteredResolved.slice(
        startIndex,
        startIndex + complaintsPerPage
    );

  const totalPages = filteredResolved.length === 0 ? 0 : Math.ceil(filteredResolved.length / complaintsPerPage);


    return (
        <>
            <main className="bg-main-color">
                <Header onToggleSidebar={onToggleSidebar}>
                    <div className="flex gap-x-2 items-center">
                        <AiOutlineFileDone />
                        <p className="font-medium text-light-dark text-xs md:text-sm">Complaints: Resolve</p>
                    </div>
                </Header>

                 <section className="w-full mt-9 pl-3 pr-3 xl:pl-9 xl:pr-4 pt-9 ml-0 xl:ml-[230px] xl:w-[calc(100%-230px)]">
                    <div className="pb-6">
                        <div className="pb-2 border-b border-b-gray-400">
                            <h3 className="text-gray-900 text-base font-medium md:text-lg">Complaints: Resolve</h3>
                            <p className="font-light text-sm text-gray-600">View details of treated complaints and resolve pending ones here.</p>
                        </div>

                        <div className="mt-3 flex items-center gap-x-3 w-fit bg-white border border-gray-300 rounded px-3 overflow-hidden">
                            <Link to="/complaints-log" className="text-sm font-medium py-1 cursor-pointer flex items-center gap-2 text-gray-800">
                                <p className="text-gray-800 text-sm font-medium">Pending</p>
                            </Link>
                            

                            <div className="w-px bg-gray-300 h-9" />

                            <Link to="/complaints-resolve" className="text-sm font-medium py-1 cursor-pointer flex items-center gap-2 text-gray-800">
                                <span className="w-2.5 h-2.5 bg-blue-dark rounded-full" />
                                <p className="text-gray-800 text-sm font-medium">Resolved</p>
                            </Link>

                        </div>

                        <div className="mt-6 pt-1 border border-gray-300 rounded-sm">
                            <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row px-1">
                                <div className="bg-white shadow-lg flex items-center gap-x-2 px-2 py-3 rounded"> 
                                    <CiSearch />
                                    <input
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 outline-none text-gray-700 text-base font-medium placeholder:font-normal placeholder:text-xs placeholder:text-gray-500"
                                        type="text"
                                        placeholder="Search complaint"
                                    />
                                    {searchTerm && (
                                        <button type="button" onClick={() => setSearchTerm("")} className="text-gray-400 text-base cursor-pointer"><RiCloseLine /></button>
                                    )}
                                </div>


                                <div className="flex items-end justify-end gap-x-3 mt-4 sm:mt-0 sm:items-center sm:justify-normal">
                                    <div className="flex items-center gap-x-1 py-3 px-2 rounded-md  border-gray-300 bg-white">
                                        <MdOutlineDateRange />
                                        <p className="font-medium text-xs text-gray-700">Date</p>
                                    </div>

                                    <div className="">
                                        <button onClick={() => setIsFilterModalOpen(true)} className="group flex items-center gap-x-1 py-3 px-2 rounded-md cursor-pointer border border-gray-300 bg-white hover:bg-blue-dark transition delay-75" type="button">
                                            <MdOutlineFilterList className="group-hover:text-white" />
                                            <span className="font-medium text-xs text-gray-700 group-hover:text-white">Filter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t bg-white border-t-gray-300 mt-2 pb-4">
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="text-sm md:text-base font-medium min-w-[150px] text-gray-600 text-left pl-2 xl:pl-6 py-2 border-r border-r-gray-300 whitespace-nowrap">Account Number</th>
                                                <th className="text-sm md:text-base font-medium min-w-[150px] text-gray-600 py-2 border-r border-r-gray-300 whitespace-nowrap">Customer Name</th>
                                                <th className="text-sm md:text-base font-medium text-gray-600 py-2 border-r border-r-gray-300 whitespace-nowrap">Submission Date</th>
                                                <th className="text-sm md:text-base font-medium min-w-[150px] text-gray-600 py-2 whitespace-nowrap">Category</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {currentComplaintsResolved.length > 0 ? (
                                                currentComplaintsResolved.map((log) => (
                                                    <tr key={log.id} className="">
                                                        <td className="whitespace-nowrap pl-2 xl:pl-6 py-2 text-left font-light text-gray-600 text-xs md:text-sm border-t border-t-gray-300 border-r border-r-gray-300 border-b border-b-gray-300">{log.account}</td>
                                                        <td className="whitespace-nowrap py-2 min-w-[150px] font-light text-gray-600 text-xs md:text-sm border-r border-r-gray-300 text-center border-t border-t-gray-300 border-b border-b-gray-300">{log.customerName}</td>
                                                        <td className="whitespace-nowrap min-w-[150px] py-2 border-r border-r-gray-300 border-t border-t-gray-300 border-b border-b-gray-300">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <p className="font-light text-gray-600 text-xs md:text-sm">{log.date}</p>
                                                                <p className="font-light text-gray-600 text-xs md:text-sm">{log.time}</p>
                                                            </div>
                                                        </td>

                                                        <td className="whitespace-nowrap min-w-[180px] py-2 font-light text-gray-600 text-xs md:text-sm text-center border-t border-t-gray-300 border-b border-b-gray-300">{log.category}</td>
                                                    </tr>
                                                    ))
                                                ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center text-xs md:text-sm py-6 text-gray-500 font-medium">
                                                        🚫 No complaints found for your search.
                                                    </td>
                                                </tr>
                                            )}

                                        </tbody>
                                    </table> 
                                </div>

                                <PaginationButton
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={(page) => dispatch(setPage(page))}
                                />
                            </div>

                        </div>

                        
                    </div>

                
                </section>
            </main>

            <ComplaintsFilterModal isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)} />
        </>
   )
}

export default ComplaintsResolve;