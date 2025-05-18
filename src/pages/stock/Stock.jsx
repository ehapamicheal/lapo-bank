import { AiOutlineStock } from "react-icons/ai";
import Header from "../../components/Header";

const Stock = ({onToggleSidebar}) => {
  return (
    <>
        <main className="">
            <Header onToggleSidebar={onToggleSidebar}>
                <div className="flex gap-x-3 items-center">
                    <AiOutlineStock  />
                    <p className="font-medium text-light-dark text-xs md:text-sm">Stock</p>
                </div>
            </Header>

            <section className="w-full mt-9 pl-3 pr-3 xl:pl-9 xl:pr-4 pt-9 ml-0 xl:ml-[230px] xl:w-[calc(100%-230px)]">
                <div className="pb-6">
                    <div className="pb-2 border-b border-b-gray-400">
                        <h3 className="text-gray-900 text-base font-medium md:text-lg">Stock</h3>
                        <p className="font-light text-sm text-gray-600">Add, view stocks here.</p>
                    </div>
                        
                </div>
                
            </section>
        </main>
    </>
  )
}

export default Stock;