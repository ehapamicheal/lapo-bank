import { RiCloseLine } from "react-icons/ri";
import { MdOutlineFilterList } from "react-icons/md";

const ComplaintsFilterModal = ({ isOpen, onClose }) => {

    // removes all non-digit characters
    const handleNumberInput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, ""); 
    };

    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
      <div className="bg-white rounded py-6 w-full max-w-md">
        <div className="flex justify-between items-center px-4 mb-4 pb-3 border-b border-b-gray-300">
            <div className="flex items-center gap-x-3">
                <div className="border border-gray-300 rounded-lg w-8 h-8 flex items-center justify-center">
                   <MdOutlineFilterList />
                </div>
                <div className="">
                    <h2 className="text-gray-900 text-base md:text-lg font-bold">Filter Complaints</h2>
                    <p className="text-gray-600 text-xs md:text-sm font-light">Select conditions and apply</p>
                </div>
            </div>

            <div className="rounded-2xl w-8 h-8 flex items-center justify-center group hover:bg-gray-200 transition duration-75">
                <RiCloseLine className="cursor-pointer text-gray-500 group-hover:text-blue-dark text-2xl" onClick={onClose}/>
            </div>
        </div>

        <div className="flex flex-col gap-y-3 px-4">
            <div className="">
                <label className="text-gray-700 font-medium text-xs md:text-sm block mb-1" htmlFor="category">Category</label>
                <select className="outline-none border border-gray-300 w-full py-2 rounded text-gray-500 text-sm md:text-base px-2" name="" id="">
                    <option value="">Select category from dropdown</option>
                    <option value="Card dispute">Card dispute</option>
                    <option value="Transfer not received">Transfer not received</option>
                    <option value="ATM error">ATM error</option>
                </select>
            </div>

            <div className="">
                <label className="text-gray-700 font-medium text-xs md:text-sm block mb-1" htmlFor="number">Account Number*</label>
                <input className="outline-none border border-gray-300 w-full py-2 rounded text-gray-500 text-sm md:text-base px-2" type="text" onInput={handleNumberInput}  maxLength={10}/>
            </div>

            <div className="">
                <label className="text-gray-700 font-medium text-xs md:text-sm block mb-1" htmlFor="">Customer Name*</label>
                <input className="outline-none border border-gray-300 w-full py-2 rounded text-gray-500 text-sm md:text-base px-2" type="text"/>
            </div>
        </div>

        <div className="mt-4 px-4 pt-3 border-t border-t-gray-300">
            <button type="submit"
              className="cursor-pointer w-full font-bold text-sm md:text-base bg-blue-dark hover:bg-blue-800 transition duration-75 text-white p-2 rounded flex items-center justify-center">
              Apply
            </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsFilterModal;