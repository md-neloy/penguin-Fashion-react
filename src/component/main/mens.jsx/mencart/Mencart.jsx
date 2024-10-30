import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Mencart = ({ jacket, togolpage }) => {
  return (
    <div>
      <div className="shadow-lg">
        <div className="card shadow-lg rounded-lg transition-transform duration-300 px-3">
          <figure className="relative overflow-hidden rounded-lg group h-[500px]">
            <img
              src={jacket.images[0].src}
              alt="PngItem_2597366"
              className="transition-all group-hover:-translate-x-[500px] h-full w-full"
            />
            <img
              src={jacket.images[1].src}
              alt="PngItem_2597366"
              className="absolute top-0 -right-[500px] w-full h-full transition-all group-hover:right-0"
            />
          </figure>
          <div className="p-4">
            <h4 className="text-lg font-bold">{jacket.title}</h4>
            <p className="text-gray-600 mt-2">{jacket.description}</p>
            <div className="flex justify-between items-center mt-4">
              <h5 className="text-2xl font-bold text-primary">$234</h5>
              <button className="btn btn-primary" onClick={() => togolpage(30)}>
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mencart;
