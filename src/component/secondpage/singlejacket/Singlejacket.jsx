import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Singlejacket = ({ jacket }) => {
  return (
    <div className="p-7 shadow-lg rounded-2xl">
      <div className="border-2 border-solid border-[#A4BC46] rounded-2xl overflow-hidden">
        <div className="h-[400px]">
          <img src={jacket.images.src} alt="" className="h-full w-full" />
        </div>
        <div className="flex justify-between items-center p-3 bg-white">
          <p className="text-[#FABE4C] text-4xl">${jacket.price}</p>
          <button className="btn bg-[#A4BC46] text-black font-medium">
            <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singlejacket;
