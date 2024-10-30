import { useEffect, useState } from "react";
import Singlejacket from "./singlejacket/Singlejacket";

const Secondpage = () => {
  const [alljacket, setAlljacket] = useState([]);
  useEffect(() => {
    fetch("alljacket.json")
      .then((res) => res.json())
      .then((data) => setAlljacket(data));
  }, []);
  return (
    <div className="bg-[rgba(164,188,70,0.2)]">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-6">
          <div className="">
            <div className="p-3 bg-[#A4BC46] rounded-tl-lg rounded-tr-lg mb-3">
              <h2 className="text-2xl font-medium text-black mb-3">Brand</h2>
              <div>
                <label>
                  <input type="checkbox" name="" id="sohure" />
                  <span className="ml-2" id="sohure">
                    sohure
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="top10" />
                  <span className="ml-2" id="top10">
                    Top 10
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="arong" />
                  <span className="ml-2" id="arong">
                    Arong
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="sohure" />
                  <span className="ml-2" id="sohure">
                    sohure
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="top10" />
                  <span className="ml-2" id="top10">
                    Top 10
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="arong" />
                  <span className="ml-2" id="arong">
                    Arong
                  </span>
                </label>
              </div>
            </div>
            {/* gender */}
            <div className="p-3 bg-[#A4BC46]   mb-3">
              <h2 className="text-2xl font-medium text-black mb-3">Gender</h2>
              <div>
                <label>
                  <input type="checkbox" name="" id="female" />
                  <span className="ml-2" id="female">
                    Female
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="male" />
                  <span className="ml-2" id="male">
                    Male
                  </span>
                </label>
              </div>
            </div>
            {/* size */}
            <div className="p-3 bg-[#A4BC46] rounded-bl-lg rounded-br-lg mb-3">
              <h2 className="text-2xl font-medium text-black mb-3">Size</h2>
              <div>
                <label>
                  <input type="checkbox" name="" id="sohure" />
                  <span className="ml-2" id="sohure">
                    XS
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="top10" />
                  <span className="ml-2" id="top10">
                    s
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="arong" />
                  <span className="ml-2" id="arong">
                    m
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="sohure" />
                  <span className="ml-2" id="sohure">
                    l
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="top10" />
                  <span className="ml-2" id="top10">
                    xl
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="" id="arong" />
                  <span className="ml-2" id="arong">
                    xxl
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alljacket.map((jacket) => {
              return <Singlejacket key={jacket.id} jacket={jacket} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
