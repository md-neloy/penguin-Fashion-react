import { useState } from "react";

const LoginModal = ({ togolpage, notify }) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="shadow-lg bg-[rgba(164,188,70,0.6)] p-10 w-1/4 rounded-lg">
      <form>
        <div className="w-full">
          <label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email here"
              className="bg-transparent border-2 border-solid border-white outline-none w-full placeholder:text-black placeholder:font-medium p-3 rounded-lg"
            />
          </label>
        </div>
        <div className="w-full mt-3">
          <label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="email"
              placeholder="Enter your password here"
              className="bg-transparent border-2 border-solid border-white outline-none w-full placeholder:text-black placeholder:font-medium p-3 rounded-lg"
            />
          </label>
        </div>
        <button
          className="w-full bg-[rgb(164,188,70)] p-3 mt-3 text-2xl rounded-lg text-white"
          onClick={() => {
            if (pass && email) {
              togolpage(10);
            } else {
              notify();
            }
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
