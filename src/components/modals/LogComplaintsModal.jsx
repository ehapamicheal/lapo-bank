import { RiCloseLine} from "react-icons/ri";
import { useState, useRef } from "react";
import { LuCloudUpload } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";

const LogComplaintsModal = ({ isOpen, onClose }) => {
     const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null);
 

    if (!isOpen) return null;

       // 🔼 Open file input dialog
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    // 🔼 Preview selected file
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage({ file, preview: imageUrl });
        }
    };

    // 🔼 Remove the uploaded image
    const handleRemoveImage = (e) => {
        e.stopPropagation(); 
        setUploadedImage(null);
        fileInputRef.current.value = ""; 
    };

   // removes all non-digit characters
    const handleNumberInput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, ""); 
    };


    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white z-50 py-4 md:py-6 rounded-lg w-120 shadow-lg">
                <div className="flex justify-between items-center px-4 mb-4 pb-3 border-b border-b-gray-300">
                    <div className="flex items-center gap-x-3">
                        <div className="border border-gray-300 rounded-lg w-8 h-8 flex items-center justify-center">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.6673 9.24935V6.16602C16.6673 4.76588 16.6673 4.06582 16.3948 3.53104C16.1552 3.06063 15.7727 2.67818 15.3023 2.4385C14.7675 2.16602 14.0674 2.16602 12.6673 2.16602H7.33398C5.93385 2.16602 5.23379 2.16602 4.69901 2.4385C4.2286 2.67818 3.84615 3.06063 3.60647 3.53104C3.33398 4.06582 3.33398 4.76588 3.33398 6.16602V14.8327C3.33398 16.2328 3.33398 16.9329 3.60647 17.4677C3.84615 17.9381 4.2286 18.3205 4.69901 18.5602C5.23379 18.8327 5.93385 18.8327 7.33398 18.8327H10.0007M11.6673 9.66602H6.66732M8.33398 12.9993H6.66732M13.334 6.33268H6.66732M15.0007 17.9993V12.9993M12.5007 15.4993H17.5007" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="">
                            <h2 className="text-gray-900 text-base md:text-lg font-bold">Log Complaint</h2>
                            <p className="text-gray-600 text-xs md:text-sm font-light">Select category and fill in details</p>
                        </div>
                    </div>

                    <div className="rounded-2xl w-8 h-8 flex items-center justify-center group hover:bg-gray-200 transition duration-75">
                        <RiCloseLine className="cursor-pointer text-gray-500 group-hover:text-blue-dark text-2xl" onClick={onClose}/>
                    </div>
                </div>

                <form className="overflow-y-auto max-h-[75vh] pb-2" id="formModal">
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

                        <div className="">
                            <label className="text-gray-700 font-medium text-xs md:text-sm block mb-1" htmlFor="">Complaint Details*</label>
                            <textarea className="outline-none border border-gray-300 h-25 w-full py-2 rounded text-gray-500 text-sm md:text-base px-2 resize-none" placeholder="Describe complaint...." name="" id=""></textarea>
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium text-xs md:text-sm block mb-1">
                                Upload File (optional)
                            </label>
                            <input
                                type="file"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                            />

                            <div onClick={handleUploadClick}
                                className="border-dashed border border-link-text h-30 rounded cursor-pointer relative flex items-center justify-center">
                                {uploadedImage ? (
                                    <div className="h-25 w-25">
                                        <img src={uploadedImage.preview} alt="Preview" className="object-cover w-full h-full rounded"/>
                                        <IoIosCloseCircle onClick={(e) => handleRemoveImage(e)}
                                            className="absolute -top-2 -right-3 text-2xl text-red-500 cursor-pointer"/>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center mt-5">
                                        <div className="border border-gray-300 rounded-lg w-8 h-8 flex items-center justify-center">
                                            <LuCloudUpload />
                                        </div>
                                        <div className="mt-2 text-center">
                                            <p className="font-bold text-primary-color text-sm">
                                                Click to upload <span className="text-gray-600 font-light">or drag and drop</span>
                                            </p>
                                            <span className="font-light text-gray-600 text-xs">
                                                JPG, PNG (max. 10MB)
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        

                    </div>

                    <div className="mt-4 px-4 pt-3 border-t border-t-gray-300">
                        <button type="submit"
                        className="cursor-pointer w-full font-bold text-sm md:text-base bg-blue-dark hover:bg-blue-800 transition duration-75 text-white p-2 rounded flex items-center justify-center"
                        >
                        Proceed
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogComplaintsModal;