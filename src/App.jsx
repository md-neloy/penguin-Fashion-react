import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Secondpage from "./component/secondpage/Secondpage";
import LoginModal from "./component/modal/LoginModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = () => {
    toast.error("Email OR Password is missing!", {
      position: "top-left",
    });
  };
  const [display1, setDisplay1] = useState("block");
  const [display2, setDisplay2] = useState("hidden");
  const [display3, setDisplay3] = useState("hidden");
  const [productId, setProductId] = useState([]);
  const togolpage = (id) => {
    if (id === 10) {
      setDisplay1("block");
      setDisplay2("hidden");
      setDisplay3("hidden");
    } else if (id === 20) {
      setDisplay1("hidden");
      setDisplay3("hidden");
      setDisplay2("block");
    } else if (id === 30) {
      setDisplay1("hidden");
      setDisplay2("hidden");
      setDisplay3("block");
    }
  };
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header togolpage={togolpage} />
      <div className={display1}>
        <Main togolpage={togolpage} />
      </div>
      <div className={display2}>
        <Secondpage />
      </div>
      {/* custome modal for login */}
      <div
        className={`absolute top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(164,188,70,0.2)] ${display3}`}
      >
        <div
          className="absolute top-10 right-10 cursor-pointer"
          onClick={() => {
            togolpage(10);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <LoginModal togolpage={togolpage} notify={notify} />
      </div>
    </>
  );
}

export default App;
