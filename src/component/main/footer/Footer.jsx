import footimg from "../../../assets/icon/XMLID 1.png";
import "./footer.css";
import img12 from "../../../assets/icon/image12.png";
import img13 from "../../../assets/icon/image13.png";
import img14 from "../../../assets/icon/image14.png";
const Footer = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
        {/* buttons cart */}
        <div>
          <div className="shadow-2xl mb-5 rounded-xl">
            <div className="flex gap-9 items-center">
              <div className="img">
                <img src={img12} alt="img12" />
              </div>
              <div>
                <h2 className="roboto text-2xl font-bold text-black">
                  Find the Perfect Fit
                </h2>
                <p className="roboto text-base font-normal text-black mt-4">
                  Everybody is different, which is why we offer styles for every
                  body.
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-2xl mb-5 rounded-xl">
            <div className="flex gap-9 items-center">
              <div className="img">
                <img src={img13} alt="img12" />
              </div>
              <div>
                <h2 className="roboto text-2xl font-bold text-black">
                  Free Exchanges
                </h2>
                <p className="roboto text-base font-normal text-black mt-4">
                  One of the many reasons you can shop with peace of mind.
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-2xl mb-5 rounded-xl">
            <div className="flex gap-9 items-center">
              <div className="img">
                <img src={img14} alt="img14" />
              </div>
              <div>
                <h2 className="roboto text-2xl font-bold text-black">
                  Contact Our Seller
                </h2>
                <p className="roboto text-base font-normal text-black mt-4">
                  They are here to help you. That's quite literally what we pay
                  them for.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* footer img icon */}
        <div>
          <img src={footimg} alt="footimg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
