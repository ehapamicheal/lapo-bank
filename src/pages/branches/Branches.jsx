import Header from "../../components/Header";
import { PiBuildingOffice } from "react-icons/pi";

const Branches = ({onToggleSidebar} ) => {
  return (
    <main className="bg-main-color">
      <Header onToggleSidebar={onToggleSidebar}>
        <div className="flex gap-x-3 items-center">
            <PiBuildingOffice />
            <p className="font-medium text-light-dark text-xs md:text-sm">Branches</p>
        </div>
     </Header>

      <section className="w-full h-screen mt-9 pl-3 pr-3 xl:pl-9 xl:pr-4 pt-9 ml-0 xl:ml-[230px] xl:w-[calc(100%-230px)]">
        <div className="pb-6">
          <div className="pb-2 border-b border-b-gray-400">
              <h3 className="text-gray-900 text-base font-medium md:text-lg">Branches</h3>
              <p className="font-light text-sm text-gray-600">Add branches, view branches and edit branches.</p>
          </div>
            
        </div>
           
      </section>
    </main>
  )
}

export default Branches;