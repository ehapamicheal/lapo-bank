import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineErrorOutline } from "react-icons/md";

const AnalyticsCard = ({ icon: Icon, title, value, percentage, isPending, iconClass }) => {
  return (
    <div className="border border-border-color rounded-md bg-white p-3 transition-transform duration-300 hover:scale-[1.03]">
      <Icon
        className={`
          text-xl 
          ${iconClass === 'score_icon' && 'text-green-icon'}
          ${iconClass === 'credit_icon' && 'text-violet-purple'}
          ${iconClass === 'bank_note_icon' && 'text-bright-blue'}
          ${iconClass === 'glass_icon' && 'text-orange-shade'}
        `}
      />
      <p className="font-medium text-sm leading-[18px] text-black mt-1">
        {title}
      </p>

      <div className="mt-3 flex justify-between items-center">
        <h2 className="font-bold text-base md:text-[24px] leading-[32.4px] text-text-color">
          {value}
        </h2>

        {isPending ? (
          <div className="flex items-center gap-1">
            <MdOutlineErrorOutline className="text-orange-shade" />
            <p className="text-[12px] font-normal leading-[18px] text-orange-shade">
              Requires attention
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-bg-green rounded-md p-1">
              <GoArrowUpRight className="text-light-green text-[13px]" />
              <p className="text-light-green text-xs font-medium leading-[18px]">
                {percentage}
              </p>
            </div>
            <p className="text-xs font-normal leading-[18px] text-black">
              this month
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


export default AnalyticsCard;